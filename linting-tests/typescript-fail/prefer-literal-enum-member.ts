const str = 'Test';
const string1 = 'string1';
const string2 = 'string2';

enum Invalid {
  A = str, // Variable assignment
  B = `Interpolates ${string1} and ${string2}`, // Template literal with interpolation
  C = 2 + 2, // Expression assignment
  D = C, // Assignment to another enum member
}