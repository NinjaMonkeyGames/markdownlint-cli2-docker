/*eslint no-inner-declarations: "error"*/

// script, non-strict code

if (test) {
    function doSomething() { }
}

function doSomethingElse() {
    if (test) {
        function doAnotherThing() { }
    }
}

if (foo) function f(){}