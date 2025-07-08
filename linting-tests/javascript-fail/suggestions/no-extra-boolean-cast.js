/*eslint no-extra-boolean-cast: "error"*/

const foo = !!!bar;

const foo1 = !!bar ? baz : bat;

const foo2 = Boolean(!!bar);

const foo3 = new Boolean(!!bar);

if (!!foo) {
    // ...
}

if (Boolean(foo)) {
    // ...
}

while (!!foo) {
    // ...
}

do {
    // ...
} while (Boolean(foo));

for (; !!foo; ) {
    // ...
}