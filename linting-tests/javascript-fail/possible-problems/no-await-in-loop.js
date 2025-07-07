/*eslint no-await-in-loop: "error"*/

async function foo(things) {
    const results = [];
    for (const thing of things) {
      // Bad: each loop iteration is delayed until the entire asynchronous operation completes
      results.push(await doAsyncWork(thing));
    }
    return results;
  }