[![Node.js Package](https://github.com/ZitronenbonbonX/read-json-value/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/ZitronenbonbonX/read-json-value/actions/workflows/npm-publish.yml)

# READ JSON VALUE

This is a simple Node.js module to read a JSON value from a file. I created this module because I needed to read a JSON value from a file from the CLI. I couldn't find a module that did this, so I created one.
This module has no dependencies, and is very small.

## Installation

```bash
npm i -g read-json-value
```

## Usage

```bash
read-json-value <file> <jsonpath>
```

### Arguments

#### file

The path to the JSON file.

#### jsonpath

The JSON path to the value you want to read. This could be a simple key, or a path to a nested value (e.g. `scripts.test` or `dependencies.react` in a `package.json` file)

## Example

```bash
read-json-value package.json version
```
