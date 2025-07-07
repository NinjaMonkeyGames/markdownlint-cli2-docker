class Mx {
    public static get myField1() {
      return 1;
    }
  
    private get ['myField2']() {
      return 'hello world';
    }
  }