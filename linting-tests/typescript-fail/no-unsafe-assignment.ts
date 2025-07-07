const x = 1 as any,
  y = 1 as any;
const [x] = 1 as any;
const [x] = [] as any[];
const [x] = [1 as any];
[x] = [1] as [any];

function foo(a = 1 as any) {}
class Foo {
  constructor(private a = 1 as any) {}
}
class Foo {
  private a = 1 as any;
}

// generic position examples
const x: Set<string> = new Set<any>();
const x: Map<string, string> = new Map<string, any>();
const x: Set<string[]> = new Set<any[]>();
const x: Set<Set<Set<string>>> = new Set<Set<Set<any>>>();