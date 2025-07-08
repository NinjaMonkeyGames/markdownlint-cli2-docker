throw 'error';

throw 0;

throw undefined;

throw null;

const err = new Error();
throw 'an ' + err;

const err = new Error();
throw `${err}`;

const err = '';
throw err;

function getError() {
  return '';
}
throw getError();

const foo = {
  bar: '',
};
throw foo.bar;