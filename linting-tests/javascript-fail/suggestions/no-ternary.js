/*eslint no-ternary: "error"*/

const foo = isBar ? baz : qux;

function quux() {
  return foo ? bar() : baz();
}