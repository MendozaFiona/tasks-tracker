export const truncateString = (str: string, length = 40): string => {
  if (!str) return "";

  if (str.length <= length) return str;

  const truncatedString = str.slice(0, length);

  return `${truncatedString}...`;
};
