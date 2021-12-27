const conventionalCommitTypes = require("conventional-commit-types");

module.exports = {
  extends: ["@commitlint/config-angular"],
  rules: {
    "scope-case": [2, "always", "kebab-case"],
    "subject-case": [2, "always", "sentence-case"],
    "header-max-length": [2, "always", 100],
    "type-enum": [2, "always", Object.keys(conventionalCommitTypes.types)],
  },
};
