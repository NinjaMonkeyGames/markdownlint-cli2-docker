Promise.reject(new Error('I will reject!')).catch(err => {
    console.log(err);
  });
  
  Promise.reject(new Error('I will reject!')).catch((err: any) => {
    console.log(err);
  });
  
  Promise.reject(new Error('I will reject!')).catch((err: Error) => {
    console.log(err);
  });
  
  Promise.reject(new Error('I will reject!')).then(
    result => {
      console.log(result);
    },
    err => {
      console.log(err);
    },
  );