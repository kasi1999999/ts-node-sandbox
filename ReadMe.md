# Mocha tests - does not work
``` shell
$ npm test

> test
> mocha


ReferenceError: exports is not defined in ES module scope
    at file:///home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/test/hello.spec.ts:2:23
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)

```
# Running ts-node - works
## consoleTsNodeEsm
``` shell
$ npm run consoleTsNodeEsm

> consoleTsNodeEsm
> npx ts-node-esm -e 'const a = () => console.log("Hello, world!"); a();'

Hello, world!

```
## consoleTsNodeEsmExport
``` shell
$ npm run consoleTsNodeEsmExport

> consoleTsNodeEsmExport
> npx ts-node-esm -e 'const a = () => console.log("Hello, world!"); a(); export {a}'

Hello, world!
```
## consoleTsNode
``` shell
$ npm run consoleTsNode

> consoleTsNode
> npx ts-node -e 'const a = () => console.log("Hello, world!"); a(); export {a}'

Hello, world!
```
## Running ts-node in REPL mode
```shell
$ npx ts-node
> import * as chai from "chai"
undefined
> chai
{
  version: '4.3.3',
  AssertionError: [Function: AssertionError],
  use: [Function (anonymous)],
  util: {
...
    empty: [Function (anonymous)],
    notEmpty: [Function (anonymous)]
  }
}
>
```