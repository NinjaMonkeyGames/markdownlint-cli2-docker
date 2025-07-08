enum Fruit {
    Apple,
  }
  
  declare let fruit: Fruit;
  
  // bad - comparison between enum and explicit value instead of named enum member
  fruit === 0;
  
  enum Vegetable {
    Asparagus = 'asparagus',
  }
  
  declare let vegetable: Vegetable;
  
  // bad - comparison between enum and explicit value instead of named enum member
  vegetable === 'asparagus';
  
  declare let anyString: string;
  
  // bad - comparison between enum and non-enum value
  anyString === Vegetable.Asparagus;