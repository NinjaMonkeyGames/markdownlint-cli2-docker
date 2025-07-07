// Static values can be incorporated into the surrounding template.

const ab1 = `${'a'}${'b'}`;
const ab2 = `a${'b'}`;
type AB1 = `${'A'}${'B'}`;
type AB2 = `A${'B'}`;

const stringWithNumber = `${'1 + 1 = '}${2}`;

const stringWithBoolean = `${'true is '}${true}`;

// Some simple expressions that are already strings
// can be rewritten without a template at all.

const text = 'a';
const wrappedText = `${text}`;
type Text = 'A';
type WrappedText = `${Text}`;

declare const intersectionWithString: string & { _brand: 'test-brand' };
const wrappedIntersection = `${intersectionWithString}`;
type IntersectionWithString = string & { _brand: 'test-brand' };
type WrappedIntersection = `${IntersectionWithString}`;