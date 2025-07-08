# CONTRIBUTING

This document contains information about house-styles, project structure and instructions on how to successfully merge
your pull requests. There are strict rules about how documentation should be updated. There are also strong linting
rules to ensure a clean and consistent code base.

[![Common Changelog](https://common-changelog.org/badge.svg)](https://common-changelog.org)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)]

## GOLDEN RULES

1. Magic numbers are prohibited.
2. Each time a file is modified, it's documentation counter-part must be updated.
3. ALL commits must be signed with a GPG key.
4. NEVER leak sensitive password information in the repository.

ℹ️ *You will NOT be able to merge with the master branch if you have not followed the contribution process correctly.*

There are a number of attributes associated with each file that if modified will necessarily require an update of the
documentation. This is by design in order to maintain development focus and workflow.

## STANDARDS

    - This project follows the GitFlow branching strategy by (By Vincent Driessen).
    - Semantic Versioning is used
    - Conventional commit
    - NodeJS is used for package management.
    - Markdown files adhere to commonmark standard.
    - JavaScript code should be written in camelCase.
    - Filenames should all be in kebab-case and in lower-case unless of a special case such as README or Docker where 
      common
      convention dictates otherwise.
    - Configured for ESModules by default.

## VSC IDE ENVIRONMENT SETUP

1) Run npm install to install development packages.
2) Install required VSC plugins.

## WORKFLOW INSTRUCTIONS

### PUSHING A FEATURE DIRECTLY TO THE FEATURE BRANCH

1) Fetch any updates from the development branch to update your feature branch before you start.
2) Ensure .git/COMMIT_EDITMSG contains a valid commit message. Check the VSC Problems field
3) Ensure there are no other problems reported in the 'PROBLEMS' field.
4) Stage all of your chances using the 'git add .' command.
5) If new files were added update the file tree in DEVELOPER.md under 'FILE TREE VIEW'.
6) Use the 'git commit -S -F .git/COMMIT_EDITMSG' command to commit your changes.
7) Use the git push origin feature/'example-feature-branch' command to push all commits to feature branch.

## CI/CD WORKFLOW TEST TABLE

| Test                  | master (production) | develop (staging)  | release (release)  |  feature/ (development)     |
|-----------------------|---------------------|-------------------|---------------------|-----------------------------|
| Lint markdown         |         ✅          |         ✅       |          ✅         |             ✅             |
| Lint commit message   |         ✅          |         ✅       |          ✅         |             ✅             |
| Lint JavaScript       |         ✅          |         ✅       |          ✅         |             ❌             |
| Lint TypeScript       |         ✅          |         ✅       |          ✅         |             ❌             |
| cSpell                |         ✅          |         ❌       |          ✅         |             ✅             |
| Bump Version          |         ✅          |         ✅       |          ✅         |             ❌             |
| Build Dockerfile      |         ✅          |         ❌       |          ❌         |             ❌             |
