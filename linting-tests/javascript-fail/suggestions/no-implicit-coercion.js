/*eslint no-implicit-coercion: "error"*/

const b = !!foo;
const b1 = ~foo.indexOf(".");
// bitwise not is incorrect only with `indexOf`/`lastIndexOf` method calling.