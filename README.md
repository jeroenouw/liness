# liness - CLI to calculate amount of lines used in your current project

[![npmversion](https://img.shields.io/npm/v/liness.svg)](https://github.com/jeroenouw/liness)
[![npmlicense](https://img.shields.io/npm/l/liness.svg)](https://github.com/jeroenouw/liness/blob/master/LICENSE/)
[![downloads](https://img.shields.io/npm/dy/liness.svg)](https://github.com/jeroenouw/liness)

CLI to calculate amount of lines used in your current project. This project has 99+% type coverage checked by [tscov](https://github.com/jeroenouw/liftr-tscov).

## Checks
* Total lines
* Written lines
* Empty lines
* Total files
* Percentages

## Quickstart

Install the liness CLI as a global CLI.

```shell
npm install -g liness

cd <your-repo-location>

# Then you run
liness
```

Or just use via npx:

```shell
cd <your-repo-location>

# Then you run
npx liness
```

This should start the CLI and calculate all the lines

## Example

```shell
  _   _
 | | (_)  _ __     ___   ___   ___
 | | | | | '_ \   / _ \ / __| / __|
 | | | | | | | | |  __/ \__ \ \__ \
 |_| |_| |_| |_|  \___| |___/ |___/

CLI to calculate amount of lines used in your current project

158195 - total lines (100.00%)
152509 - written lines (96.41%)
5686 - empty lines (3.59%)

12598 - total files, checked in 10.3390s
```
