function f() {
    return Math.random() < 0.5 ? 42 : 'oops';
  }
  
  const z = f() as number;
  
  const items = [1, '2', 3, '4'];
  
  const number = items[0] as number;