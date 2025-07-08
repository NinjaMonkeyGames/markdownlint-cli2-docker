/*eslint accessor-pairs: "error"*/

const q = {
    set a(value) {
        this.val = value;
    }
};


const r = {d: 1};
Object.defineProperty(r, 'c', {
    set: function(value) {
        this.val = value;
    }
});