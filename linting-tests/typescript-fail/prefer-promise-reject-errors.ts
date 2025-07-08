Promise.reject('error');

const err = new Error();
Promise.reject('an ' + err);

new Promise((resolve, reject) => reject('error'));

new Promise((resolve, reject) => {
  const err = new Error();
  reject('an ' + err);
});