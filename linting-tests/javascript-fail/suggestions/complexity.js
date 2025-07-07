/*eslint complexity: ["error", 2]*/

function a(x) {
    if (true) {
        return x;
    } else if (false) {
        return x+1;
    } else {
        return 4; // 3rd path
    }
}

function b() {
    foo ||= 1;
    bar &&= 1;
}

function c(a = {}) { // default parameter -> 2nd path
    const { b = 'default' } = a; // default value during destructuring -> 3rd path
}

function d(a) {
    return a?.b?.c; // optional chaining with two optional properties creates two additional branches
}