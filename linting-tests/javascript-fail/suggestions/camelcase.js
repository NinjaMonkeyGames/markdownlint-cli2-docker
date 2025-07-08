/*eslint camelcase: "error"*/

import { no_camelcased } from "external-module"

const my_favorite_color = "#112C85";

function do_something() {
    // ...
}

obj.do_something = function() {
    // ...
};

function foo({ no_camelcased }) {
    // ...
};

function bar({ isCamelcased: no_camelcased }) {
    // ...
}

function baz({ no_camelcased = 'default value' }) {
    // ...
};

const obj = {
    my_pref: 1
};

const { category_id = 1 } = query;

const { foo: snake_cased } = bar;

const { foo: bar_baz = 1 } = quz;