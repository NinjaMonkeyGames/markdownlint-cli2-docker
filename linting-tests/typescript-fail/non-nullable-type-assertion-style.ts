const maybe: string | undefined = Math.random() > 0.5 ? '' : undefined;

const definitely = maybe as string;
const alsoDefinitely = <string>maybe;