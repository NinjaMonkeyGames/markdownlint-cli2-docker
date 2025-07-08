/* eslint require-atomic-updates: error */

let result;

async function foo() {
    result += await something;
}

async function bar() {
    result = result + await something;
}

async function baz() {
    result = result + doSomething(await somethingElse);
}

async function qux() {
    if (!result) {
        result = await initialize();
    }
}

function* generator() {
    result += yield;
}