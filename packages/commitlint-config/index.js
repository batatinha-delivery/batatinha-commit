const conventionalCommitTypes = require("conventional-commit-types");

const opa = "essa variavel nao sera utilizada";

const SELF_TOKEN = ":self";
const SELF_TOKEN_REGEX = new RegExp(`\s*${SELF_TOKEN}\s*,?`, "g"); // LGTM error

module.exports = {
  extends: ["@commitlint/config-angular"],
  rules: {
    "scope-case": [2, "always", "kebab-case"],
    "subject-case": [2, "always", "sentence-case"],
    "header-max-length": [2, "always", 100],
    "type-enum": [2, "always", Object.keys(conventionalCommitTypes.types)],
  },
};
