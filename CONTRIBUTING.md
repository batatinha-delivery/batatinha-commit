# Contributing

First off, thank you for considering contributing to ifood-commit. It`s people like you that make this project such a great tool.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

If you'd like to contribute, start by searching through the issues and pull requests to see whether someone else has raised a similar idea or question. If you don't see your idea listed, please first discuss the change you wish to make via issue before making a change.

Please note we have a [Code of Conduct](CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

- [Code of Conduct](#coc)
- [Question or Problem?](#question)
- [Issues and Bugs](#issue)
- [Feature Requests](#feature)
- [Submission Guidelines](#submit)
- [Coding Rules](#rules)
- [Commit Message Guidelines](#commit)
- [Release](#release)
- [Signing the CLA](#cla)

## <a name="coc"></a> Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## <a name="question"></a> Got a Question or Problem?

> TO BE DEFINED.

## <a name="issue"></a> Found a Bug?

Before creating bug reports, please check the discussions for a list of common questions and problems.
Bugs area tracked as Github issues. You should create an issue and provide the following information by filling in the bug report template.

- Use a clear and descriptive title.
- Describe the exact steps which reproduce the problem in as many details as possible.
- Provide examples to demonstrate the steps.
- Describe the behavior you observed after following the steps and point out what exactly is the problem with that behavior.
- Explain which behavior you expected to see instead and why.
- Include screenshots and animated GIFs if applicable.

### Security vulnerability

If you find a security vulnerability, do NOT open an issue. Any security issues should be submitted directly to {{security-email}} In order to determine whether you are dealing with a security issue, ask yourself these two questions:

- Can I access something that's not mine, or something I shouldn't have access to?
- Can I disable something for other people?

If the answer to either of those two questions are "yes", then you're probably dealing with a security issue. Note that even if you answer "no" to both questions, you may still be dealing with a security issue, so if you're unsure, just email us at {{security-email}}.

## <a name="feature"></a> Missing a Feature?

If you find yourself wishing for a feature that doesn't exist in the project, you are probably not alone. There are bound to be others out there with similar needs. Many of the features that the project has today have been added because our users saw the need. Open an issue following the Feature Request template on our issues list on GitHub which describes the feature you would like to see, why you need it, and how it should work.

## <a name="submit"></a> Submitting a Pull Request (PR)

Before you submit your Pull Request (PR) consider the following guidelines:

1. Search GitHub for an open or closed PR that relates to your submission.
2. Be sure that an issue describes the problem you're fixing, or documents the design for the feature you'd like to add.
3. Fork the project repo.
4. In your forked repository, make your changes in a new git branch: `git checkout -b my-branch master`
5. Create your patch, including appropriated test cases.
6. Follow our [Coding Rules](#rules).
7. Run the full test suite, and ensure that all tests pass.
8. Commit your changes following the [commit message convention](#commit).
9. Push your branch to GitHub: `git push origin my-branch`
10. In GitHub, send a pull request to us.

## <a name="rules"></a> Coding Rules

This project uses Prettier and ESLint to enforce code standards and style, please make sure to run `yarn lint` before submitting your PR.

## <a name="commit"></a> Commit Message Format

Must follow the conventional commits specification (https://www.conventionalcommits.org/) with some particularities:

- All texts in English.

```
<type>(<scope(optional)>): <summary>

[optional body]

[optional footer(s)]
```

Example:

```
fix: Fix code typing errors

See the referred ticket to know all typing errors

Refs #133
```

### <a name="commit-header"></a>Header

The header line must have at most 100 characters, and is composed by:

- **Type**: must be one of the conventional-commit-types: feat, fix, docs,style, refactor, perf, test, build, ci, chore, revert.
- **Scope**: Is optional, and should be one of scopes: `To be defined by the project`
- **Summary**: Should be written in [sentence-case](https://www.thoughtco.com/sentence-case-titles-1691944), and use the imperative, present tense.

### <a name="commit-body"></a>Body

Just as in summary, use the imperative, present tense: "fix" not "fixed" nor "fixes".

Explain the motivation for the change in the commit message body. This commit message should explain _why_ you are making the change.
You can include a comparison of the previous behavior with the new behavior in order to illustrate the impact of the change.

### <a name="commit-footer"></a>Footer

The related issue must be referenced in the footer (optional for non-permanent branches)

## <a name="release"></a> Release

> How to do the Release?

## <a name="cla"></a> Signing the CLA

All contributions to iFood projects must be accompanied by a [Contributor License Agreement](CLA.md). To sign, the user must open a Pull Request in
https://github.com/batatinha-delivery/clabot-config project, including the GitHub user or email in `.clabot` file.

```json
{
  "contributors": ["YourUsername"]
}
```

The Open Source Programs Office provides a tool that will automate checking for CLAs on all new pull requests. If user already signed the CLA, the tool will
check the PR, enabling the merge. If the sign is missing, the user should sign and add a new PR comment containing: `@cla-bot check`, that will make the tool
re-check the signature.

## <a name="faq"></a> FAQ

- ...
