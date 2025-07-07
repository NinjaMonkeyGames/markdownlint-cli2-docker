/*eslint no-undefined: "error"*/

const foo = undefined;

const undefined = "foo";

if (foo === undefined) {
    // ...
}

function baz(undefined) {
    // ...
}

bar(undefined, "lorem");