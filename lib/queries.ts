// Debug query to check if we can fetch any posts
export const debugQuery = `*[_type == "blog"]`;

// Main blog list query
export const blogListQuery = `*[_type == "blog"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage,
  "mainImageAlt": mainImage.alt,
  categories,
  tags
}`;

// Individual blog post query
export const blogPostQuery = `*[_type == "blog" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage,
  "mainImageAlt": mainImage.alt,
  body,
  categories,
  tags
}`; 