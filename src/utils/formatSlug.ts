export const formatSlug = (slug: string) => {
  return slug.replace(/-/g, ' & ').replace(/\b\w/g, (c) => c.toUpperCase());
};
