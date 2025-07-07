/*eslint prefer-rest-params: "error"*/

function foo() {
    console.log(arguments);
}

function foo(action) {
    const args = Array.prototype.slice.call(arguments, 1);
    action.apply(null, args);
}

function foo(action) {
    const args = [].slice.call(arguments, 1);
    action.apply(null, args);
}