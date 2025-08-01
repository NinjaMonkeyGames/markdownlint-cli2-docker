# Markdownlint-Cli2 CI/CD Pipeline Docker Project Programmers Manual

This document is a reference-guide for programmers. It provides a comprehensive list of all assets contained within the
project.

This includes detailed API descriptions and asset code breakdown.

This reference manual focuses on the project structure and logic.

This document does not cover documentation style guidelines or contribution policies. For that see, 'CONTRIBUTING.md'.

ℹ Please review 'CONTRIBUTING.md' carefully, as it contains important information on how to contribute to this
repository and how to update the documentation correctly.

[![Common Changelog](https://common-changelog.org/badge.svg)](https://common-changelog.org)
![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)

---

## TABLE OF CONTENTS

< Place holder for the table of contents (TOC) to be generated once the document is complete >

[!TOC]

---

## TARGET AUDIENCE

This document is for developers actively working on this project.

## PROJECT PURPOSE

The purpose of this program is to provide a Docker container setup that will lint Markdown files as part of a
[CI/CD](#glossary) workflow.

## PROJECT ASSETS

### FILE TREE VIEW

```markdown
markdownlint-cli2-workflow-docker
├── .artefacts
│   ├── logo.png
│   └── monkey-knuckles-avatar.png
├── .config
│   ├── .markdownlint-cli2.jsonc
│   ├── commitlint.config.js
│   ├── cspell.json
│   ├── custom-commitlint-rules
│   │   └── signed-off-by-regex.js
│   ├── custom-markdownlint-rules
│   │   └── capitalised-headings.js
│   └── eslint.config.js
├── .github
│   ├── ISSUE_TEMPLATE
│   │   ├── bug-report-template.yml
│   │   ├── config.yml
│   │   ├── feature-request-template.yml
│   │   └── task-request.yml
│   └── workflows
│       └── ci-workflow-controller.yml
├── .gitignore
├── .vscode
│   ├── extensions.json
│   └── settings.json
├── CHANGELOG.md
├── CONTRIBUTING.md
├── DEVELOPER
├── Dockerfile
├── LICENSE
├── linting-tests
│   ├── javascript-fail
│   │   ├── possible-problems
│   │   │   ├── array-callback-return.js
│   │   │   ├── constructor-super.js
│   │   │   ├── for-direction.js
│   │   │   ├── getter-return.js
│   │   │   ├── no-async-promise-executor.js
│   │   │   ├── no-await-in-loop.js
│   │   │   ├── no-class-assign.js
│   │   │   ├── no-compare-neg-zero.js
│   │   │   ├── no-cond-assign.js
│   │   │   ├── no-const-assign.js
│   │   │   ├── no-constant-binary-expression.js
│   │   │   ├── no-constant-condition.js
│   │   │   ├── no-constructor-return.js
│   │   │   ├── no-control-regex.js
│   │   │   ├── no-debugger.js
│   │   │   ├── no-dupe-args.js
│   │   │   ├── no-dupe-class-members.js
│   │   │   ├── no-dupe-else-if.js
│   │   │   ├── no-dupe-keys.js
│   │   │   ├── no-duplicate-case.js
│   │   │   ├── no-duplicate-imports.js
│   │   │   ├── no-empty-character-class.js
│   │   │   ├── no-empty-pattern.js
│   │   │   ├── no-ex-assign.js
│   │   │   ├── no-fallthrough.js
│   │   │   ├── no-func-assign.js
│   │   │   ├── no-import-assign.js
│   │   │   ├── no-inner-declarations.js
│   │   │   ├── no-invalid-regexp.js
│   │   │   ├── no-irregular-whitespace.js
│   │   │   ├── no-loss-of-precision.js
│   │   │   ├── no-misleading-character-class.js
│   │   │   ├── no-new-native-nonconstructor.js
│   │   │   ├── no-obj-calls.js
│   │   │   ├── no-promise-executor-return.js
│   │   │   ├── no-prototype-builtins.js
│   │   │   ├── no-self-assign.js
│   │   │   ├── no-self-compare.js
│   │   │   ├── no-setter-return.js
│   │   │   ├── no-sparse-arrays.js
│   │   │   ├── no-template-curly-in-string.js
│   │   │   ├── no-this-before-super.js
│   │   │   ├── no-undef.js
│   │   │   ├── no-unexpected-multiline.js
│   │   │   ├── no-unmodified-loop-condition.js
│   │   │   ├── no-unreachable-loop.js
│   │   │   ├── no-unreachable.js
│   │   │   ├── no-unsafe-finally.js
│   │   │   ├── no-unsafe-negation.js
│   │   │   ├── no-unsafe-optional-chaining.js
│   │   │   ├── no-unused-private-class-members.js
│   │   │   ├── no-unused-vars.js
│   │   │   ├── no-use-before-define.js
│   │   │   ├── no-useless-assignment.js
│   │   │   ├── no-useless-backreference.js
│   │   │   ├── require-atomic-updates.js
│   │   │   ├── use-isnan.js
│   │   │   └── valid-typeof.js
│   │   └── suggestions
│   │       ├── accessor-pairs.js
│   │       ├── arrow-body-style.js
│   │       ├── block-scoped-var.js
│   │       ├── camelcase.js
│   │       ├── capitalized-comments.js
│   │       ├── class-methods-use-this.js
│   │       ├── complexity.js
│   │       ├── consistent-return.js
│   │       ├── consistent-this.js
│   │       ├── curly.js
│   │       ├── default-case-last.js
│   │       ├── default-case.js
│   │       ├── default-param-last.js
│   │       ├── dot-notation.js
│   │       ├── eqeqeq.js
│   │       ├── func-name-matching.js
│   │       ├── func-names.js
│   │       ├── func-style.js
│   │       ├── grouped-accessor-pairs.js
│   │       ├── guard-for-in.js
│   │       ├── id-denylist.js
│   │       ├── id-length.js
│   │       ├── id-match.js
│   │       ├── init-declarations.js
│   │       ├── logical-assignment-operators.js
│   │       ├── max-classes-per-file.js
│   │       ├── max-depth.js
│   │       ├── max-lines-per-function.js
│   │       ├── max-lines.js
│   │       ├── max-nested-callbacks.js
│   │       ├── max-params.js
│   │       ├── max-statements.js
│   │       ├── new-cap.js
│   │       ├── no-alert.js
│   │       ├── no-array-constructor.js
│   │       ├── no-bitwise.js
│   │       ├── no-caller.js
│   │       ├── no-case-declarations.js
│   │       ├── no-console.js
│   │       ├── no-continue.js
│   │       ├── no-delete-var.js
│   │       ├── no-div-regex.js
│   │       ├── no-else-return.js
│   │       ├── no-empty-function.js
│   │       ├── no-empty-static-block.js
│   │       ├── no-empty.js
│   │       ├── no-eq-null.js
│   │       ├── no-eval.js
│   │       ├── no-extend-native.js
│   │       ├── no-extra-bind.js
│   │       ├── no-extra-boolean-cast.js
│   │       ├── no-extra-label.js
│   │       ├── no-global-assign.js
│   │       ├── no-implicit-coercion.js
│   │       ├── no-implicit-globals.js
│   │       ├── no-implied-eval.js
│   │       ├── no-inline-comments.js
│   │       ├── no-invalid-this.js
│   │       ├── no-iterator.js
│   │       ├── no-label-var.js
│   │       ├── no-labels.js
│   │       ├── no-lone-blocks.js
│   │       ├── no-lonely-if.js
│   │       ├── no-loop-func.js
│   │       ├── no-magic-numbers.js
│   │       ├── no-multi-assign.js
│   │       ├── no-multi-str.js
│   │       ├── no-negated-condition.js
│   │       ├── no-nested-ternary.js
│   │       ├── no-new-func.js
│   │       ├── no-new-wrappers.js
│   │       ├── no-new.js
│   │       ├── no-nonoctal-decimal-escape.js
│   │       ├── no-object-constructor.js
│   │       ├── no-octal-escape.js
│   │       ├── no-octal.js
│   │       ├── no-param-reassign.js
│   │       ├── no-plusplus.js
│   │       ├── no-proto.js
│   │       ├── no-redeclare.js
│   │       ├── no-regex-spaces.js
│   │       ├── no-restricted-exports.js
│   │       ├── no-restricted-globals.js
│   │       ├── no-restricted-imports.js
│   │       ├── no-restricted-properties.js
│   │       ├── no-restricted-syntax.js
│   │       ├── no-return-assign.js
│   │       ├── no-script-url.js
│   │       ├── no-sequences.js
│   │       ├── no-shadow-restricted-names.js
│   │       ├── no-shadow.js
│   │       ├── no-ternary.js
│   │       ├── no-throw-literal.js
│   │       ├── no-undef-init.js
│   │       ├── no-undefined.js
│   │       ├── no-underscore-dangle.js
│   │       ├── no-unneeded-ternary.js
│   │       ├── no-unused-expressions.js
│   │       ├── no-unused-labels.js
│   │       ├── no-useless-call.js
│   │       ├── no-useless-catch.js
│   │       ├── no-useless-computed-key.js
│   │       ├── no-useless-concat.js
│   │       ├── no-useless-constructor.js
│   │       ├── no-useless-escape.js
│   │       ├── no-useless-rename.js
│   │       ├── no-useless-return.js
│   │       ├── no-var.js
│   │       ├── no-void.js
│   │       ├── no-warning-comments.js
│   │       ├── no-with.js
│   │       ├── object-shorthand.js
│   │       ├── one-var.js
│   │       ├── operator-assignment.js
│   │       ├── prefer-arrow-callback.js
│   │       ├── prefer-const.js
│   │       ├── prefer-destructuring.js
│   │       ├── prefer-exponentiation-operator.js
│   │       ├── prefer-named-capture-group.js
│   │       ├── prefer-numeric-literals.js
│   │       ├── prefer-object-has-own.js
│   │       ├── prefer-object-spread.js
│   │       ├── prefer-promise-reject-errors.js
│   │       ├── prefer-regex-literals.js
│   │       ├── prefer-rest-params.js
│   │       ├── prefer-spread.js
│   │       ├── prefer-template.js
│   │       ├── radix.js
│   │       ├── require-await.js
│   │       ├── require-unicode-regexp.js
│   │       ├── require-yield.js
│   │       ├── sort-imports.js
│   │       ├── sort-keys.js
│   │       ├── sort-vars.js
│   │       ├── strict.js
│   │       ├── symbol-description.js
│   │       ├── vars-on-top.js
│   │       └── yoda.js
│   ├── markdown-fail
│   │   ├── custom-rules
│   │   │   └── capitalise-headings.md
│   │   ├── md001.md
│   │   ├── md003.md
│   │   ├── md004.md
│   │   ├── md005.md
│   │   ├── md007.md
│   │   ├── md009.md
│   │   ├── md010.md
│   │   ├── md011.md
│   │   ├── md012.md
│   │   ├── md013.md
│   │   ├── md018.md
│   │   ├── md019.md
│   │   ├── md020.md
│   │   ├── md021.md
│   │   ├── md022.md
│   │   ├── md023.md
│   │   ├── md024.md
│   │   ├── md025.md
│   │   ├── md026.md
│   │   ├── md027.md
│   │   ├── md028.md
│   │   ├── md029.md
│   │   ├── md030.md
│   │   ├── md031.md
│   │   ├── md032.md
│   │   ├── md033.md
│   │   ├── md034.md
│   │   ├── md035.md
│   │   ├── md036.md
│   │   ├── md037.md
│   │   ├── md038.md
│   │   ├── md039.md
│   │   ├── md040.md
│   │   ├── md041.md
│   │   ├── md042.md
│   │   ├── md043.md
│   │   ├── md044.md
│   │   ├── md045.md
│   │   ├── md046.md
│   │   ├── md047.md
│   │   ├── md048.md
│   │   ├── md049.md
│   │   ├── md050.md
│   │   ├── md051.md
│   │   ├── md052.md
│   │   ├── md053.md
│   │   ├── md054.md
│   │   ├── md055.md
│   │   └── md056.md
│   └── typescript-fail
│       ├── adjacent-overload-signatures.ts
│       ├── array-type.ts
│       ├── await-thenable.ts
│       ├── ban-ts-comment.ts
│       ├── ban-tslint-comment.ts
│       ├── class-literal-property-style.ts
│       ├── class-methods-use-this.ts
│       ├── consistent-generic-constructors.ts
│       ├── consistent-indexed-object-style.ts
│       ├── consistent-return.ts
│       ├── consistent-type-assertions.ts
│       ├── consistent-type-definitions.ts
│       ├── consistent-type-exports.ts
│       ├── consistent-type-imports.ts
│       ├── default-param-last.ts
│       ├── dot-notation.ts - NO
│       ├── explicit-function-return-type.ts
│       ├── explicit-member-accessibility.ts -NO
│       ├── explicit-module-boundary-types.ts
│       ├── init-declarations.ts -NO
│       ├── member-ordering.ts
│       ├── method-signature-style.ts
│       ├── naming-convention.ts -NO
│       ├── no-array-constructor.ts
│       ├── no-array-delete.ts
│       ├── no-base-to-string.ts
│       ├── no-confusing-non-null-assertion.ts
│       ├── no-confusing-void-expression.ts
│       ├── no-deprecated.ts
│       ├── no-dupe-class-members.ts - NO
│       ├── no-duplicate-enum-values.ts
│       ├── no-duplicate-type-constituents.ts
│       ├── no-dynamic-delete.ts
│       ├── no-empty-function.ts - NO
│       ├── no-empty-interface.ts
│       ├── no-empty-object-type.ts
│       ├── no-explicit-any.ts
│       ├── no-extra-non-null-assertion.ts
│       ├── no-extraneous-class.ts
│       ├── no-floating-promises.ts
│       ├── no-for-in-array.ts
│       ├── no-implied-eval.ts
│       ├── no-import-type-side-effects.ts
│       ├── no-inferrable-types.ts
│       ├── no-invalid-this.ts - NO
│       ├── no-invalid-void-type.ts
│       ├── no-loop-func.ts - NO
│       ├── no-loss-of-precision.ts - NO
│       ├── no-magic-numbers.ts - NO
│       ├── no-meaningless-void-operator.ts
│       ├── no-misused-new.ts
│       ├── no-misused-promises.ts
│       ├── no-misused-spread.ts
│       ├── no-mixed-enums.ts
│       ├── no-namespace.ts
│       ├── no-non-null-asserted-nullish-coalescing.ts
│       ├── no-non-null-asserted-optional-chain.ts
│       ├── no-non-null-assertion.ts
│       ├── no-redeclare.ts - NO
│       ├── no-redundant-type-constituents.ts
│       ├── no-require-imports.ts
│       ├── no-restricted-imports.ts
│       ├── no-restricted-types.ts - NO
│       ├── no-shadow.ts - NO
│       ├── no-this-alias.ts
│       ├── no-type-alias.ts - NO
│       ├── no-unnecessary-boolean-literal-compare.ts
│       ├── no-unnecessary-condition.ts
│       ├── no-unnecessary-parameter-property-assignment.ts
│       ├── no-unnecessary-qualifier.ts
│       ├── no-unnecessary-template-expression.ts
│       ├── no-unnecessary-type-arguments.ts
│       ├── no-unnecessary-type-assertion.ts
│       ├── no-unnecessary-type-constraint.ts
│       ├── no-unnecessary-type-parameters.ts
│       ├── no-unsafe-argument.ts
│       ├── no-unsafe-assignment.ts
│       ├── no-unsafe-call.ts
│       ├── no-unsafe-declaration-merging.ts
│       ├── no-unsafe-enum-comparison.ts
│       ├── no-unsafe-function-type.ts
│       ├── no-unsafe-member-access.ts
│       ├── no-unsafe-return.ts
│       ├── no-unsafe-type-assertion.ts
│       ├── no-unsafe-unary-minus.ts
│       ├── no-unused-expressions.ts
│       ├── no-unused-vars.ts - NO
│       ├── no-use-before-define.ts
│       ├── no-useless-constructor.ts - NO
│       ├── no-useless-empty-export.ts
│       ├── no-var-requires.ts
│       ├── no-wrapper-object-types.ts
│       ├── non-nullable-type-assertion-style.ts
│       ├── only-throw-error.ts
│       ├── parameter-properties.ts
│       ├── prefer-as-const.ts
│       ├── prefer-destructuring.ts
│       ├── prefer-enum-initializers.ts
│       ├── prefer-find.ts
│       ├── prefer-for-of.ts
│       ├── prefer-function-type.ts
│       ├── prefer-includes.ts
│       ├── prefer-literal-enum-member.ts
│       ├── prefer-namespace-keyword.ts
│       ├── prefer-nullish-coalescing.ts
│       ├── prefer-optional-chain.ts
│       ├── prefer-promise-reject-errors.ts
│       ├── prefer-readonly-parameter-types.ts
│       ├── prefer-readonly.ts
│       ├── prefer-reduce-type-parameter.ts
│       ├── prefer-regexp-exec.ts
│       ├── prefer-return-this-type.ts
│       ├── prefer-string-starts-ends-with.ts
│       ├── prefer-ts-expect-error.ts
│       ├── promise-function-async.ts
│       ├── related-getter-setter-pairs.ts
│       ├── require-array-sort-compare.ts
│       ├── require-await.ts
│       ├── restrict-plus-operands.ts
│       ├── restrict-template-expressions.ts
│       ├── return-await.ts
│       ├── sort-type-constituents.ts
│       ├── strict-boolean-expressions.ts
│       ├── switch-exhaustiveness-check.ts
│       ├── triple-slash-reference.ts
│       ├── typedef.ts
│       ├── unbound-method.ts
│       ├── unified-signatures.ts
│       └── use-unknown-in-catch-callback-variable.ts
├── package-lock.json
├── package.json
├── README
├── SECURITY.md
└── TODO.md
```

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### ARTEFACTS FOLDER [.ARTEFACTS] 📁

#### Attribute Table : [.artefacts]

| Attribute             | Value             |
|-----------------------|-------------------|
| Asset Name            | .artefacts        |
| Relative Path         | ./                |
| Hidden                | Yes               |
| Include in Repository | Yes               |
| Managed               | Yes               |
| Asset Type            | FOLDER            |
| CI Scope              | ui                |

#### Asset Purpose : [.artefacts]

Store artefacts that are used throughout the CI/CD process but not necessarily a part of the project itself. This keeps
everything internal to the CI/CD process.

#### Asset Contents Description : [.artefacts]

The '.artefacts' folder contains files such as logos, logs and other files that are used throughout the
[CI/CD](#glossary) pipeline process.

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### LOGO [LOGO.PNG] 📄

#### Attribute Table : [logo.png]

| Attribute             | Value             |
|-----------------------|-------------------|
| Asset Name            | logo.png          |
| Relative Path         | .artefacts        |
| Hidden                | Inherited         |
| Include in Repository | Yes               |
| Managed               | Yes               |
| Asset Type            | PNG               |
| CI Scope              | ui                |

#### Asset Purpose : [logo.png]

Brand identification. This logo is used in internal markdown files for branding purposes.

#### Asset Contents Description : [logo.png]

This file contains the NinjaMonkeyGames™ logo.

![Company Logo](.artefacts/logo.png)

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### MONKEY KNUCKLES AVATAR [MONKEY-KNUCKLES-AVATAR.PNG] 📄

#### Attribute Table : [monkey-knuckles-avatar.png]

| Attribute             | Value                       |
|-----------------------|-----------------------------|
| Asset Name            | monkey-knuckles-avatar.png  |
| Relative Path         | .artefacts                  |
| Hidden                | Inherited                   |
| Include in Repository | Yes                         |
| Managed               | Yes                         |
| Asset Type            | PNG                         |
| CI Scope              | ui                          |

#### Asset Purpose : [monkey-knuckles-avatar.png]

Developer identification and contribution recognition.

#### Asset Contents Description : [monkey-knuckles-avatar.png]

This file contains Developer avatar for 'Monkey Knuckles'.

 ℹ *If you are a new developer and you have made a contribution to this project you should add your own avatar to the*
 *project and update the relevant parts of the documentation. See 'CONTRIBUTING.md'.*

 ![Monkey Knuckles Avatar](.artefacts/monkey-knuckles-avatar.png)

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### CONFIGURATION FOLDER [.CONFIG] 📁

#### Attribute Table : [.config]

| Attribute             | Value             |
|-----------------------|-------------------|
| Asset Name            | .config           |
| Relative Path         | ./                |
| Hidden                | Yes               |
| Include in Repository | Yes               |
| Managed               | Yes               |
| Asset Type            | FOLDER            |
| CI Scope              | config            |

#### Asset Purpose : [.config]

Provide settings that allow the project to be linted consistently across the entire project based on predefined rules.

#### Asset Contents Description : [.config]

Contains configuration files for various [IDE](#glossary) plugins.

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### CUSTOM COMMITLINT RULES [CUSTOM-COMMITLINT-RULES] 📁

#### Attribute Table : [custom-commitlint-rules]

| Attribute             | Value                       |
|-----------------------|-----------------------------|
| Asset Name            | custom-commitlint-rules     |
| Relative Path         | ./                          |
| Hidden                | Inherited                   |
| Include in Repository | Yes                         |
| Managed               | Yes                         |
| Asset Type            | FOLDER                      |
| CI Scope              | config                      |

#### Asset Purpose : [custom-commitlint-rules]

To maintain repository integrity by providing extra commitlint rules to ensure conventional commit standards are
observed.

#### Asset Contents Description : [custom-commitlint-rules]

Contains JavaScript files each containing a custom commitlint rules.

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### CUSTOM COMMITLINT RULES [SIGNED-OFF-BY-REGEX.JS] 📁

#### Attribute Table : [signed-off-by-regex.js]

| Attribute             | Value                       |
|-----------------------|-----------------------------|
| Asset Name            | signed-off-by-regex.cjs     |
| Relative Path         | ./                          |
| Hidden                | Inherited                   |
| Include in Repository | Yes                         |
| Managed               | Yes                         |
| Asset Type            | FOLDER                      |
| CI Scope              | config                      |

#### Asset Purpose : [signed-off-by-regex.js]

To maintain a chain of custody.

#### Asset Contents Description : [signed-off-by-regex.js]

Ensures all commits are signed by the author.

#### Asset Code Breakdown : [signed-off-by-regex.js]

1. Module exports.
2. Define Regex pattern to match the "Signed-off-by" line
3. Match RegEx.
4. Return error.

##### Module exports : [signed-off-by-regex.js] - [CODE]

```javascript
1. module.exports =
2. {
```

##### Module exports : [signed-off-by-regex.js] - [CODE DESCRIPTION]

```markdown
1. Exports data to commitlint.
2. Exposes module exports. 
```

##### Regex definition : [signed-off-by-regex.js] - [CODE]

```javascript
// Define RegEx

1. const signoffRegex = /^Signed-off-by: .+ <.+@.+\..+>$/m;
```

##### Regex definition : [signed-off-by-regex.js] - [CODE DESCRIPTION]

```markdown
1. Assigns RegEx value to variable.
  a. 'const signoffRegex =' Assigns RegEx value to 'signoffRegex'.
  b. '/^Signed-off-by: .+ <.+@.+\..+>$/m' RegEx string to validate "Signed-off-by: Name <email@example.com>"
  c. ';' Terminate line ending.
```

##### Define Regex pattern to match the "Signed-off-by" line : [signed-off-by-regex.js] - [CODE]

```javascript
// Check if the regex matches anywhere in the commit message

1. if (signoffRegex.test(raw))
2. {
3.   return [true];
4. }
```

##### Define Regex pattern to match the "Signed-off-by" line : [signed-off-by-regex.js] - [CODE DESCRIPTION]

```markdown
1. Determines if raw commit message contains a string matching the RegEx.
  a. 'signoffRegex' Stores the RegEx to compare string against.
  b. '.test' In-built method to test the RegEx pattern against a string.
  c. 'raw' contains the string to compare.

2. Open method.

3. Returns as a positive RegEx match.
  a. 'return' Returns result.
  b. '[true]' Returns RegEx match as true.
  c. ';' Terminate line ending.

4. Close method.
```

##### Return error : [signed-off-by-regex.js] - [CODE]

```javascript
// Return an error if the "Signed-off-by" line is missing or malformed

1. return [
2.   false,
3.   'Commit message must contain a "Signed-off-by" line in the format: "Signed-off-by: Name <email@example.com>"',
4. ];
```

##### Return error : [signed-off-by-regex.js] - [CODE DESCRIPTION]

```markdown
1. Open return statement.
2. Return 'false'.
3. Returns string explaining no RegEx match was found.
4. Close return statement.
```

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### CUSTOM MARKDOWNLINT RULES FOLDER [CUSTOM-MARKDOWNLINT-RULES] 📁

#### Attribute Table : [custom-markdownlint-rules]

| Attribute             | Value                       |
|-----------------------|-----------------------------|
| Asset Name            | custom-markdownlint-rules   |
| Relative Path         | ./                          |
| Hidden                | Inherited                   |
| Include in Repository | Yes                         |
| Managed               | Yes                         |
| Asset Type            | FOLDER                      |
| CI Scope              | config                      |

#### Asset Purpose : [custom-markdownlint-rules]

To maintain repository integrity by providing extra markdown rules to keep the manual tidy and ensure consistent work.

#### Asset Contents Description : [custom-markdownlint-rules]

Contains JavaScript files each containing a custom markdownlint rules.

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### CAPITALISED HEADINGS CUSTOM MARKDOWNLINT RULE [CAPITALISED-HEADINGS.JS] 📄

#### Attribute Table : [capitalised-headings.js]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | capitalised-headings.js           |
| Relative Path         | .config/custom-markdownlint-rules |
| Hidden                | Inherited                         |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | JavaScript                        |
| CI Scope              | config                            |

#### Asset Purpose : [capitalised-headings.js]

Provide extra linting for markdownlint-cli2.

#### Asset Contents Description : [capitalised-headings.js]

This function is a custom markdownlint-cli2 script that will check level one and two headings to ensure they are
capitalised in-line with NMG policy.

#### Asset Code Breakdown : [capitalised-headings.js]

1. Module exports.
2. Meta data.
3. Heading capitalisation function.

##### Module exports : [capitalised-headings.js] - [CODE]

```javascript
// Module exports

1. module.exports =
2. {
```

##### Module exports : [capitalised-headings.js] - [CODE DESCRIPTION]

```markdown
1. Exports data to markdownlint-cli2.
2. Exposes module exports. 
```

##### Meta data : [capitalised-headings.js] - [CODE]

```javascript
// Meta data

1. names: ["capitalised-headings"],
2. description: "Ensure level 2 and 3 headings are fully capitalised.",
3. information: new URL("./CONTRIBUTING.md"),
4. tags: ["headings", "style"],
```

##### Capitalised headings : [capitalised-headings.js] - [CODE DESCRIPTION]

```markdown
1. names: specifies an identifiable name for the error.
2. description: provides a longer string of text to describe the error.
3. information: URL with rule explanation.
4. tags: identifies the category of linting error.
```

##### Heading capitalisation function : [capitalised-headings.js] - [CODE]

```javascript
  // Heading capitalisation function
  
1.   function: (params, onError) =>
2.   {
3.     params.lines.forEach((lineContent, lineIndex) =>
4.     {
5.       const headingMatch = lineContent.match(/^(#{2,3})\s+(.*)$/);
6.       if (headingMatch && headingMatch[2] !== headingMatch[2].toUpperCase())
7.       {
8.         onError
9.         ({
10.           lineNumber: lineIndex + 1,
11.           detail: `Heading not fully capitalised: "${headingMatch[2]}"`,
12.           context: lineContent.trim(),
13.         });
14.       }
15.     });
16.   },
17. };
```

##### Heading capitalisation function : [capitalised-headings.js] - [CODE DESCRIPTION]

```markdown
1. Declares the function defining the custom MarkdownLint rule. It takes params (file context) and onError 
   (error callback).
      a. 'params' contains the context of the Markdown file, including lines (an array of file lines).
      b. 'onError' callback used to report validation errors.
      c. '=>' Arrow function syntax.

2. Opening brace for the rule’s main logic.

3. Iterates through all lines in the Markdown file using forEach. Each line's content and index are processed.
  a. 'params.lines' accesses the lines array (each line in the Markdown file).
  b. '.forEach' iterates over each line.
  c. (lineContent, lineIndex) callback arguments for the line’s content and its index.
    i. 'lineContent' contains line text.
    ii. 'lineIndex' contains line index.
  
4. '{' opening brace for the line-processing logic.

5. Matches lines that start with 2 or 3 # symbols (Markdown headings) followed by whitespace and text.
  a. 'const headingMatch' declares a variable to store the result of the regular expression match.
  b. '=' assigns the following code.
  c. '.match(/^(#{2,3})\s+(.*)$/)' tests if the line matches the [RegEx](#glossary)
    i. '/' Delimiters marking the start and end of the regex pattern.
    ii. '^' Ensures the match starts at the beginning of the line.
    iii. '(#{2,3})' Captures 2 or 3 consecutive # symbols.
    iv. '#' Matches the literal # character.
    v. '{2,3}' Specifies that the # symbol must appear at least 2 times and at most 3 times.
    vi. '\s+' Matches one or more whitespace characters (spaces, tabs, etc.) after the # symbols.
    vii. '(.*)' Captures the remaining text on the line after the whitespace.
    viii. '.' Matches any character except line breaks.
    ix. '*' Matches zero or more occurrences of the preceding character (any character in this case).
    x. '$' Ensures the match ends at the last character of the line.
    
6. Checks if the line is a heading and its text is not fully capitalized. This is the core validation rule.
  a. 'if' starts a conditional block.
  b. 'headingMatch' checks if the line matches the heading pattern.
  c. '&&' logical AND operator.
  d. 'headingMatch[2]' accesses the heading text captured by the regex.
  e. '!== headingMatch[2].toUpperCase()' checks if the heading text is not fully capitalized.
  
7. Opening brace for the error-handling logic.
8. 'onError' invokes the onError function to report the validation error.
9. '({' begins the error details object passed to onError.
10. Specifies the line number where the issue was detected (1-based index).
11. Provides a detailed error message showing the problematic heading text.
  a. 'detail:' provides a descriptive error message.
  b. "Heading not fully capitalised: "${headingMatch[2]}": Inserts the problematic text into the message.

12. Provides additional context by including the trimmed content of the problematic line.
  a. 'context: lineContent.trim(),
' includes the problematic line content, trimmed of whitespace.

13. '});' ends the error details object passed to onError.
14. '}' closes the if block.
15. '});' closes the forEach callback, completing the iteration over lines.
16. '},' ends the main rule function logic.
17. '};' ends the custom MarkdownLint rule definition.

```

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### MARKDOWNLINT-CLI2 CONFIGURATION FILE [.MARKDOWNLINT-CLI2.JSONC] 📄

#### Attribute Table : [.markdownlint-cli2.jsonc]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | .markdownlint-cli2.jsonc          |
| Relative Path         | .config                           |
| Hidden                | Inherited                         |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | JSONC                             |
| CI Scope              | config                            |

#### Asset Purpose : [.markdownlint-cli2.jsonc]

To maintain consistent markdown linting throughout the project.

#### Asset Contents Description : [.markdownlint-cli2.jsonc]

Contains a list of rules written in JSON(C) format that dictate how markdownlint-cli2 will lint markdown files.
There are 49 Different rules. These rules are prefixed with 'MD' followed by a three digit number.

 ℹ *Some of the numbers appear to missing! These are legacy rules that were removed from markdownlint.
 MD002, MD006, MD008, MD014, MD015, MD016, MD0017 have been removed.*

#### Asset Code Breakdown : [.markdownlint-cli2.jsonc]

1. Custom rules
2. Base setup
3. Rule code
    a. Setting
    b. Sub-setting description (If applicable)
    c. Value

##### Custom rules : [.markdownlint-cli2.jsonc] - [CODE]

```json
  // Custom rules

1.  "customRules": 
2.  [
3.    "./custom-markdownlint-rules/capitalised-headings.js"
4.  ],
```

##### Custom rules : [.markdownlint-cli2.jsonc] - [CODE DESCRIPTION]

```markdown
1. Module names or paths of custom rules to load and use when linting  markdown.

2. Opens the custom rule list for writing.
3. Path to the level 2 & 3 capitalised headings custom rule.
4. Closes the custom rule list for writing.
```

See. [markdownlint configuration schema][1]

##### Base setup : [.markdownlint-cli2.jsonc] - [CODE]

```json
// Base Setup

1. "default": true, // Set defaults for all rules as true by default.
2. "extends": null, // Explicitly specifies there are no extended configurations.
```

##### Base setup : [.markdownlint-cli2.jsonc] - [CODE DESCRIPTION]

```markdown
1. All rules will be considered true unless the configuration specifically states otherwise.
2. This is set to null because this is the only configuration file that will be used in this project.
```

##### markdownlint-cli2 configuration file, rule table : [.markdownlint-cli2.jsonc]

The rest of the configuration has been entered in the form of a table for legibility purposes.

See. [Markdown Rules][2]

| Rule Code | Sub-setting Description | Value              |
|-----------|-------------------------|--------------------|
| MD001     |                         | True               |
| MD003     | style                   | consistent         |
| MD004     |                         | false              |
| MD005     |                         | true               |
| MD007     | indent                  | 2                  |
| MD007     | start_indented          | true               |
| MD007     | start_indent            | 2                  |
| MD009     | br_spaces               | 2                  |
| MD009     | list_item_empty_lines   | false              |
| MD009     | strict                  | true               |
| MD010     | code_blocks             | true               |
| MD010     | ignore_code_languages   |                    |
| MD010     | spaces_per_tab          | 1                  |
| MD011     |                         | true               |
| MD012     | maximum                 | 1                  |
| MD013     | line_length             | 120                |
| MD013     | heading_line_length     | 120                |
| MD013     | code_block_line_length  | 120                |
| MD013     | code_blocks             | true               |
| MD013     | tables                  | true               |
| MD013     | headings                | true               |
| MD013     | strict                  | true               |
| MD013     | stern                   | true               |
| MD014     |                         | true               |
| MD018     |                         | true               |
| MD019     |                         | true               |
| MD020     |                         | true               |
| MD021     |                         | true               |
| MD022     | lines_above             | 1                  |
| MD022     | lines_below             | 1                  |
| MD023     |                         | true               |
| MD024     | siblings_only           | false              |
| MD025     | level                   | 1                  |
| MD025     | front_matter_title      | ^\\s*title\\s*[:=] |
| MD026     | punctuation             | .,;:!。，；：！    |
| MD027     |                         | true               |
| MD028     |                         | true               |
| MD029     | style                   | one_or_ordered     |
| MD030     | ul_single               | 1                  |
| MD030     | ol_single               | 1                  |
| MD030     | ul_multi                | 1                  |
| MD030     | ol_multi                | 1                  |
| MD031     | list_items              | true               |
| MD032     |                         | true               |
| MD033     | allowed_elements        |                    |
| MD034     |                         | true               |
| MD035     | style                   | consistent         |
| MD036     | punctuation             | .,;:!?。，；：！？ |
| MD037     |                         | true               |
| MD038     |                         | true               |
| MD039     |                         | true               |
| MD040     | allowed_languages       |                    |
| MD040     | language_only           | false              |
| MD041     | level                   | 1                  |
| MD041     | front_matter_title      | ^\\s*title\\s*[:=] |
| MD042     |                         | true               |
| MD044     | names                   | JavaScript         |
| MD044     | code_blocks             | true               |
| MD044     | html_elements           | true               |
| MD045     |                         | true               |
| MD046     | style                   | consistent         |
| MD047     |                         | true               |
| MD048     | style                   | consistent         |
| MD049     | style                   | consistent         |
| MD050     | style                   | consistent         |
| MD051     |                         | true               |
| MD052     | shortcut_syntax         | false              |
| MD053     | ignored_definitions     | //                 |
| MD054     | autolink                | true               |
| MD054     | inline                  | true               |
| MD054     | full                    | true               |
| MD054     | collapsed               | true               |
| MD054     | shortcut                | true               |
| MD054     | url_inline              | true               |
| MD055     | style                   | consistent         |
| MD056     |                         | true               |

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### COMMITLINT CONFIGURATION FILE [COMMITLINT.CONFIG.JS] 📄

#### Attribute Table : [commitlint.config.js]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | commitlint.config.js              |
| Relative Path         | .config                           |
| Hidden                | Inherited                         |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | JavaScript                        |
| CI Scope              | config                            |

#### Asset Purpose : [commitlint.config.js]

Maintains the repository integrity buy ensuring conventional commit standards are being adhered to.

[Conventional Commits][3]

#### Asset Contents Description : [commitlint.config.js]

Contains linting rules pertaining to the conventional commit standards.

##### Commitlint configuration syntax table: [commitlint.config.js]

This table displays the keywords found in 'commitlint.config.js' with an explanation of their function.

| Setting           | Affect                                              |
|-------------------|-----------------------------------------------------|
| extends           | Extend configuration to conventional commits        |
| rules             | Defines a list of commitlint rules                  |
| header-max-length | Limit header length to 72 characters                |
| type-empty        | Disallow empty types in commit messages             |
| subject-empty     | Disallow empty subjects in commit messages          |
| scope-empty       | Require a scope for commits                         |

##### Type enumeration table : [commitlint.config.js]

The following table is a list of commit types as defined in 'commitlint.config.js'.

| Type          | Type Descriptions                                       |
|---------------|---------------------------------------------------------|
| feat          | New feature                                             |
| fix           | Bug fix                                                 |
| docs          | Documentation Changes                                   |
| style         | Code style changes (formatting, etc., no code change)   |
| refactor      | Refactor without adding new features or fixing bugs     |
| perf          | Performance improvements                                |
| test          | Adding or updating tests                                |
| build         | Changes to build system or dependencies                 |
| security      | Security fixes                                          |
| ci            | Continuous integration-related changes                  |
| chore         | Other changes that don't modify source or test files    |
| revert        | Reverts a previous commit                               |
| depreciation  | A feature or portion of code has become redundant       |
| accessibility | Updates for better accessibility compliance (e.g., WCAG)|
| analytics     | Changes to analytics or tracking                        |

##### Scope enumeration table : [commitlint.config.js]

The following table contains a list of commitlint scopes.

| Scope          | Scope Descriptions                                     |
|----------------|--------------------------------------------------------|
| api            | API-related changes                                    |
| ui             | UI-related changes                                     |
| auth           | Authentication changes                                 |
| db             | Database changes                                       |
| deps           | Dependency updates                                     |
| tests          | Test-related changes                                   |
| config         | Configuration updates                                  |

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### GIT FOLDER [.GIT] 📁

#### Attribute Table : [.git]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | .git                              |
| Relative Path         | ./                                |
| Hidden                | Yes                               |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | FOLDER                            |
| CI Scope              | config                            |

#### Asset Purpose : [.git]

Allows Git source control to function.

#### Asset Contents Description : [.git]

⚠️ *Modify these files with caution!*

 ℹ *The individual files in this directory will not be listed here because they are managed by Git therefore you should
  defer to the [Git Documentation][4].*

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### GITHUB FOLDER [.GITHUB] 📁

#### Attribute Table : [.github]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | .github                           |
| Relative Path         | ./                                |
| Hidden                | Yes                               |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | FOLDER                            |
| CI Scope              | config                            |

#### Asset Purpose : [.github]

GitHub Actions relies on this folder for workflow functionality.

#### Asset Contents Description : [.github]

Stores files related to the GitHub [CI/CD](#glossary) pipeline workflow such as linting configurations and GitHub YAML
forms.

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### ISSUE TEMPLATE FOLDER [ISSUE_TEMPLATE] 📁

#### Attribute Table : [issue_template]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | ISSUE_TEMPLATE                    |
| Relative Path         | .github                           |
| Hidden                | Inherited                         |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | FOLDER                            |
| CI Scope              | ui                                |

#### Asset Purpose : [issue_template]

Enforces consistency when submitting issues and feature requests.

#### Asset Contents Description : [issue_template]

Contains templates for GitHub issue forms.

##### YAML GitHub Issue Forms Keyword Glossary

⚠️ *Note that the 'required:' key will only work when the project is made public.*

| Ref         | Description                                                           |
|-------------|-----------------------------------------------------------------------|
| Name        | Identifiable name to describe the purpose of the form.                |
| Description | Describes the function of the form.                                   |
| Title       | Default title that will be pre-populated in the issue submission form.|
| Labels      | Identify the type categories the issue belongs.                       |
| Projects    | Assigns to a specific GitHub project.                                 |
| Body        | Initialises form.                                                     |
| Type        | Form element type E.G. text-box, checkbox, drop-down.                 |
| Attributes  | Specifies sub-settings for a particular element type.                 |
| Label       | Text appears above form element describing what it is.                |
| Value       | Sets markdown text.                                                   |
| ID          | A unique identifier for the field.                                    |
| Placeholder | Text that appears inside the element itself.                          |
| Validations | Checks if form is valid before form can be submitted.                 |
| Required    | Determines if field is required to submit the form.                   |
| Options     | Provides a list of options to select from drop-down box.              |

See. GitHub YAML issue forms schema syntax [documentation][5].

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### BUG REPORT TEMPLATE [BUG-REPORT-TEMPLATE.YML] 📄

#### Attribute Table : [bug-report-template.yml]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | bug-report-template.yml           |
| Relative Path         | .github/ISSUE_TEMPLATE            |
| Hidden                | Inherited                         |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | YAML                              |
| Asset Type            | FOLDER                            |
| CI Scope              | config                            |

#### Asset Purpose : [bug-report-template.yml]

Provides a standard structure for reporting bugs.

#### Asset Contents Description : [bug-report-template.yml]

YAML script that creates a bug submission form for GitHub issues.

#### Asset Code Breakdown : [bug-report-template.yml]

1. Meta data.
2. Initialise form.
3. Introduction text.
4. Email input.
5. OS selection.
6. Browser selection.
7. Bug type.
8. Severity.
9. Problem summary.
10. Expected behaviour.
11. Steps to reproduce.
12. Actual behaviour.
13. Additional information.
14. Agree to terms.

⚠️ *Note that the 'required:' key will only work when the project is made public.*

*The code section of this asset has been presented in table form for legibility purposes.*

##### Meta data : [bug-report-template.yml] - [CODE]

This section of YAML script provides meta data for the form but is not an element of the form itself.

```yaml
1. name: 🐞 Bug Report
2. description: File a bug report
3. title: "[Bug]: "
4. labels: ["bug", "new"]
5. projects: ["NinjaMonkeyGames/12"]
```

##### Meta data attribute table : [bug-report-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value         |
|-----------------------|-------------------------|
| name                  | 🐞 Bug Report           |
| description           | File a bug report       |
| title                 | [Bug]:                  |
| labels                | ["bug", "new"]          |
| projects              | ["NinjaMonkeyGames/12"] |

⚠️ *GitHub once used project names but the new system uses numerical identifiers. 12 being the project 'name'*

##### Initialise form : [bug-report-template.yml] - [CODE]

```yaml
# Initialise Form

1. body:
```

##### Initialise form : [bug-report-template.yml] - [CODE DESCRIPTION]

```markdown
1. body: Initialises YAML form body.
```

##### Introduction text: [bug-report-template.yml] - [CODE]

```yaml
# Introduction Text

1.  - type: markdown
2.    attributes:
3.      value: |
4.        Thanks for taking the time to report this issue! Please fill out the form below to provide detailed 
          information about the bug.
```

##### Introduction text attribute table : [bug-report-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value         |
|-----------------------|-------------------------|
| type                  | markdown                |
| attributes            | List attributes         |
| value                 | Fig 1.4                 |

```markdown
Fig 1.4
Thanks for taking the time to report this issue! Please fill out the form below to provide detailed information about 
the bug.
```

##### Email input : [bug-report-template.yml] - [CODE]

```yaml
# Email Input

1.  - type: input
2.    id: contact-email
3.    attributes:
4.      label: Contact Email
5.      description: Please provide an email where we can reach you if more information is           needed.
6.      placeholder: info@ninjamonkeygames.com
7.    validations:
8.      required: true
```

##### Email input attribute table: [bug-report-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                                                                             |
|-----------------------|---------------------------------------------------------------------------------------------|
| type                  | input                                                                                       |
| id                    | contact-email                                                                               |
| attributes            | List attributes                                                                             |
| label                 | Contact Email                                                                               |
| description           | Please provide an email where we can reach you if we need more information.                 |
| placeholder           | <info@ninjamonkeygames.com>                                                                 |
| validations           | Check if field is valid                                                                     |
| required              | true                                                                                        |

```markdown
##### OS Selection : [bug-report-template.yml] - [CODE]

```yaml
# OS Selection

1.   - type: dropdown
2.     id: os
3.     attributes:
4.       label: Operating System
5.       description: What operating system are you using?
6.       options:
7.         - Chrome
8.         - Firefox
9.         - Safari
10.        - Microsoft Edge
11.        - Opera
12.        - Other
13.    validations:
14.      required: true
```

##### OS Selection attribute table : [bug-report-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                               |
|-----------------------|-----------------------------------------------|
| type                  | drop-down                                      |
| id                    | os                                            |
| attributes            | List attributes                               |
| label                 | Operating System                              |
| description           | What operating system are you using?          |
| options               | List of options                               |
| Windows               | Windows OS                                    |
| MacOS                 | MacOS OS                                      |
| Linux                 | Linux OS                                      |
| Other                 | Other OS                                      |
| validations           | Check if field is valid                       |
| required              | true                                          |

##### Browser selection : [bug-report-template.yml] - [CODE]

```yaml
# Browser Selection

1.   - type: dropdown
2.     id: browser
3.     attributes:
4.       label: Browser
5.       description: What browser are you using?
6.       options:
7.         - Chrome
8.         - Firefox
9.         - Safari
10.         - Microsoft Edge
11.         - Opera
12.         - Other
13.     validations:
14.       required: true
```

##### Browser selection : [bug-report-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                               |
|-----------------------|-----------------------------------------------|
| type                  | drop-down                                     |
| id                    | browser                                       |
| attributes            | List attributes                               |
| label                 | Browser                                       |
| description           | What operating system are you using?          |
| options               | List of options                               |
| Chrome                | Chrome browser                                |
| Firefox               | Firefox browser                               |
| Safari                | Safari browser                                |
| Microsoft Edge        | Microsoft Edge browser                        |
| Opera                 | Opera browser                                 |
| Other                 | Other browser                                 |
| validations           | Check if field is valid                       |
| required              | true                                          |

##### Bug type : [bug-report-template.yml] - [CODE]

```yaml
# Bug Type

1.   - type: dropdown
2.     id: bug-type
3.     attributes:
4.       label: Bug Type
5.       description: Select the type of issue you are reporting.
6.       options:
7.         - Application Bug
8.         - Documentation Problem
9.     validations:
10.       required: true 
```

##### Bug type attribute table : [bug-report-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                               |
|-----------------------|-----------------------------------------------|
| type                  | drop-down                                      |
| id                    | bug-type                                      |
| attributes            | List attributes                               |
| label                 | Bug Type                                      |
| description           | Select the type of issue you are reporting.   |
| options               | List of options                               |
| Application Bug       | Application Bug                               |
| Documentation Problem | Documentation Problem                         |
| validations           | Check if field is valid                       |
| required              | true                                          |

##### Severity : [bug-report-template.yml] - [CODE]

```yaml
# Severity

1.   - type: dropdown
2.     id: severity
3.     attributes:
4.       label: Severity
5.       description: How serious is the problem?
6.       options:
7.         - Low
8.         - Medium
9.         - High
10.         - Critical
11.     validations:
12.       required: true
```

##### Severity attribute table : [bug-report-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                               |
|-----------------------|-----------------------------------------------|
| type                  | drop down                                     |
| id                    | severity                                      |
| attributes            | List attributes                               |
| label                 | Severity                                      |
| description           | How serious is the problem?                   |
| options               | List of options                               |
| Low                   | Low option                                    |
| Medium                | Medium option                                 |
| High                  | High option                                   |
| Critical              | Critical option                               |
| validations           | Check if field is valid                       |
| required              | true                                          |

##### Problem summary : [bug-report-template.yml] - [CODE]

```yaml
# Problem Summary

1.   - type: textarea
2.     id: problem-summary
3.     attributes:
4.       label: Problem Summary
5.       description: Please describe the issue in a few sentences.
6.       placeholder: A brief summary of the issue.
7.     validations:
8.       required: true
```

##### Problem summary attribute table : [bug-report-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                               |
|-----------------------|-----------------------------------------------|
| type                  | textarea                                      |
| id                    | problem-summary                               |
| attributes            | List attributes                               |
| label                 | Problem Summary                               |
| description           | Please describe the issue in a few sentences. |
| placeholder           | A brief summary of the issue.                 |
| validations           | Check if field is valid                       |
| required              | true                                          |

##### Expected behaviour : [bug-report-template.yml] - [CODE]

```yaml
# Expected Behaviour

1.   - type: textarea
2.     id: expected-behaviour
3.     attributes:
4.       label: Expected Behaviour
5.       description: What did you expect to happen?
6.     validations:
7.       required: true
```

##### Expected behaviour attribute table : [bug-report-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                               |
|-----------------------|-----------------------------------------------|
| type                  | textarea                                      |
| id                    | expected-behaviour                            |
| attributes            | List attributes                               |
| label                 | Expected Behaviour                            |
| description           | What did you expect to happen?                |
| validations           | Check if field is valid                       |
| required              | true                                          |

##### Steps to reproduce : [bug-report-template.yml] - [CODE]

```yaml
# Steps To Reproduce

1.   - type: textarea
2.     id: steps-to-reproduce
3.     attributes:
4.       label: Steps to Reproduce
5.       description: Please list the steps to reproduce the issue.
6.       placeholder: "1. \n2. \n3."
7.     validations:
8.       required: true
```

##### Steps to reproduce attribute table : [bug-report-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                               |
|-----------------------|-----------------------------------------------|
| type                  | textarea                                      |
| id                    | steps-to-reproduce                            |
| attributes            | List attributes                               |
| label                 | Steps to Reproduce                            |
| description           | Please list the steps to reproduce the issue. |
| placeholder           | Numbered list                                 |
| validations           | Check if field is valid                       |
| required              | true                                          |

##### Actual behaviour : [bug-report-template.yml] - [CODE]

```yaml
# Actual Behaviour

1.   - type: textarea
2.     id: actual-behaviour
3.     attributes:
4.       label: Actual Behaviour
5.       description: What actually happened? 
6.     validations:
7.       required: true
```

##### Actual behaviour attribute table : [bug-report-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                               |
|-----------------------|-----------------------------------------------|
| type                  | textarea                                      |
| id                    | actual-behaviour                              |
| attributes            | List attributes                               |
| label                 | Actual Behaviour                              |
| description           | What actually happened?                       |
| validations           | Check if field is valid                       |
| required              | true                                          |

##### Additional information : [bug-report-template.yml] - [CODE]

```yaml
# Additional Information

1.   - type: textarea
2.     id: additional-information
3.     attributes:
4.       label: Additional Information
5.       description: Provide any additional information or context that might help us    6.       resolve the issue.
7.       placeholder: Additional context, error messages, or anything else that may be    8.       helpful.
9.     validations:
10.      required: false
```

##### Additional information attribute table : [bug-report-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                                                                              |
|-----------------------|----------------------------------------------------------------------------------------------|
| type                  | textarea                                                                                     |
| id                    | additional-information                                                                       |
| attributes            | List attributes                                                                              |
| label                 | Additional Information                                                                       |
| description           | Provide any additional information or context that might help us resolve the issue           |
| placeholder           | Additional context, error messages, or anything else that may helpful                        |
| validations           | Check if field is valid                                                                      |
| required              | true                                                                                         |

##### Agree to terms attribute table : [bug-report-template.yml] - [CODE]

```yml
# Agree To Terms

1.   - type: checkboxes
2.     id: terms
3.     attributes:
4.       label: Code of Conduct
5.       description: By submitting this bug report, you agree to follow our [Code of Conduct](./CODE_OF_CONDUCT.md).
7.       options:
8.         - label: I agree to follow this project's Code of conduct.
9.     validations:
10.       required: true
```

##### Agree to terms attribute table : [bug-report-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                                                                              |
|-----------------------|----------------------------------------------------------------------------------------------|
| type                  | check-boxes                                                                                  |
| id                    | terms                                                                                        |
| attributes            | List attributes                                                                              |
| label                 | Code of Conduct                                                                              |
| description           | By submitting this bug report, you agree to follow our [Code of Conduct](CODE_OF_CONDUCT.md) |
| options               | List of options                                                                              |
| label                 | I agree to follow this project's Code of conduct.                                            |
| validations           | Check if field is valid                                                                      |
| required              | true                                                                                         |

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### SECURITY POLICY CONFIGURATION FILE [CONFIG.YML] 📄

#### Attribute Table : [config.yml]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | config.yml                        |
| Relative Path         | .github/ISSUE_TEMPLATE            |
| Hidden                | Inherited                         |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | YAML                              |
| Asset Type            | FOLDER                            |
| CI Scope              | config                            |

#### Asset Purpose : [config.yml]

Adds 'Report a Security Vulnerability' option to the Create an issue form.

#### Asset Contents Description : [config.yml]

Contains information text and a link to the 'Report a Security Vulnerability' page.

##### YAML GitHub Security Policy Keyword Glossary

| Ref         | Description                                                           |
|-------------|-----------------------------------------------------------------------|
| Name        | Name displayed in bold on the report issue type selection form.       |
| URL         | The URL to follow containing the form.                                |
| About       | Appears under name describing what the form is for.                   |

#### Asset Code Breakdown : [config.yml]

1. Disable blank issues.
2. Contact links.

##### Disable blank issues : [config.yml] - [CODE]

```yaml
1. blank_issues_enabled: false
```

##### Disable blank issues : [config.yml] - [CODE DESCRIPTION]

```markdown
1. Disables blank issues. (Users will not be able to submit issues based on the blank template)
```

##### Contact links : [config.yml] - [CODE]

```yaml
contact_links:
1.  - name: "🔒 Report a Security Vulnerability (Private)"
2.    url: https://github.com/NinjaMonkeyGames/markdownlint-cli2-workflow-docker/security/advisories/new
3.    about: "Please report security issues privately using GitHub's Private Security Reporting."
```

##### Contact links : [config.yml] - [CODE DESCRIPTION]

```markdown
1. name: Sets name to '🔒 Report a Security Vulnerability (Private)'.
2. url: Provides link to report a security bug link.
3. about: sets description to 'Please report security issues privately using GitHub's Private Security Reporting.'.
```

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### FEATURE REQUEST TEMPLATE [FEATURE-REQUEST-TEMPLATE.YML] 📄

#### Attribute Table : [feature-request-template.yml]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | feature-request-template.yml     |
| Relative Path         | .github/ISSUE_TEMPLATE            |
| Hidden                | Inherited                         |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | YAML                              |
| CI Scope              | config                            |

#### Asset Purpose : [feature-request-template.yml]

Provides a standard structure for reporting features.

#### Asset Contents Description : [feature-request-template.yml]

YAML script that creates a feature submission form for GitHub issues.

#### Asset Code Breakdown : [feature-request-template.yml]

1. Meta data.
2. Initialise form.
3. Introduction text.
4. Email input.
5. OS selection.
6. Browser selection.
7. Feature type.
8. Priority.
9. Feature summary.
10. Expected behaviour.
11. Use case.
12. Additional information.
13. Agree to terms.

⚠️ *Note that the 'required:' key will only work when the project is made public.*

##### Meta data : [feature-request-template.yml] - [CODE]

```yaml
1. name: 🚀 Feature Request
2. description: Submit a request for a new feature or improvement.
3. title: "[Feature Request]: "
4. labels: ["feature", "new"]
5. projects: ["NinjaMonkeyGames/12"]
```

##### Meta data attribute table: [feature-request-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                                   |
|-----------------------|---------------------------------------------------|
| name                  | 🚀 Feature Request                                |
| description           | Submit a request for a new feature or improvement.|
| title                 | [Bug]:                                            |
| labels                | ["feature", "new"]                                |
| projects              | ["NinjaMonkeyGames/12"]                           |

##### Initialise form : [feature-request-template.yml] - [CODE]

```yaml
# Initialise Form

1. body:
```

##### Initialise form : [feature-request-template.yml] - [CODE DESCRIPTION]

```markdown
1. body: Initialises YAML form body.
```

##### Introduction text : [feature-request-template.yml] - [CODE]

```yaml
# Introduction Text

1.  - type: markdown
2.    attributes:
3.      value: |
4.        Thanks for taking the time to suggest a new feature! Please fill out the form below to provide detailed 
          information regarding the feature you desire.
```

##### Introduction text attribute table : [feature-request-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                                                                              |
|-----------------------|----------------------------------------------------------------------------------------------|
| type                  | Markdown                                                                                     |
| attributes            | List attributes                                                                              |
| value                 | Thanks for taking the time to suggest a new feature! Please fill out the form below to       |
|                       | provide detailed information regarding the feature you desire.                               |

##### Email input : [feature-request-template.yml] - [CODE]

```yaml
# Email Input

1.  - type: input
2.    id: contact-email
3.    attributes:
4.      label: Contact Email
5.      description: Please provide an email where we can reach you if more information is           needed.
6.      placeholder: info@ninjamonkeygames.com
7.    validations:
8.      required: true
```

##### Email input attribute table: [feature-request-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                                                                              |
|-----------------------|----------------------------------------------------------------------------------------------|
| type                  | input                                                                                        |
| id                    | contact-email                                                                                |
| attributes            | List attributes                                                                              |
| label                 | Contact Email                                                                                |
| description           | Please provide an email where we can reach you if we need more information.                  |
| placeholder           | <info@ninjamonkeygames.com>                                                                  |
| validations           | Check if field is valid                                                                      |
| required              | true                                                                                         |

##### OS Selection : [feature-request-template.yml] - [CODE]

```yaml
# OS Selection

1.   - type: dropdown
2.     id: os
3.     attributes:
4.       label: Operating System
5.       description: What operating system are you using?
6.       options:
7.         - Windows
8.         - macOS
9.         - Linux
10.        - Other
11.    validations:
12.      required: true
```

##### OS Selection attribute table : [feature-request-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                               |
|-----------------------|-----------------------------------------------|
| type                  | dropdown                                      |
| id                    | os                                            |
| attributes            | List attributes                               |
| label                 | Operating System                              |
| description           | What operating system are you using?          |
| options               | List of options                               |
| Windows               | Windows OS                                    |
| MacOS                 | MacOS OS                                      |
| Linux                 | Linux OS                                      |
| Other                 | Other OS                                      |
| validations           | Check if field is valid                       |
| required              | true                                          |

##### Browser selection : [feature-request-template.yml] - [CODE]

```yaml
# Browser Selection

1.   - type: dropdown
2.     id: browser
3.     attributes:
4.       label: Browser
5.       description: What browser are you using?
6.       options:
7.         - Chrome
8.         - Firefox
9.         - Safari
10.         - Microsoft Edge
11.         - Opera
12.         - Other
13.     validations:
14.       required: true
```

##### Browser selection : [feature-request-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                               |
|-----------------------|-----------------------------------------------|
| type                  | dropdown                                      |
| id                    | browser                                       |
| attributes            | List attributes                               |
| label                 | Browser                                       |
| description           | What operating system are you using?          |
| options               | List of options                               |
| Chrome                | Chrome browser                                |
| Firefox               | Firefox browser                               |
| Safari                | Safari browser                                |
| Microsoft Edge        | Microsoft Edge browser                        |
| Opera                 | Opera browser                                 |
| Other                 | Other browser                                 |
| validations           | Check if field is valid                       |
| required              | true                                          |

##### Feature type : [feature-request-template.yml] - [CODE]

```yaml
# Feature Type

1.  - type: dropdown
2.    id: feature-type
3.    attributes:
4.      label: Feature Type
5.      description: Select the type of feature you are requesting.
6.      options:
7.        - New Feature
8.        - Improvement
9.        - Enhancement
10.    validations:
11.      required: true
```

##### Feature type attribute table: [feature-request-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                               |
|-----------------------|-----------------------------------------------|
| type                  | dropdown                                      |
| id                    | feature-type                                  |
| attributes            | List attributes                               |
| label                 | Feature Type                                  |
| description           | Select the type of feature you are requesting.|
| options               | List of options                               |
| New Feature           | New Feature                                   |
| Improvement           | Improvement                                   |
| Enhancement           | Enhancement                                   |
| validations           | Check if field is valid                       |
| required              | true                                          |

##### Priority : [feature-request-template.yml] - [CODE]

```yaml
# Priority

1.   - type: dropdown
2.     id: priority
3.     attributes:
4.       label: Priority
5.       description: How important is this feature request?
6.       options:
7.         - Low
8.         - Medium
9.         - High
10.        - Critical
11.    validations:
12.      required: true
```

##### Priority attribute table: [feature-request-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                               |
|-----------------------|-----------------------------------------------|
| type                  | dropdown                                      |
| id                    | priority                                      |
| attributes            | List attributes                               |
| label                 | Priority                                      |
| description           | How important is this feature request?        |
| options               | List of options                               |
| Low                   | Low                                           |
| Medium                | Medium                                        |
| High                  | High                                          |
| Critical              | Critical                                      |
| validations           | Check if field is valid                       |
| required              | true                                          |

##### Feature summary : [feature-request-template.yml] - [CODE]

```yaml
# Feature Summary

1.  - type: textarea
2.    id: feature-summary
3.    attributes:
4.      label: Feature Summary
5.      description: Please provide a brief summary of the feature you're requesting.
6.      placeholder: A short description of the feature.
7.    validations:
8.      required: true
```

##### Feature summary attribute table: [feature-request-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                                                 |
|-----------------------|-----------------------------------------------------------------|
| type                  | textarea                                                        |
| id                    | feature-summary                                                 |
| attributes            | List attributes                                                 |
| label                 | Feature Summary                                                 |
| description           | Please provide a brief summary of the feature you're requesting.|
| placeholder           | A short description of the feature.                             |
| validations           | Check if field is valid                                         |
| required              | true                                                            |

##### Expected behaviour : [feature-request-template.yml] - [CODE]

```yaml
# Expected Behaviour

1.  - type: textarea
2.    id: expected-behaviour
3.    attributes:
4.      label: Expected Behaviour
5.      description: What should happen when this feature is implemented?
6.    validations:
7.      required: true
```

##### Expected behaviour attribute table : [feature-request-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                                                 |
|-----------------------|-----------------------------------------------------------------|
| type                  | textarea                                                        |
| id                    | expected-behaviour                                              |
| attributes            | List attributes                                                 |
| label                 | Expected Behaviour                                              |
| description           | What should happen when this feature is implemented?            |
| validations           | Check if field is valid                                         |
| required              | true                                                            |

##### Use case : [feature-request-template.yml] - [CODE]

```yaml
# Use Case

1.  - type: textarea
2.    id: use-case
3.    attributes:
4.      label: Use Case
5.      description: How would this feature benefit you or your workflow?
6.      placeholder: Describe the scenario in which this feature would be useful.
7.    validations:
8.      required: true
```

##### Use case attribute table: [feature-request-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                                                 |
|-----------------------|-----------------------------------------------------------------|
| type                  | textarea                                                        |
| id                    | use-case                                                        |
| attributes            | List attributes                                                 |
| label                 | Use Case                                                        |
| description           | How would this feature benefit you or your workflow?            |
| placeholder           | Describe the scenario in which this feature would be useful.    |
| validations           | Check if field is valid                                         |
| required              | true                                                            |

##### Additional information : [feature-request-template.yml] - [CODE]

```yaml
# Additional Information

1.  - type: textarea
2.    id: additional-information
3.    attributes:
4.      label: Additional Information
5.      description: Please provide any additional context, screenshots, or details that may help us understand your 
                     request better.
6.      placeholder: Any extra details or resources that might help.
7.    validations:
8.      required: false
```

##### Additional information attribute table: [feature-request-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                                                                              |
|-----------------------|----------------------------------------------------------------------------------------------|
| type                  | textarea                                                                                     |
| id                    | additional-information                                                                       |
| attributes            | List attributes                                                                              |
| label                 | Additional Information                                                                       |
| description           | Please provide any additional context, screenshots, or details that may help us understand   |
|                       | your request better.                                                                         |
| placeholder           | Any extra details or resources that might help.                                              |
| validations           | Check if field is valid                                                                      |
| required              | false                                                                                        |

##### Agree to terms : [feature-request-template.yml] - [CODE]

```yaml
# Agree To Terms

1.  - type: checkboxes
2.    id: terms
3.    attributes:
4.      label: Code of Conduct
5.      description: By submitting this feature request, you agree to follow our [Code of Conduct](https://example.com).
6.      options:
7.        - label: I agree to follow this project's Code of Conduct
8.    validations:
9.      required: true
```

##### Agree to terms attribute table: [feature-request-template.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                                                 |
|-----------------------|-----------------------------------------------------------------|
| type                  | check-boxes                                                     |
| id                    | terms                                                           |
| attributes            | List attributes                                                 |
| label                 | Code of Conduct                                                 |
| description           | By submitting this feature request, you agree to follow our     |
|                       | [Code of Conduct](https://example.com).                         |
| options               | List of options                                                 |
| label                 | I agree to follow this project's Code of Conduct.               |
| validations           | Check if field is valid                                         |
| required              | true                                                            |

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### FEATURE REQUEST TEMPLATE [TASK-REQUEST.YML] 📄

#### Attribute Table : [task-request.yml]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | task-request.yml                  |
| Relative Path         | .github/ISSUE_TEMPLATE            |
| Hidden                | Inherited                         |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | YAML                              |
| Asset Type            | FOLDER                            |
| CI Scope              | config                            |

#### Asset Purpose : [task-request.yml]

Provides a way to raise issues related to tasks that don't fall under the feature or bug category. This includes things
like documentation updates.

#### Asset Contents Description : [task-request.yml]

YAML script that creates a task request form for GitHub issues.

#### Asset Code Breakdown : [task-request.yml]

1. Meta Data
2. Initialise form
3. Introduction text
4. Email input
5. Task description
6. Priority
7. Acceptance criteria
8. Dependencies
9. Additional notes

##### Meta data : [task-request.yml] - [CODE]

```yaml
# Meta Data

1. name: 📋 Task Request
2. description: Request a task to be completed by the development team.
3. title: "[Task]: "
4. labels: ["task", "new"]
5. projects: ["NinjaMonkeyGames/12"]
```

##### Meta data attribute table : [task-request.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                                             |
|-----------------------|-------------------------------------------------------------|
| name                  | 📋 Task Request                                             |
| description           | Request a task to be completed by the development team      |
| title                 | [Task]:                                                     |
| labels                | ["task", "new"]                                             |
| projects              | ["NinjaMonkeyGames/12"]                                     |

⚠️ *GitHub once used project names but the new system uses numerical identifiers. 12 being the project 'name'*

##### Initialise form : [task-request.yml] - [CODE]

```yaml
# Initialise Form

1. body:
```

##### Initialise form : [task-request.yml] - [CODE DESCRIPTION]

```markdown
1. body: Initialises YAML form body.
```

##### Introduction text: [task-request.yml] - [CODE]

```yaml
# Introduction Text

 1. - type: markdown
 2.   attributes:
 3.     value: |
 4.       Task Overview
 5.       Please provide details about the task that needs to be completed.
```

##### Introduction text attribute table : [task-request.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                                                                   |
|-----------------------|-----------------------------------------------------------------------------------|
| type                  | markdown                                                                          |
| attributes            | List attributes                                                                   |
| value                 | Please provide details about the task that needs to be completed.                 |

##### Email input : [task-request.yml] - [CODE]

```yaml
# Email Input

1.  - type: input
2.    id: contact-email
3.    attributes:
4.      label: Contact Email
5.      description: Please provide an email where we can reach you if more information is needed.
6.      placeholder: info@ninjamonkeygames.com
7.    validations:
8.      required: true
```

##### Email input attribute table: [task-request.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                                                                             |
|-----------------------|---------------------------------------------------------------------------------------------|
| type                  | input                                                                                       |
| id                    | contact-email                                                                               |
| attributes            | List attributes                                                                             |
| label                 | Contact Email                                                                               |
| description           | Please provide an email where we can reach you if we need more information.                 |
| placeholder           | <info@ninjamonkeygames.com>                                                                 |
| validations           | Check if field is valid                                                                     |
| required              | true                                                                                        |

##### Task description : [task-request.yml] - [CODE]

```yaml
# Task Description

1. - type: textarea
2.   id: task-description
3.   attributes:
4.     label: "Task Description"
5.     description: "Provide a clear and concise description of what needs to be done."
6.     placeholder: "Describe the task in detail, including any necessary context."
7.   validations:
8.     required: true
```

##### Task description attribute table : [task-request.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                                                               |
|-----------------------|-------------------------------------------------------------------------------|
| type                  | textarea                                                                      |
| id                    | task-description                                                              |
| attributes            | List attributes                                                               |
| label                 | Problem Summary                                                               |
| description           | Provide a clear and concise description of what needs to be done.             |
| placeholder           | Describe the task in detail, including any necessary context.                 |
| validations           | Check if field is valid                                                       |
| required              | true                                                                          |

##### Priority : [task-request.yml] - [CODE]

```yaml
# Priority

1.   - type: dropdown
2.     id: priority
3.     attributes:
4.       label: Priority
5.       description: How important is this feature request?
6.       options:
7.         - Low
8.         - Medium
9.         - High
10.        - Critical
11.    validations:
12.      required: true
```

##### Priority attribute table: [task-request.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                               |
|-----------------------|-----------------------------------------------|
| type                  | dropdown                                      |
| id                    | priority                                      |
| attributes            | List attributes                               |
| label                 | Priority                                      |
| description           | How important is this feature request?        |
| options               | List of options                               |
| Low                   | Low                                           |
| Medium                | Medium                                        |
| High                  | High                                          |
| Critical              | Critical                                      |
| validations           | Check if field is valid                       |
| required              | true                                          |

##### Acceptance criteria : [task-request.yml] - [CODE]

```yaml
  # Acceptance Criteria

 1. - type: textarea
 2.   id: acceptance-criteria
 3.   attributes:
 4.     label: "Acceptance Criteria"
 5.     description: "List the conditions that must be met for this task to be considered complete."
 6.     placeholder: "E.g., Documentation updated in the wiki, reviewed by at least one team member."
 7.   validations:
 8.     required: true
```

##### Acceptance criteria attribute table: [task-request.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                                                               |
|-----------------------|-------------------------------------------------------------------------------|
| type                  | textarea                                                                      |
| id                    | acceptance-criteria                                                           |
| attributes            | List attributes                                                               |
| label                 | Acceptance Criteria                                                           |
| description           | List the conditions that must be met for this task to be considered complete. |
| placeholder           | A short description of the feature.                                           |
| validations           | Check if field is valid                                                       |
| required              | true                                                                          |

##### Dependencies : [task-request.yml] - [CODE]

```yaml
# Dependencies

1. - type: textarea
2.   id: depends-on
3.   attributes:
4.     label: "Depends on"
5.     description: "Other tasks this issue depends on in order to complete"
6.     placeholder: "Depends on #"
7.   validations:
8.     required: false
```

##### Dependencies attribute table: [task-request.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                                                               |
|-----------------------|-------------------------------------------------------------------------------|
| type                  | textarea                                                                      |
| id                    | depends-on                                                                    |
| attributes            | List attributes                                                               |
| label                 | Depends on                                                                    |
| description           | Other tasks this issue depends on in order to complete                        |
| placeholder           | Depends on #                                                                  |
| validations           | Check if field is valid                                                       |
| required              | false                                                                         |

##### Additional Notes : [task-request.yml] - [CODE]

```yaml
# Additional Notes

1. - type: textarea
2.   id: additional-notes
3.   attributes:
4.     label: "Additional Notes"
5.     description: "Include any other relevant details or links."
6.     placeholder: "E.g., Links to related issues, resources, or discussions."
7.   validations:
8.     required: false
```

##### Additional notes attribute table : [task-request.yml] - [CODE DESCRIPTION]

| Attribute Description | Attribute Value                                                               |
|-----------------------|-------------------------------------------------------------------------------|
| type                  | textarea                                                                      |
| id                    | additional-notes                                                              |
| attributes            | List attributes                                                               |
| label                 | Additional notes                                                              |
| description           | Include any other relevant details or links.                                  |
| placeholder           | E.g., Links to related issues, resources, or discussions.                     |
| validations           | Check if field is valid                                                       |
| required              | false                                                                         |

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### WORKFLOWS FOLDER [WORKFLOWS] 📁

#### Attribute Table : [workflows]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | workflows                         |
| Relative Path         | .github                           |
| Hidden                | Inherited                         |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | FOLDER                            |
| Asset Type            | FOLDER                            |
| CI Scope              | config                            |

#### Asset Purpose : [workflows]

GitHub relies on this folder for workflow functionality.

#### Asset Contents Description : [workflows]

Stores YAML files that will be triggered by GitHub Actions as part of the [CI/CD](#glossary) workflow.

##### YAML GitHub actions keyword glossary

| Key         | Description                                                        |
|-------------|--------------------------------------------------------------------|
| name        | Text label displayed when GitHub Actions executes a YAML script.   |
| on          | Automatically triggers a workflow when 'on:' condition as been met.|
| push        | Execute event when pushed.                                         |
| paths       | Specifies the files and paths to be included.                      |
| jobs        | Defines a set of jobs to be run in the pipeline.                   |
| build       | Specifies the name of the job being configured.                    |
| runs-on     | Specifies an OS environment to run on.                             |
| environment | Sets environment in which the script can run.                      |
| steps       | Defines the sequence of steps that the job will execute.           |
| uses        | Tells GitHub Actions it is about to use a pre-build Actions script.|
| with        | Puts the workflow in at state ready to accept login credentials.   |
| username    | States that a username will follow.                                |
| password    | States that a password will follow.                                |
| run         | Executes command(s).                                               |
| lint        | A label to specify the category of job.                            |
| container   | Sets container options.                                            |
| image       | Specifies docker image.                                            |
| if          | Conditional statement.                                             |

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### VSC IDE EXTENSIONS [DEPENDABOT.YML] 📄

#### Attribute Table : [dependabot.yml]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | dependabot.yml                    |
| Relative Path         | .vscode                           |
| Hidden                | Inherited                         |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | YAML                              |
| CI Scope              | config                            |

#### Asset Purpose : [dependabot.yml]

Keep package dependencies up to date.

#### Asset Contents Description : [dependabot.yml]

Checks for dependencies once per week.

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### VSCODE SETTINGS FOLDER [.VSCODE] 📁

#### Attribute Table : [.vscode]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | .vscode                           |
| Relative Path         | ./                                |
| Hidden                | Yes                               |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | FOLDER                            |
| CI Scope              | config                            |

#### Asset Purpose : [.vscode]

To maintain a consistent development environment for all developers working on the project.

#### Asset Contents Description : [.vscode]

Contains settings and configuration files relating to the setup of the [VSC](#glossary) [IDE](#glossary).

##### Dockerfile syntax glossary : [.vscode]

| Token       | Description                                                                |
|-------------|----------------------------------------------------------------------------|
| ""          | Encapsulates strings.                                                      |
| {}          | Opens and closes JSON for writing.                                         |
| []          | Opens and closes list of settings.                                         |
| ,           | Continues list.                                                            |
| .           | Access a specific property within a category or group of related settings. |
| :           | Assigns key value.                                                         |

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### VSC IDE EXTENSIONS [EXTENSIONS.JSON] 📄

#### Attribute Table : [extensions.json]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | extensions.json                   |
| Relative Path         | .vscode                           |
| Hidden                | Inherited                         |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | JSON                              |
| CI Scope              | config                            |

#### Asset Purpose : [extensions.json]

Keeps a list of extensions needed to develop the project.

#### Asset Contents Description : [extensions.json]

Stores a list of extensions that the developer will be prompted to install when opening the project for the first time.

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### VSC IDE SETTINGS [SETTINGS.JSON] 📄

#### Attribute Table : [settings.json]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | settings.json                     |
| Relative Path         | .vscode                           |
| Hidden                | Inherited                         |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | JSON                              |
| CI Scope              | config                            |

#### Asset Purpose : [settings.json]

Allows developers to set their IDE up automatically.

#### Asset Contents Description : [settings.json]

Stores the majority of IDE based configurations.

#### Asset Code Breakdown : [settings.json]

1. Automatic actions.
2. Add a visible ruler to the IDE.
3. Format settings.
4. Confirmation settings.
5. Include otherwise hidden folders in the file tree view.
6. Include otherwise excluded files in project file search.
7. Markdownlint-Cli2 configuration options.

##### Automatic actions : [settings.json] - [CODE]

```json
// Automatic Actions

"editor.formatOnSave": true,    // Automatically format files when saving
"editor.formatOnType": true,    // Automatically format code as you type
"files.autoSave": "afterDelay", // All file changes will be saved periodically
"files.autoSaveDelay": 1000,    // Set autosave delay for 1000 milliseconds
```

##### Automatic actions : [settings.json] - [CODE-DESCRIPTION]

| Setting             | Value      | Description                                   |
|---------------------|------------|-----------------------------------------------|
| editor.formatOnSave | true       | Automatically format files when saving        |
| editor.formatOnType | true       | Automatically format code as you type         |
| files.autoSave      | afterDelay | All file changes will be saved periodically   |
| files.autoSaveDelay | 1000       | Set Set auto-save delay for 1000 milliseconds |

##### Add A visible ruler to the IDE : [settings.json] - [CODE]

```json
 // Add A Visible Ruler To The IDE

  "editor.rulers": 
  [
      120 // set ruler width to 120 characters
  ],
```

##### Add A visible ruler to the IDE : [settings.json] - [CODE DESCRIPTION]

| Setting             | Value      | Description                                   |
|---------------------|------------|-----------------------------------------------|
| editor.rulers       | 120        | set ruler width to 120 characters             |

##### Format settings : [settings.json] - [CODE]

```json
// Format Settings

"editor.wrappingIndent": "same",     // Keep indentation level of wrapped lines
"files.eol": "\n",                   // Force all new files to be in LF format opposed to CRLF 
"editor.wordWrap": "wordWrapColumn", // Automatically wrap lines of text
"editor.wordWrapColumn": 120,        // Set the wrap column to 120 characters
```

##### Format settings : [settings.json] - [CODE DESCRIPTION]

| Setting              | Value      | Description                                          |
|----------------------|------------|------------------------------------------------------|
| editor.wrappingIndent| same       | Keep indentation level of wrapped lines              |
| files.eol":          | \n         | Force new files to be in LF format opposed to CRLF   |
| editor.wordWrap      | wordWrapColumn | wordWrapColumn                                   |
| editor.wordWrapColumn| 120        | Set the wrap column to 120 characters                |

##### Confirmation settings : [settings.json] - [CODE]

```json
// Confirmation Settings

"explorer.confirmDelete": false,        // Prevents prompt when deleting files
"explorer.confirmDragAndDrop": false,   // Prevents prompt when moving files
```

##### Confirmation settings : [settings.json] - [CODE DESCRIPTION]

| Setting               | Value      | Description                                         |
|-----------------------|------------|-----------------------------------------------------|
| explorer.confirmDelete| false      | Prevents prompt when deleting files                 |
| explorer.confirmDragAndDrop | false | Prevents prompt when moving files                  |

##### Include otherwise hidden folders in the file tree view : [settings.json] - [CODE]

```json
// Include Otherwise Hidden Folders In The File Tree View

"files.exclude": 
{
    "**/.git": false,           // Show .git folder
    "**/node_modules": false,   // Show node_modules
},
```

##### Include otherwise hidden folders in the file tree view : [settings.json] - [CODE DESCRIPTION]

| Setting                | Value      | Description                                        |
|------------------------|------------|----------------------------------------------------|
| files.exclude [**/.git]| false      | Show .git folder                                   |
| files.exclude [**/node_modules] | false | Show node_modules                              |

##### Include otherwise excluded files in project file search : [settings.json] - [CODE]

```json
// Include Otherwise Excluded Files In Project File Search

"search.exclude": {
    "**/.git": false,           // Include (Exclude) .git folder
    "**/node_modules": false,   // Include (Exclude) node_modules folder
},
```

##### Include otherwise excluded files in project file search : [settings.json] - [CODE DESCRIPTION]

| Setting                | Value      | Description                                        |
|------------------------|------------|----------------------------------------------------|
| search.exclude[**/.git]| false      | Include .git folder                                |
| search.exclude[**/node_modules] | false | Include node_modules folder                    |

##### Markdownlint-Cli2 Configuration options : [settings.json] - [CODE]

```json
// Markdownlint-Cli2 Configuration Options

"markdownlint.config": {
    "extends": ".config/.markdownlint-cli2.jsonc" // Sets location of '.markdownlint.jsonc' config file

},
```

##### Markdownlint-Cli2 Configuration options : [settings.json] - [CODE DESCRIPTION]

| Setting                       | Value                            | Description                                       |
|-------------------------------|-------------------------------------------------------------------------------------|
| markdownlint.config [extends] | .config/.markdownlint-cli2.jsonc | Sets location of '.markdownlint.jsonc' config file|

##### Custom markdownlint rules : [settings.json] - [CODE]

```json
// Custom Markdownlint Rules

"markdownlint.customRules": 
[
    ".config/custom-markdownlint-rules/capitalised-headings.js", // Sets locations of 'capitalised-heading.js'
],
```

##### Custom markdownlint rules : [settings.json] - [CODE DESCRIPTION]

| Setting                 | Value                                                     | Description                    |
|-------------------------|--------------------------------------------------------------------------------------------|
| markdownlint.customRules| .config/custom-markdownlint-rules/capitalised-headings.js | Sets locations of              |
|                         |                                                           | 'capitalised-heading.js'       |

##### cSpell Configuration Options : [settings.json] - [CODE]

```json
// cSpell Configuration Options

"cSpell.import": 
[
    "./.config/cspell.json"
],
```

##### cSpell Configuration Options : [settings.json] - [CODE DESCRIPTION]

| Setting                | Value                 | Description                             |
|------------------------|-----------------------|-----------------------------------------|
| cSpell.import[]        | ./.config/cspell.json | cSpell Configuration Options            |

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### LINTING VIOLATION EXAMPLES FOLDER [LINTING-TESTS] 📁

#### Attribute Table : [linting-tests]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | linting-tests                     |
| Relative Path         | ./                                |
| Hidden                | No                                |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | FOLDER                            |
| CI Scope              | tests                             |

#### Asset Purpose : [linting-tests]

To provide an example of each and every linting test so that it can be used to test linting configurations ensuring
proper CI workflow consistency.

#### Asset Contents Description : [linting-tests]

Contains files for each type of linting test.

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### MARKDOWN RULE VIOLATION EXAMPLES FOLDER [JAVASCRIPT-FAIL] 📁

#### Attribute Table : [javascript-fail]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | javascript-fail                   |
| Relative Path         | ./                                |
| Hidden                | No                                |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | FOLDER                            |
| CI Scope              | tests                             |

#### Asset Purpose : [javascript-fail]

To ensure all of the javascript configurations are correct and markdownlint is operating as expected.

#### Asset Contents Description : [javascript-fail]

Contains as file for each ESLint test including JavaScript and TypeScript.

Each file contains fail test code taken from the [eslint manual][8], [eslint manual][9].

ℹ *These tests can be used to compare to the JavaScript 'eslint.config.js' configuration file in order to make sure
everything is setup correctly.*

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### MARKDOWN RULE VIOLATION EXAMPLES FOLDER [MARKDOWN-FAIL] 📁

#### Attribute Table : [markdown-fail]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | markdown-fail                     |
| Relative Path         | ./                                |
| Hidden                | No                                |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | FOLDER                            |
| CI Scope              | tests                             |

#### Asset Purpose : [markdown-fail]

To ensure all of the markdown configurations are correct and markdownlint is operating as expected.

#### Asset Contents Description : [markdown-fail]

Contains as file for each markdownlint test.

Each file contains fail test code taken from the [markdownlint manual][8].

ℹ *These tests can be used to compare to the markdown configuration file '.markdownlint-cli2.jsonc' in order to make
sure everything is setup correctly.*

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### MARKDOWN RULE VIOLATION EXAMPLES FOLDER [TYPESCRIPT-FAIL] 📁

#### Attribute Table : [typescript-fail]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | typescript-fail                   |
| Relative Path         | ./                                |
| Hidden                | No                                |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | FOLDER                            |
| CI Scope              | tests                             |

#### Asset Purpose : [typescript-fail]

To ensure all of the TypeScript settings are correct and ESLint is operating as expected.

#### Asset Contents Description : [typescript-fail]

Contains as file for each TypeScript test.

Each file contains fail test code taken from the [typescript manual][9].

ℹ *These tests can be used to compare to the TypeScript configuration file 'eslint.config.js' in order to make sure
everything is setup correctly.*

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### NODE MODULES FOLDER [NODE_MODULES] 📁

#### Attribute Table : [node_modules]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | node_modules                      |
| Relative Path         | ./                                |
| Hidden                | No                                |
| Include in Repository | No                                |
| Managed               | No                                |
| Asset Type            | FOLDER                            |
| CI Scope              | N/A                               |

#### Asset Purpose : [node_modules]

Used to run IDE related tools such as markdownlint.

#### Asset Contents Description : [node_modules]

Store source code for various plugins and utilities.

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### GIT IGNORE FILE [.GITIGNORE] 📄

#### Attribute Table : [.gitignore]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | .gitignore                        |
| Relative Path         | ./                                |
| Hidden                | Yes                               |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | TEXT                              |
| CI Scope              | config                            |

#### Asset Purpose : [.gitignore]

Prevents code-base from becoming cluttered.

#### Asset Contents Description : [.gitignore]

Lists files to exclude from the repository when committing.

ℹ *The contents of this file has not been listed here as they are sufficiently commented within the file.*

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### CHANGELOG [CHANGELOG.MD] 📄

#### Attribute Table : [changelog.md]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | CHANGLELOG.md                     |
| Relative Path         | ./                                |
| Hidden                | No                                |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | MARKDOWN                          |
| CI Scope              | core                              |

#### Asset Purpose : [changelog.md]

Keeps track of changes made to the repository.

#### Asset Contents Description : [changelog.md]

A changelog based on common changelog standards.

See. [Common Changelog][9]

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### DEVELOPER [DEVELOPER.MD] 📄

#### Attribute Table : [developer.md]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | DEVELOPER.md                      |
| Relative Path         | ./                                |
| Hidden                | No                                |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | MARKDOWN                          |
| CI Scope              | config                            |

#### Asset Purpose : [developer.md]

Inform the developer how the project performs functionally. This serves as development manual.

#### Asset Contents Description : [developer.md]

A detailed description of every asset in the project with a description of it's purpose and function.

ℹ️ *That is this document.*

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### DOCKERFILE [DOCKERFILE] 📄

#### Attribute Table : [dockerfile]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | Dockerfile                        |
| Relative Path         | ./                                |
| Hidden                | No                                |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | DOCKERFILE                        |
| CI Scope              | core                              |

#### Asset Purpose : [dockerfile]

Build Dockerfile.

#### Asset Contents Description : [dockerfile]

Contains the build script required to create markdownlint-cli2 Docker container.

##### Dockerfile keyword glossary : [Dockerfile]

| Key         | Description                                                              |
|-------------|--------------------------------------------------------------------------|
| FROM        | Selects which base image to use.                                         |
| WORKDIR     | Set the working directory.                                               |
| RUN         | Executes program.                                                        |
| USER        | Set user to.                                                             |
| COPY        | Copies a file or folder from one place to another.                       |

##### Dockerfile syntax glossary : [Dockerfile]

| Token       | Description                                                                                            |
|-------------|--------------------------------------------------------------------------------------------------------|
| &&          | Logical operator to ensure this command was successful before continuing.                              |
| \           | Line continuation character.                                                                           |
| -g          | set global flag to install globally.                                                                   |
| install     | Installs a package.                                                                                    |
| npm         | Executes npm                                                                                           |
| mkdir       | Creates a new folder.                                                                                  |
| -p          | Ensures all sub directories are also created.                                                          |
| &&          | Logical operator to ensure this command was successful before continuing.                              |
| \           | Line continuation character.                                                                           |
| ""          | String encapsulation.                                                                                  |
| >           | Redirection operator. It writes the output of the echo command into a file.                            |
| set         | specifies that a configuration setting is being added or updated.                                      |
| apk         | Installs an application with apk.                                                                      |
| add         | Add package to Alpine Package Manager.                                                                 |
| --no-cache  | Clears or ignores previous cache to avoid unexpected errors.                                           |
| update      | Updates all apk packages.                                                                              |
| upgrade     | Upgrade selected packaged to a later version                                                           |

#### Asset code breakdown : [Dockerfile]

1. Use Alpine image with Node.js 23.
2. Set the working directory to app.
3. Copy the markdownlint configuration file to the container.
4. Install markdownlint-cli2 globally.
5. Update cross-spawn.
6. Update OpenSSL to the latest version using APK.
7. Create a non-root user and group.
8. Switch to the non-root user (appuser).
9. Start a shell when the container is run.

##### Use the latest Alpine image with Node.js 23 : [Dockerfile] - [CODE]

```dockerfile
# Use the latest Alpine image with Node.js 23 

1. FROM node:23-alpine
```

##### Use the latest Alpine image with Node.js 23 : [Dockerfile] - [CODE-DESCRIPTION]

```markdown
1. FROM selects which base image to use.
    a. Specifies 'node:23-alpine' should be used as the base image.
```

##### Set the working directory to app : [Dockerfile] - [CODE]

```dockerfile
# Set the working directory to app

1. WORKDIR /app
```

##### Set the working directory to app : [Dockerfile] - [CODE-DESCRIPTION]

```markdown
1. WORKDIR Set the working directory.
        a. Create app folder.
```

##### Copy the markdownlint configuration file to the container : [Dockerfile] - [CODE]

```dockerfile
# Copy the markdownlint configuration file to the container

COPY .config/.markdownlint.jsonc /app/.config/.markdownlint.jsonc
```

##### Copy the markdownlint configuration file to the container : [Dockerfile] - [CODE-DESCRIPTION]

```markdown
1. COPY '.markdownlint.jsonc' from .config to app folder.
```

##### Install markdownlint-cli2 globally : [Dockerfile] - [CODE]

```dockerfile
# Install markdownlint-cli2 globally

1. RUN npm install -g markdownlint-cli2
```

##### Install markdownlint-cli2 globally : [Dockerfile] - [CODE-DESCRIPTION]

```markdown
1. Install markdownlint-cli2 globally
    a. RUN Executes program.
    b. Run npm with install flag
    c. '-g' set global flag to install globally.
    d. Mark markdownlint-cli2 as the package to install.
```

##### Update cross-spawn : [Dockerfile] - [CODE]

```dockerfile
# Update cross-spawn

1. RUN mkdir -p /usr/local/etc && \
2.     echo '{ "overrides": { "cross-spawn": "7.0.6" } }' > /usr/local/etc/npmrc && \
3.     npm config set globalconfig /usr/local/etc/npmrc && \
4.     npm install -g npm
```

##### Update cross-spawn : [Dockerfile] - [CODE-DESCRIPTION]

```markdown
1. Create 'etc' directory.
    a. RUN Executes program.
    b. Make directory.
    c. -p ensures all sub directories are also created.
    d. Set /usr/local/etc as the directory to be created.
    e. '&&' is a logical operator to ensure this command was successful before continuing.
    f. '\' Line continuation character.
2. Prepares npm config file to override cross-spawn to v7.0.6.
    a. output result using STDOUT (Standard out).
    b. '{ "overrides": { "cross-spawn": "7.0.6" } }' overrides cross-spawn version.
    c. '>' Redirection operator. It writes the output of the echo command into a file, overwriting its contents if the 
    file already exists.
    d. '/usr/local/etc/npmrc' specifies location of npm config file.
    e. '&&' is a logical operator to ensure this command was successful before continuing.
    f. '\' Line continuation character.
3. Tells npm to use /usr/local/etc/npmrc as its global configuration.
    a. 'npm' executes npm.
    b. A flag set to manage npm's configuration settings.
    c. 'Set' specifies that a configuration setting is being added or updated.
    d. 'globalconfig' specifies that global npm configuration will be used.
    e. '/usr/local/etc/npmrc' specifies config location.
    f. '&&' is a logical operator to ensure this command was successful before continuing.
    g. '\' Line continuation character.
4. Update npm.
    a. 'npm' executes npm.
    b. 'install' installs npm.
    c. '-g' flags npm to install globally.
    d. 'npm' is the package to be installed.
```

⚠️ *cross-spawn is updated in order to avoid CVE errors reports as there is a known CVE. issue.*

##### Update OpenSSL to the latest version using APK : [Dockerfile] - [CODE]

```dockerfile
# Update OpenSSL to the latest version using APK

1. RUN apk update && \
2.    apk add --no-cache openssl && \
3.    apk upgrade openssl
```

##### Update OpenSSL to the latest version using APK : [Dockerfile] - [CODE - DESCRIPTION]

```markdown
1. Update Alpine Package Manager.
    a. RUN executes a program.
    b. 'apk' is the package to run.'
    c. 'update' gets the latest version of APK.
    d. '&&' logical operator to ensure this command was successful before continuing.
    e. '\' Line continuation character.

2. Update openssl.
    a. RUN executes a program.
    b.'apk' is the program to install.
    c. '--no-cache' ensures the correct versions are used.
    d. 'openssl' is the package to be updated.
    e. '&&' logical operator to ensure this command was successful before continuing.
    f. '\' Line continuation character.

3. 'apk' is the package to run.'
    a. Upgrade 'openssl' to the latest versions of openssl.

```

⚠️ *openssl is updated in order to avoid CVE errors reports as there is a known CVE issue.*

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### NODE PACKAGE LOCK FILE [LICENSE] 📄

#### Attribute Table : [license]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | license                           |
| Relative Path         | ./                                |
| Hidden                | No                                |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | TEXT                              |
| CI Scope              | core                              |

#### Asset Purpose : [license]

Provides users with legal information regarding their rights as it pertains to the use and distribution of this
software.

#### Asset Contents Description : [license]

Contains the unlicense, license.

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### NODE PACKAGE LOCK FILE [PACKAGE-LOCK.JSON] 📄

#### Attribute Table : [package-lock.json]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | package-lock.json                 |
| Relative Path         | ./                                |
| Hidden                | No                                |
| Include in Repository | Yes                               |
| Managed               | No                                |
| Asset Type            | JSON                              |
| CI Scope              | deps                              |

#### Asset Purpose : [package-lock.json]

Keeps all package dependency versions pinned. This ensures the environment is the same for all developers and minimises
errors.

#### Asset Contents Description : [package-lock.json]

package-lock.json: A file automatically generated by npm to lock the exact versions of dependencies (and their
sub-dependencies) installed. It ensures consistent installs across environments by tracking the precise dependency tree.

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### NODE PACKAGE FILE [PACKAGE.JSON] 📄

#### Attribute Table : [package.json]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | package.json                      |
| Relative Path         | ./                                |
| Hidden                | No                                |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | JSON                              |
| CI Scope              | deps                              |

#### Asset Purpose : [package.json]

Keeps all package dependency versions pinned. This ensures the environment is the same for all developers and minimises
errors.

#### Asset Contents Description : [package.json]

A file that defines a Node.js project. It includes metadata about the project (e.g., name, version, description) and
lists dependencies, scripts, and configuration for the project.

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### README [README.MD] 📄

#### Attribute Table : [readme.md]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | readme.md                         |
| Relative Path         | ./                                |
| Hidden                | No                                |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | JSON                              |
| CI Scope              | core                              |

#### Asset Purpose : [readme.md]

Provides general information about the project to enable users and developers to get an overview of what the project is
about and how it's structured.

#### Asset Contents Description : [readme.md]

Provides an overall description of the project and other useful information.

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### SECURITY [SECURITY.MD] 📄

#### Attribute Table : [security.md]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | SECURITY.md                       |
| Relative Path         | ./                                |
| Hidden                | No                                |
| Include in Repository | Yes                               |
| Managed               | Yes                               |
| Asset Type            | MARKDOWN                          |
| CI Scope              | security                          |

#### Asset Purpose : [security.md]

Provide information to users regarding the submission of security issues.

#### Asset Contents Description : [security.md]

Security policy information.

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

### TODO [TODO.MD] 📄

#### Attribute Table : [todo.md]

| Attribute             | Value                             |
|-----------------------|-----------------------------------|
| Asset Name            | todo.md                           |
| Relative Path         | ./                                |
| Hidden                | No                                |
| Include in Repository | Yes                               |
| Managed               | No                                |
| Asset Type            | TEXT                              |
| CI Scope              | N/A                               |

#### Asset Purpose : [todo.md]

Allows developers to take notes while working on a branch.

#### Asset Contents Description : [todo.md]

A list of items that need to be completed and added to the changelog before changes can be merged with the master
branch.

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

## GLOSSARY

| Term   | Definition                                                                       |
|--------|----------------------------------------------------------------------------------|
| APK    | Alpine Package Keeper. Alpine Linux package manager.                             |
| CI/CD  | Continues Integration Continues Development.                                     |
| CVSS   | Common Vulnerability Scoring System.                                             |
| Git    | Git source control used for managing code base.                                  |
| GIT    | Source control software.                                                         |
| IDE    | Integrated Development Environment.                                              |
| JSONC  | JavaScript Object Notation Commented.                                            |
| MD     | Markdown.                                                                        |
| NMG    | Ninja Monkey Games™                                                              |
| NPM    | Network Package Manager. Used by Node.JS to manage plugins and other tools.      |
| OS     | Operating system.                                                                |
| PAT    | [Personal access tokens][10] are used instead of the Dockerhub account password. |
| PNG    | Portable Network Graphic.                                                        |
| RegEx  | Regular expression. A pattern of characters used to mask a string.               |
| SBOM   | Software Bill of Materials is list of package dependencies.                      |
| Secret | Encrypted key stored as an environment variable.                                 |
| VSC    | Microsoft Visual Studio Code.                                                    |
| WCAG   | Web Content Accessibility Guidelines.                                            |
| WSL    | Windows Subsystem for Linux.                                                     |
| YAML   | Yet another markup language. Scripts that control CI/CD pipelines.               |

---

[BACK TO TOP](#markdownlint-cli2-cicd-pipeline-docker-project-programmers-manual)

---

## EXTERNAL RESOURCES

  [1]: https://github.com/DavidAnson/markdownlint/blob/main/schema/markdownlint-config-schema.json
  [2]: https://github.com/markdownlint/markdownlint/blob/main/docs/RULES.md
  [3]: https://www.conventionalcommits.org/en/v1.0.0/#specification
  [4]: https://git-scm.com/doc
  [5]: https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema
  [8]: https://github.com/markdownlint/markdownlint/blob/main/docs/RULES.md
  [9]: https://common-changelog.org/
  [10]: https://github.com/DavidAnson/markdownlint/blob/main/schema/markdownlint-config-schema.json
