/*eslint id-match: ["error", "^[a-z]+([A-Z][a-z]+)*$"]*/

const my_favorite_color = "#112C85";
const _myFavoriteColor  = "#112C85";
const myFavoriteColor_  = "#112C85";
const MY_FAVORITE_COLOR = "#112C85";
function do_something() {
    // ...
}

class My_Class {}

class myClass {
    do_something() {}
}

class anotherClass {
    #do_something() {}
}