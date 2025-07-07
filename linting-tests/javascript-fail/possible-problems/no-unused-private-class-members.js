/*eslint no-unused-private-class-members: "error"*/

class A {
    #unusedMember = 5;
}

class B {
    #usedOnlyInWrite = 5;
    method() {
        this.#usedOnlyInWrite = 42;
    }
}

class C {
    #usedOnlyToUpdateItself = 5;
    method() {
        this.#usedOnlyToUpdateItself++;
    }
}

class D {
    #unusedMethod() {}
}

class E {
    get #unusedAccessor() {}
    set #unusedAccessor(value) {}
}