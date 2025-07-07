interface Foo {
    B: string; // -> field
  
    new (); // -> constructor
  
    A(): void; // -> method
  
    [Z: string]: any; // -> signature
  }