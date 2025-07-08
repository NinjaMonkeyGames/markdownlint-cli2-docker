/*eslint no-empty-pattern: "error"*/

const {} = foo;
const [] = foo;
const {a: {}} = foo;
const {a: []} = foo;
function foo({}) {}
function bar([]) {}
function baz({a: {}}) {}
function qux({a: []}) {}