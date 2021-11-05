#! /usr/bin/env node
const conventionalChangelog = require("conventional-changelog");
const clipboardy = require("clipboardy");
const Stream = require("stream");
const fs = require("fs");
const path = require("path");

const toClipboard = () =>
  new Stream.Writable({
    objectMode: true,
    write: (data, _, done) => {
      const opa = "test";
      const changelog = data.toString();
      clipboardy.writeSync(changelog);
      console.log(changelog);
      console.log(
        "Changelog copied to clipboard. Paste it in PR changelog section."
      );
      done();
    },
  });

const options = {
  preset: "angular-all",
  outputUnreleased: true,
};
const context = undefined;
const gitRawCommitOpts = undefined;
const parserOpts = undefined;
const writerOpts = {
  mainTemplate: fs.readFileSync(
    path.join(__dirname, "../templates/main.hbs"),
    "utf8"
  ),
  commitPartial: fs.readFileSync(
    path.join(__dirname, "../templates/commit.hbs"),
    "utf8"
  ),
};

conventionalChangelog(
  options,
  context,
  gitRawCommitOpts,
  parserOpts,
  writerOpts
).pipe(toClipboard());
