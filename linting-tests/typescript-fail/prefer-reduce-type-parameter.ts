[1, 2, 3].reduce((arr, num) => arr.concat(num * 2), [] as number[]);

['a', 'b'].reduce(
  (accum, name) => ({
    ...accum,
    [name]: true,
  }),
  {} as Record<string, boolean>,
);