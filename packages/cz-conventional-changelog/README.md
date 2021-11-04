# @batatinha-delivery/cz-conventional-changelog

This package provides an iFood adaptation to `cz-conventional-changelog` with the following extra features:

- Adds JIRA issue prompt to fill the Jira issue
- Automatically detects the Jira issue from the branch name

## Getting started

1. Install `commitizen` and `@batatinha-delivery/cz-conventional-changelog`:

   ```bash
   npm install commitizen @batatinha-delivery/cz-conventional-changelog -D
   ```

2. Add configuration to .czrc or create a config.commitizen in the package.json

- .czrc (as commitizen uses [cosmiconfig](https://github.com/davidtheclark/cosmiconfig), several other config files are valid too):

  ```json
  {
    "path": "@batatinha-delivery/cz-conventional-changelog"
  }
  ```

- package.json:

  ```json
  {
    "config": {
      "commitizen": {
        "path": "@batatinha-delivery/cz-conventional-changelog"
      }
    }
  }
  ```

## Commit message

Commit message will be generated in following format:

```
type(scope): [JIRA_ISSUE] Short description
```

### Example

```
feat(conventional-changelog): [IFOOD-1234] Implement conventional changelog
```
