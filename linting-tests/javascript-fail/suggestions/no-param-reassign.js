/*eslint no-param-reassign: "error"*/

const foo = function(bar) {
    bar = 13;
}

const foo1 = function(bar) {
    bar++;
}

const foo2 = function(bar) {
    for (bar in baz) {}
}

const foo3 = function(bar) {
    for (bar of baz) {}
}