const str: string;
const array: any[];
const readonlyArray: ReadonlyArray<any>;
const typedArray: UInt8Array;
const maybe: string;
const userDefined: {
  indexOf(x: any): number;
  includes(x: any): boolean;
};

str.indexOf(value) !== -1;
array.indexOf(value) !== -1;
readonlyArray.indexOf(value) === -1;
typedArray.indexOf(value) > -1;
maybe?.indexOf('') !== -1;
userDefined.indexOf(value) >= 0;

/example/.test(str);