function array1(arg: string[]) {} // array is not readonly
function array2(arg: readonly string[][]) {} // array element is not readonly
function array3(arg: [string, number]) {} // tuple is not readonly
function array4(arg: readonly [string[], number]) {} // tuple element is not readonly
// the above examples work the same if you use ReadonlyArray<T> instead

function object1(arg: { prop: string }) {} // property is not readonly
function object2(arg: { readonly prop: string; prop2: string }) {} // not all properties are readonly
function object3(arg: { readonly prop: { prop2: string } }) {} // nested property is not readonly
// the above examples work the same if you use Readonly<T> instead

interface CustomArrayType extends ReadonlyArray<string> {
  prop: string; // note: this property is mutable
}
function custom1(arg: CustomArrayType) {}

interface CustomFunction {
  (): void;
  prop: string; // note: this property is mutable
}
function custom2(arg: CustomFunction) {}

function union(arg: string[] | ReadonlyArray<number[]>) {} // not all types are readonly

// rule also checks function types
interface Foo {
  (arg: string[]): void;
}
interface Foo {
  new (arg: string[]): void;
}
const x = { foo(arg: string[]): void {} };
function foo(arg: string[]);
type Foo = (arg: string[]) => void;
interface Foo {
  foo(arg: string[]): void;
}