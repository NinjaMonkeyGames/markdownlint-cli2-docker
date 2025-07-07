function foo(): undefined {}
function bar(flag: boolean): undefined {
  if (flag) return foo();
  return;
}

async function baz(flag: boolean): Promise<undefined> {
  if (flag) return;
  return foo();
}