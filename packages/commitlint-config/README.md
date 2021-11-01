# @ifood/commitlint-config

This package provides iFood's [commitlint](https://github.com/conventional-changelog/commitlint) as an extensible shared config.

It extends [angular preset](https://www.npmjs.com/package/@commitlint/config-angular) with some customizations.

## Installation

Install `@ifood/commitlint-config`:

```bash
$ npm i @ifood/commitlint-config -D
```

Add a commitlint.config.js file using the preset:

```js
module.exports = {
  extends: ["@ifood"],
};
```

## Customizations

### scope-case

Scope must be in kebab-case.

Value: `[2, "always", "kebab-case"]`,

### subject-case

Subject must be in Sentence case.

Value: `[2, "always", "sentence-case"]`

### header-max-length

Header must have up to 100 characters.

Value: `[2, "always", 100]`

### type-enum

Type must be one of the [conventional-commit-types](https://github.com/commitizen/conventional-commit-types/blob/master/index.json): `feat`, `fix`, `docs`,`style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
