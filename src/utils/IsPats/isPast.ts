export const isPast = (date: string): boolean => {
  console.log(Date.parse(`${new Date()}`));

  return +Date.parse(date) < Date.now();
};
