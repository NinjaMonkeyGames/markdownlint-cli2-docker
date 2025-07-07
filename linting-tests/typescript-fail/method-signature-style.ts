interface T1 {
    func(arg: string): number;
  }
  type T2 = {
    func(arg: boolean): void;
  };
  interface T3 {
    func(arg: number): void;
    func(arg: string): void;
    func(arg: boolean): void;
  }