const arrowFunctionReturnsPromise = () => Promise.resolve('value');

function functionReturnsPromise() {
  return Promise.resolve('value');
}

function functionReturnsUnionWithPromiseImplicitly(p: boolean) {
  return p ? 'value' : Promise.resolve('value');
}