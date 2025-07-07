function second<A, B>(a: A, b: B): B {
    return b;
  }
  
  function parseJSON<T>(input: string): T {
    return JSON.parse(input);
  }
  
  function printProperty<T, K extends keyof T>(obj: T, key: K) {
    console.log(obj[key]);
  }