declare const a: string | null;
declare const b: string | null;

const c = a || b;

declare let foo: { a: string } | null;
declare function makeFoo(): { a: string };

function lazyInitializeFooByTruthiness() {
  if (!foo) {
    foo = makeFoo();
  }
}

function lazyInitializeFooByNullCheck() {
  if (foo == null) {
    foo = makeFoo();
  }
}