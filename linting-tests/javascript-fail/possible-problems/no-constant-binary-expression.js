/*eslint no-constant-binary-expression: "error"*/

const value1 = +x == null;

const value2 = condition ? x : {} || DEFAULT;

const value3 = !foo == null;

const value4 = new Boolean(foo) === true;

const objIsEmpty = someObj === {};

const arrIsEmpty = someArr === [];

const shortCircuit1 = condition1 && false && condition2;

const shortCircuit2 = condition1 || true || condition2;

const shortCircuit3 = condition1 ?? "non-nullish" ?? condition2;