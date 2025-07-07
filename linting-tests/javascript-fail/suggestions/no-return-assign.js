/*eslint no-return-assign: "error"*/

function doSomething() {
    return foo = bar + 2;
}

function doSomethingElse() {
    return foo += 2;
}

const foo = (a, b) => a = b

const bar = (a, b, c) => (a = b, c == b)

function doSomethingMore() {
    return foo = bar && foo > 0;
}