/*eslint no-control-regex: "error"*/

const pattern1 = /\x00/;
const pattern2 = /\x0C/;
const pattern3 = /\x1F/;
const pattern4 = /\u000C/;
const pattern5 = /\u{C}/u;
const pattern6 = new RegExp("\x0C"); // raw U+000C character in the pattern
const pattern7 = new RegExp("\\x0C"); // \x0C pattern