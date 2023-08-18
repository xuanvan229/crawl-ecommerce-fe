export const parseIntSafe = (input: string | number) => {
  const rs = parseInt(input as string, 10);
  if (isNaN(rs)) {
    return 0;
  } else {
    return rs;
  }
};
