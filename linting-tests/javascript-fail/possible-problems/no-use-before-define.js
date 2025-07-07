/*eslint no-use-before-define: "error"*/

alert(a);
var a = 10;

f();
function f() {}

function g() {
    return b;
}
var b = 1;

{
    alert(c);
    let c = 1;
}

{
    class C extends C {}
}

{
    class C {
        static x = "foo";
        [C.x]() {}
    }
}

{
    const C = class {
        static x = C;
    }
}

{
    const C = class {
        static {
            C.x = "foo";
        }
    }
}

export { foo };
const foo = 1;