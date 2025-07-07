/* eslint no-useless-assignment: "error" */

function fn1() {
    let v = 'used';
    doSomething(v);
    v = 'unused';
}

function fn2() {
    let v = 'used';
    if (condition) {
        v = 'unused';
        return
    }
    doSomething(v);
}

function fn3() {
    let v = 'used';
    if (condition) {
        doSomething(v);
    } else {
        v = 'unused';
    }
}

function fn4() {
    let v = 'unused';
    if (condition) {
        v = 'used';
        doSomething(v);
        return
    }
}

function fn5() {
    let v = 'used';
    if (condition) {
        let v = 'used';
        console.log(v);
        v = 'unused';
    }
    console.log(v);
}