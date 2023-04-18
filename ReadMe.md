# Mocha tests works fine
``` shell
$ npm test

> test
> mocha



  Library/function/class
    ✔ should call console.log
    ✔ should return output


  2 passing (5ms)
```
# Running ts-node
## consoleTsNodeEsm
``` shell
$ npm run consoleTsNodeEsm

> consoleTsNodeEsm
> npx ts-node-esm -e 'const a = () => console.log("Hello, world!"); a();'

/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/[eval].ts:3
export {};
^^^^^^

SyntaxError: Unexpected token 'export'
    at new Script (node:vm:100:7)
    at runInContext (/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/node_modules/ts-node/src/repl.ts:670:18)
    at Object.execCommand (/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/node_modules/ts-node/src/repl.ts:639:28)
    at /home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/node_modules/ts-node/src/repl.ts:661:47
    at Array.reduce (<anonymous>)
    at appendCompileAndEvalInput (/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/node_modules/ts-node/src/repl.ts:661:23)
    at Object.evalCode (/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/node_modules/ts-node/src/repl.ts:205:20)
    at evalAndExitOnTsError (/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/node_modules/ts-node/src/bin.ts:780:26)
    at phase4 (/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/node_modules/ts-node/src/bin.ts:656:7)
    at bootstrap (/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/node_modules/ts-node/src/bin.ts:95:10)
```
## consoleTsNodeEsmExport
``` shell
$ npm run consoleTsNodeEsmExport

> consoleTsNodeEsmExport
> npx ts-node-esm -e 'const a = () => console.log("Hello, world!"); a(); export {a}'

/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/[eval].ts:3
export { a };
^^^^^^

SyntaxError: Unexpected token 'export'
    at new Script (node:vm:100:7)
    at runInContext (/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/node_modules/ts-node/src/repl.ts:670:18)
    at Object.execCommand (/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/node_modules/ts-node/src/repl.ts:639:28)
    at /home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/node_modules/ts-node/src/repl.ts:661:47
    at Array.reduce (<anonymous>)
    at appendCompileAndEvalInput (/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/node_modules/ts-node/src/repl.ts:661:23)
    at Object.evalCode (/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/node_modules/ts-node/src/repl.ts:205:20)
    at evalAndExitOnTsError (/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/node_modules/ts-node/src/bin.ts:780:26)
    at phase4 (/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/node_modules/ts-node/src/bin.ts:656:7)
    at bootstrap (/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/node_modules/ts-node/src/bin.ts:95:10)
```
## consoleTsNode
``` shell
$ npm run consoleTsNode

> consoleTsNode
> npx ts-node -e 'const a = () => console.log("Hello, world!"); a(); export {a}'

/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/[eval].ts:3
export { a };
^^^^^^

SyntaxError: Unexpected token 'export'
    at new Script (node:vm:100:7)
    at runInContext (/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/node_modules/ts-node/src/repl.ts:670:18)
    at Object.execCommand (/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/node_modules/ts-node/src/repl.ts:639:28)
    at /home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/node_modules/ts-node/src/repl.ts:661:47
    at Array.reduce (<anonymous>)
    at appendCompileAndEvalInput (/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/node_modules/ts-node/src/repl.ts:661:23)
    at Object.evalCode (/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/node_modules/ts-node/src/repl.ts:205:20)
    at evalAndExitOnTsError (/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/node_modules/ts-node/src/bin.ts:780:26)
    at phase4 (/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/node_modules/ts-node/src/bin.ts:656:7)
    at bootstrap (/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/node_modules/ts-node/src/bin.ts:95:10)
```
## Running ts-node in REPL mode
```shell
$ npx ts-node
> 
/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/<repl>.ts:2
export {};
^^^^^^

Uncaught SyntaxError: Unexpected token 'export'
> import * as chai from "chai"
undefined
> chai
/home/stevo/workspace/tirn_tech/sandbox/ts-node-sample/<repl>.ts:1
import * as chai from "chai";
^^^^^^

Uncaught:
SyntaxError: Cannot use import statement inside the Node.js REPL, alternatively use dynamic import
```