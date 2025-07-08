/*eslint array-callback-return: "error"*/

const indexMap = myArray.reduce(function(memo, item, index) {
    memo[item] = index;
}, {});

const foo = Array.from(nodes, function(node) {
    if (node.tagName === "DIV") {
        return true;
    }
});

const bar = foo.filter(function(x) {
    if (x) {
        return true;
    } else {
        return;
    }
});