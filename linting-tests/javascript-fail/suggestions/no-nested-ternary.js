/*eslint no-nested-ternary: "error"*/

const thing = foo ? bar : baz === qux ? quxx : foobar;

foo ? baz === qux ? quxx() : foobar() : bar();