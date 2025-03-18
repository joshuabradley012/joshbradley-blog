# Interactive Blog with React Components

This is a blog built with Next.js 15 and Tailwind CSS v4 that uses pure React components for blog posts. This approach allows for creating highly interactive and dynamic blog content.

## Features

- Next.js 15 app router
- Tailwind CSS v4 for styling
- Interactive React components as blog posts
- Dynamic routing for blog posts
- Responsive design

## Getting Started

First, install the dependencies:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding New Blog Posts

To add a new blog post:

1. Create a new React component in the `components/posts/` directory
2. Add the post metadata to the `getAllPosts` function in `lib/posts.ts`
3. The post will automatically appear on the homepage and be accessible via its slug
