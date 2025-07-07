class StaticConstants {
    static readonly version = 42;
  
    static isProduction() {
      return process.env.NODE_ENV === 'production';
    }
  }
  
  class HelloWorldLogger {
    constructor() {
      console.log('Hello, world!');
    }
  }
  
  abstract class Foo {}