export const truncate = (text: string, maxLength = 24) => {
  if (text.length <= maxLength) {
    return text;
  }

  return text.slice(0, maxLength) + '...';
};

export const formatSlug = (str: string) => {
  return str
    .replace(/-/g, ' ')
    .toLowerCase()
    .replace(/(^|\s)\S/g, (l) => l.toUpperCase());
};
