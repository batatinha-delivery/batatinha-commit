const wrap = require("word-wrap");
const map = require("lodash.map");
const longest = require("longest");
const rightPad = require("right-pad");
const branch = require("git-branch");

const getIssueFromBranch = () => {
  const branchName = branch.sync() || "";
  const jiraIssueRegex = /(?<jiraIssue>[A-Z]+-\d+)/;
  const matchResult = branchName.match(jiraIssueRegex);

  return matchResult && matchResult.groups && matchResult.groups.jiraIssue;
};

module.exports = (options) => {
  const types = options.types;
  const length = longest(Object.keys(types)).length + 1;
  const typeChoices = map(types, (type, key) => ({
    name: rightPad(key + ":", length) + " " + type.description,
    value: key,
  }));

  const branchIssue = getIssueFromBranch();

  return {
    prompter: (cz, commit) => {
      console.log(
        "\nLine 1 will be cropped at 100 characters. All other lines will be wrapped after 100 characters.\n"
      );

      cz.prompt([
        {
          type: "list",
          name: "type",
          message: "Select the type of change that you're committing:",
          choices: typeChoices,
          default: options.defaultType,
        },
        {
          type: "input",
          name: "scope",
          message:
            "What is the scope of this change (e.g. delivery-area, recommendation, jenkins)? (press enter to skip)\n",
          default: options.defaultScope,
        },
        {
          type: "input",
          name: "issue",
          message: `Add JIRA issue reference (e.g. IFOOD-1234) (press enter to skip):\n`,
          default: branchIssue,
          validate: function (jira) {
            return jira === "" || /^[A-Z]+-[0-9]+$/.test(jira);
          },
          filter: function (jira) {
            return jira.toUpperCase();
          },
        },
        {
          type: "input",
          name: "subject",
          message:
            "Write a short, imperative tense description of the change:\n",
          default: options.defaultSubject,
        },
        {
          type: "input",
          name: "body",
          message:
            "Provide a longer description of the change: (press enter to skip)\n",
          default: options.defaultBody,
        },
        {
          type: "confirm",
          name: "isBreaking",
          message: "Are there any breaking changes?",
          default: false,
        },
        {
          type: "input",
          name: "breaking",
          message: "Describe the breaking changes:\n",
          when: (answers) => answers.isBreaking,
        },
      ])
        .then((answers) => {
          const maxLineWidth = 100;
          const wrapOptions = {
            trim: true,
            newline: "\n",
            indent: "",
            width: maxLineWidth,
          };

          // parentheses are only needed when a scope is present
          const scope =
            answers.scope && answers.scope.trim()
              ? `(${answers.scope.trim()})`
              : "";

          // brackets are only needed when a issue is present
          const issue =
            answers.issue && answers.issue.trim()
              ? `[${answers.issue.trim()}] `
              : "";

          // Hard limit this line
          const head = (
            answers.type +
            scope +
            ": " +
            issue +
            answers.subject.trim()
          ).slice(0, maxLineWidth);

          // Wrap these lines at 100 characters
          const body = wrap(answers.body, wrapOptions);

          // Apply breaking change prefix, removing it if already present
          const breaking = wrap(
            answers.breaking && answers.breaking.trim()
              ? `BREAKING CHANGE: ${answers.breaking
                  .trim()
                  .replace(/^BREAKING CHANGE: /, "")}`
              : "",
            wrapOptions
          );

          commit(head + "\n\n" + body + "\n\n" + breaking);
        })
        .catch((err) => console.error(err));
    },
  };
};
