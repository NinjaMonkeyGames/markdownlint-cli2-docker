/*eslint id-denylist: ["error", "data", "callback"] */

const data = { ...values };

function callback() {
    // ...
}

element.callback = function() {
    // ...
};

const itemSet = {
    data: [...values]
};

class Foo {
    data = [];
}

class Bar {
    #data = [];
}

class Baz {
    callback() {}
}

class Qux {
    #callback() {}
}