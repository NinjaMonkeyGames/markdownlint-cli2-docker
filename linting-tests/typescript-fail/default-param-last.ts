function f(a = 0, b: number) {}
function f(a: number, b = 0, c: number) {}
function f(a: number, b?: number, c: number) {}
class Foo {
  constructor(
    public a = 10,
    private b: number,
  ) {}
}
class Foo {
  constructor(
    public a?: number,
    private b: number,
  ) {}
}