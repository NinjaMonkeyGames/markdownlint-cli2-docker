interface Example {
    property?: string;
  }
  
  declare const example: Example;
  const includesBaz = example.property!.includes('baz');