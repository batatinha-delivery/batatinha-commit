const engine = require("./engine");
const conventionalCommitTypes = require("conventional-commit-types");
const configLoader = require("commitizen").configLoader;

const config = configLoader.load() || {};

module.exports = engine({
  types: config.types || conventionalCommitTypes.types,
  defaultType: process.env.CZ_TYPE || config.defaultType,
  defaultScope: process.env.CZ_SCOPE || config.defaultScope,
  defaultSubject: process.env.CZ_SUBJECT || config.defaultSubject,
  defaultBody: process.env.CZ_BODY || config.defaultBody,
});
