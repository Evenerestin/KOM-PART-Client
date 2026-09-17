export const pluralize = (count, [one, few, many]) => {
  if (count === 1) return one;
  const lastTwo = count % 100;
  const last = count % 10;
  if (last >= 2 && last <= 4 && !(lastTwo >= 11 && lastTwo <= 14)) return few;
  return many;
};
