setTimeout('alert(`Hi!`);', 100);

setInterval('alert(`Hi!`);', 100);

setImmediate('alert(`Hi!`)');

execScript('alert(`Hi!`)');

window.setTimeout('count = 5', 10);

window.setInterval('foo = bar', 10);

const fn = '() = {}';
setTimeout(fn, 100);

const fn = () => {
  return 'x = 10';
};
setTimeout(fn(), 100);

const fn = new Function('a', 'b', 'return a + b');