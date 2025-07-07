class Foo {
    f1(): Foo {
      return this;
    }
    f2 = (): Foo => {
      return this;
    };
    f3(): Foo | undefined {
      return Math.random() > 0.5 ? this : undefined;
    }
  }