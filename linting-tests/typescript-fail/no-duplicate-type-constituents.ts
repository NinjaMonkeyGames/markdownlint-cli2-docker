type T1 = 'A' | 'A';

type T2 = string | string | number;

type T3 = { a: string } & { a: string };

type T4 = [1, 2, 3] | [1, 2, 3];

type StringA = string;
type StringB = string;
type T5 = StringA | StringB;

const fn = (a?: string | undefined) => {};