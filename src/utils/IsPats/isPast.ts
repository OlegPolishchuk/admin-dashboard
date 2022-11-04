export const isPast = (date: string): boolean => {
  return +Date.parse(date) < Date.now();
};
