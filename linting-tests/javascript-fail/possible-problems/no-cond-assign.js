/*eslint no-cond-assign: "error"*/

// Unintentional assignment
let x;
if (x = 0) {
    const b = 1;
}

// Practical example that is similar to an error
const setHeight = function (someNode) {
    do {
        someNode.height = "100px";
    } while (someNode = someNode.parentNode);
}