/*eslint no-label-var: "error"*/

var x = foo;
function bar() {
x:
  for (;;) {
    break x;
  }
}