interface Foo {
    bar?: string;
    num?: number;
  }
  
  const foo: Foo = getFoo();
  const isEqualsBar = foo.bar! == 'hello';
  const isEqualsNum = 1 + foo.num! == 2;