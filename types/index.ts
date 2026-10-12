export type Post = {
  slug: string;
  title: string;
  description: string;
  // ISO date, e.g. "2025-03-20"
  date: string;
  draft?: boolean;
  coverImage?: string;
};
