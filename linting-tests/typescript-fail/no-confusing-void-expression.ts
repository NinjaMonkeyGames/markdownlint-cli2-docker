// somebody forgot that `alert` doesn't return anything
const response = alert('Are you sure?');
console.log(alert('Are you sure?'));

// it's not obvious whether the chained promise will contain the response (fixable)
promise.then(value => window.postMessage(value));

// it looks like we are returning the result of `console.error` (fixable)
function doSomething() {
  if (!somethingToDo) {
    return console.error('Nothing to do!');
  }

  console.log('Doing a thing...');
}