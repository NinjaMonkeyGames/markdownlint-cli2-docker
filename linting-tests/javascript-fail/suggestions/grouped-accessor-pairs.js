/*eslint grouped-accessor-pairs: "error"*/

const foo = {
    get a() {
        return this.val;
    },
    b: 1,
    set a(value) {
        this.val = value;
    }
};

const bar = {
    set b(value) {
        this.val = value;
    },
    a: 1,
    get b() {
        return this.val;
    }
}

class Foo {
    set a(value) {
        this.val = value;
    }
    b(){}
    get a() {
        return this.val;
    }
}

const Bar = class {
    static get a() {
        return this.val;
    }
    b(){}
    static set a(value) {
        this.val = value;
    }
}