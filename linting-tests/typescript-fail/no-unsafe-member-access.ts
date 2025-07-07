declare const anyVar: any;
declare const nestedAny: { prop: any };

anyVar.a;
anyVar.a.b;
anyVar['a'];
anyVar['a']['b'];

nestedAny.prop.a;
nestedAny.prop['a'];

const key = 'a';
nestedAny.prop[key];

// Using an any to access a member is unsafe
const arr = [1, 2, 3];
arr[anyVar];
nestedAny[anyVar];