class MyClass {
    public log(): void {
      console.log(this);
    }
  }
  
  const instance = new MyClass();
  
  // This logs the global scope (`window`/`global`), not the class instance
  const myLog = instance.log;
  myLog();
  
  // This log might later be called with an incorrect scope
  const { log } = instance;
  
  // arith.double may refer to `this` internally
  const arith = {
    double(x: number): number {
      return x * 2;
    },
  };
  const { double } = arith;