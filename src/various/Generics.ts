export const toArray = <T extends number | string>(input: T): T[] => {
  return [input];
};

export const findIndex = <T>(input: T, inputArray: T[]): number => {
  return inputArray.findIndex((item) => item === input);
};

export const createPair = <T, V>(first: T, second: V): [T, V] => {
  return [first, second];
};
