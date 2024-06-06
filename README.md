# README #

## What is this repository for? ##

The purpose of this repository is to maintain control over versions of markdownlint-cli2. This maintains uniformity-
when enforcing coding standards and formatting rules. This allows for easier upgrades and prevents newer versions from
breaking the pipeline.

---

## Configuration information ##

There is a '.markdownlint.yml' file containing the markdown configuration in the root of the project directory.You can
use the following YAML line to copy this into your project directory.

```shell
cp /app/.markdownlint.yaml $GITHUB_WORKSPACE
```

Alternately you can use the following command to use your own configuration file.

```shell
markdownlint-cli2 '**/*.md' --config .\.markdownlint.yaml
```

See links below for more information about Markdownlint-cli2 and Alpine Linux.

---

## Useful links ##
  
  * **Project links:**
  
    * **Docker pull address:** monkeyknuckles/markdownlint-cli2
  
    * **Project Docker pull address:**  docker pull monkeyknuckles/markdownlint-cli2

    * **Project Docker landing page:**  <https://hub.docker.com/r/monkeyknuckles/markdownlint-cli2>
    * **Project clone address:**        <https://github.com/NinjaMonkeyGames/markdownlint-cli2-docker.git>
    * **Project landing page:**         <https://github.com/NinjaMonkeyGames/markdownlint-cli2-docker>
    * **Project wiki page:**            <https://github.com/NinjaMonkeyGames/markdownlint-cli2-docker/wiki>

  * **3rd Party links:**

    * **Alpine source pull address:**   docker pull alpine:3.20.0

    * **Alpine source landing page:**   <https://hub.docker.com/_/alpine>
    * **Markdownlint-cli2:**            <https://github.com/DavidAnson/markdownlint-cli2.git>
    * **Markdownlint:**                 <https://github.com/DavidAnson/markdownlint>
    * **NPM:**                          <https://www.npmjs.com/package/markdownlint-cli2>
    * **VSC Plugin:**                   <https://github.com/DavidAnson/vscode-markdownlint>

---

## Includes ##

  * Alpine Linux        v3.19.1
  * Node                v20.13.1
  * NPM                 v10.8.0
  * Markdownlint-cli2   v0.13.0 - Based on the CommonMark standard.
  * Markdownlint        v0.34.0

---

## Files ##

| File Or Folder Name:                  | Files | Description Of File Or Folder Contents                               |
|---------------------------------------|-------|----------------------------------------------------------------------|
| > markdown-fail                       |   49  | Contains examples of every possible markdown error.                  |
| .markdownlint.yml                     |   1   | Contains markdown rule configuration.                                |
| > .github > workflows > pipeline.yml  |   1   | Lints all markdown files in docker.                                  |
| dockerfile                            |   1   | Information on how to build docker.                                  |
| README.md                             |   1   | Contains information about the project.                              |
| LICENSE                               |   1   | Repository license agreement.                                        |

---

## Version History ##

This project uses a sequential versioning system.

| Version No:    | Description Of Update                                                                               |
|----------------|-----------------------------------------------------------------------------------------------------|
| 0.0.0.0        | Base files included.                                                                                |
| 0.0.0.1        | Updated license.                                                                                    |
| 0.0.0.2        | Update a while number of options in which to template the rest of the linters.                      |

---

## Contact Information ##

Author: Daniel Mallett (Monkey Knuckles)

![Ninja Monkey Games](logo.png "Logo")
![Monkey Knuckles](avatar.png "Avatar")

If you have any problems with the repository or have any suggestions please contact us at <info@ninjamonkeygames.com>.

You may also contact us via our [website](https://ninjamonkeygames.com).

Any bugs should be raised as an [issue](https://github.com/NinjaMonkeyGames/sandbox-bde2e5b8/issues) on GitHub.

---

## Copyright ##

*Ninja Monkey Games Copyright © 2024 All rights reserved.*
