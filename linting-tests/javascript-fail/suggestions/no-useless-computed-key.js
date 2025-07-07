/*eslint no-useless-computed-key: "error"*/

const a = { ['0']: 0 };
const b = { ['0+1,234']: 0 };
const c = { [0]: 0 };
const d = { ['x']: 0 };
const e = { ['x']() {} };

const { [0]: foo } = obj;
const { ['x']: bar } = obj;

class Foo {
    ["foo"] = "bar";

    [0]() {}
    ['a']() {}
    get ['b']() {}
    set ['c'](value) {}

    static ["foo"] = "bar";

    static ['a']() {}
}