/*eslint require-await: "error"*/

async function foo() {
    doSomething();
}

bar(async () => {
    doSomething();
});