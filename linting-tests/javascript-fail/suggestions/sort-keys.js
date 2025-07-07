/*eslint sort-keys: "error"*/

const obj1 = {a: 1, c: 3, b: 2};
const obj2 = {a: 1, "c": 3, b: 2};

// Case-sensitive by default.
const obj3 = {a: 1, b: 2, C: 3};

// Non-natural order by default.
const obj4 = {1: a, 2: c, 10: b};

// This rule checks computed properties which have a simple name as well.
// Simple names are names which are expressed by an Identifier node or a Literal node.
const S = Symbol("s")
const obj5 = {a: 1, ["c"]: 3, b: 2};
const obj6 = {a: 1, [S]: 3, b: 2};