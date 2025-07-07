/*eslint no-dupe-args: "error"*/

function foo(a, b, a) {
    console.log("value of the second a:", a);
}

const bar = function (a, b, a) {
    console.log("value of the second a:", a);
};