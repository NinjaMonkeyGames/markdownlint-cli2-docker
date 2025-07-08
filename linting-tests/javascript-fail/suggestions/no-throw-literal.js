/*eslint no-throw-literal: "error"*/

throw "error";

throw 0;

throw undefined;

throw null;

const err = new Error();
throw "an " + err;
// err is recast to a string literal

const er2 = new Error();
throw `${err2}`
