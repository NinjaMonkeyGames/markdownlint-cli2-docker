/*eslint no-unmodified-loop-condition: "error"*/

let node = something;

while (node) {
    doSomething(node);
}
node = other;

for (let j = 0; j < 5;) {
    doSomething(j);
}

while (node !== root) {
    doSomething(node);
}