// nullable numbers are considered unsafe by default
declare const num: number | undefined;
if (num) {
  console.log('num is defined');
}

// nullable strings are considered unsafe by default
declare const str: string | null;
if (!str) {
  console.log('str is empty');
}

// nullable booleans are considered unsafe by default
function foo(bool?: boolean) {
  if (bool) {
    bar();
  }
}

// `any`, unconstrained generics and unions of more than one primitive type are disallowed
const foo = <T>(arg: T) => (arg ? 1 : 0);

// always-truthy and always-falsy types are disallowed
let obj = {};
while (obj) {
  obj = getObj();
}

// assertion functions without an `is` are boolean contexts.
declare function assert(value: unknown): asserts value;
let maybeString = Math.random() > 0.5 ? '' : undefined;
assert(maybeString);

// array predicates' return types are boolean contexts.
['one', null].filter(x => x);