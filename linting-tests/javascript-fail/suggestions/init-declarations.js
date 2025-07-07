/*eslint init-declarations: ["error", "never"]*/

function foo() {
    var bar = 1;
    let baz = 2;

    for (let i = 0; i < 1; i++) {}
}