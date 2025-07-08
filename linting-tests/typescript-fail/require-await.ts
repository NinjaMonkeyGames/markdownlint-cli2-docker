async function returnNumber() {
    return 1;
  }
  
  async function* asyncGenerator() {
    yield 1;
  }
  
  const num = returnNumber();
  const callAsyncGenerator = () => asyncGenerator();