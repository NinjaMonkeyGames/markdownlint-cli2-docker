/* eslint no-useless-return: "error" */

const foo = function() { return; }

const bar = function() {
  doSomething();
  return;
}

const baz = function() {
  if (condition) {
    qux();
    return;
  } else {
    quux();
  }
}

const item = function() {
  switch (bar) {
    case 1:
      doSomething();
    default:
      doSomethingElse();
      return;
  }
}