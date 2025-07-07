/*eslint no-loop-func: "error"*/

var i = 0;
while(i < 5) {
    var a = function() { return i; };
    a();

    i++;
}

var i = 0;
do {
    function a() { return i; };
    a();

    i++
} while (i < 5);

let foo = 0;
for (let i = 0; i < 10; ++i) {
    //Bad, `foo` is not in the loop-block's scope and `foo` is modified in/after the loop
    setTimeout(() => console.log(foo));
    foo += 1;
}

for (let i = 0; i < 10; ++i) {
    //Bad, `foo` is not in the loop-block's scope and `foo` is modified in/after the loop
    setTimeout(() => console.log(foo));
}
foo = 100;

var arr = [];

for (var i = 0; i < 5; i++) {
    arr.push((f => f)(() => i));
}

for (var i = 0; i < 5; i++) {
    arr.push((() => {
        return () => i;
    })());
}

for (var i = 0; i < 5; i++) {
    (function fun () {
        if (arr.includes(fun)) return i;
        else arr.push(fun);
    })();
}