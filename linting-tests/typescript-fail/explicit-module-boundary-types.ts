// Should indicate that no value is returned (void)
export function test() {
    return;
  }
  
  // Should indicate that a string is returned
  export var arrowFn = () => 'test';
  
  // All arguments should be typed
  export var arrowFn = (arg): string => `test ${arg}`;
  export var arrowFn = (arg: any): string => `test ${arg}`;
  
  export class Test {
    // Should indicate that no value is returned (void)
    method() {
      return;
    }
  }