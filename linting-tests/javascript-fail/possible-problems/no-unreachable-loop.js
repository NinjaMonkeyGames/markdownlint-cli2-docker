/*eslint no-unreachable-loop: "error"*/

while (foo) {
    doSomething(foo);
    foo = foo.parent;
    break;
}

function verifyList(head) {
    let item = head;
    do {
        if (verify(item)) {
            return true;
        } else {
            return false;
        }
    } while (item);
}

function findSomething(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (isSomething(arr[i])) {
            return arr[i];
        } else {
            throw new Error("Doesn't exist.");
        }
    }
}

for (key in obj) {
    if (key.startsWith("_")) {
        break;
    }
    firstKey = key;
    firstValue = obj[key];
    break;
}

for (foo of bar) {
    if (foo.id === id) {
        doSomething(foo);
    }
    break;
}