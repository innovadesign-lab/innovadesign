export interface BlogPostImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface BlogPost {
  slug: string;
  locale: string;
  category: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  image?: BlogPostImage;
  images?: BlogPostImage[];
  readingMinutes: number;
  contentHtml: string;
}

export type PostMeta = Omit<BlogPost, "contentHtml">;
