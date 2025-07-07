type T1 = B | A;

type T2 = { b: string } & { a: string };

type T3 = [1, 2, 4] & [1, 2, 3];

type T4 =
  | [1, 2, 4]
  | [1, 2, 3]
  | { b: string }
  | { a: string }
  | (() => void)
  | (() => string)
  | 'b'
  | 'a'
  | 'b'
  | 'a'
  | readonly string[]
  | readonly number[]
  | string[]
  | number[]
  | B
  | A
  | string
  | any;