/*eslint for-direction: "error"*/
for (let i = 0; i < 10; i--) {
}

for (let i = 10; i >= 0; i++) {
}

for (let i = 0; i > 10; i++) {
}

for (let i = 0; 10 > i; i--) {
}

const n = -2;
for (let i = 0; i < 10; i += n) {
}