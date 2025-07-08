function foo1() {
    return 1 as any;
  }
  function foo2() {
    return Object.create(null);
  }
  const foo3 = () => {
    return 1 as any;
  };
  const foo4 = () => Object.create(null);
  
  function foo5() {
    return [] as any[];
  }
  function foo6() {
    return [] as Array<any>;
  }
  function foo7() {
    return [] as readonly any[];
  }
  function foo8() {
    return [] as Readonly<any[]>;
  }
  const foo9 = () => {
    return [] as any[];
  };
  const foo10 = () => [] as any[];
  
  const foo11 = (): string[] => [1, 2, 3] as any[];
  
  async function foo13() {
    return Promise.resolve({} as any);
  }
  
  // generic position examples
  function assignability1(): Set<string> {
    return new Set<any>([1]);
  }
  type TAssign = () => Set<string>;
  const assignability2: TAssign = () => new Set<any>([true]);