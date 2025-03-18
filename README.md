# Interactive Blog with React Components

This is a blog built with Next.js 15 and Tailwind CSS v4 that uses pure React components for blog posts. This approach allows for creating highly interactive and dynamic blog content.

## Features

- Next.js 15 app router
- Tailwind CSS v4 for styling
- Interactive React components as blog posts
- Dynamic routing for blog posts
- Responsive design

## Blog Posts

The blog includes two example posts:

1. **Interactive Chart Demo** - Demonstrates interactive charts built with Recharts
2. **AI Tools Overview** - An interactive overview of AI tools with filtering capabilities

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
components/
  posts/          # All blog post components live here
    PostOne.tsx
    PostTwo.tsx
  ui/
    BlogCard.tsx

lib/
  posts.ts        # Blog post registry and utilities

app/
  layout.tsx      # Root layout with Tailwind setup
  page.tsx        # Homepage that lists all blog posts
  blog/
    [slug]/
      page.tsx    # Dynamic route for each blog post
```

## Adding New Blog Posts

To add a new blog post:

1. Create a new React component in the `components/posts/` directory
2. Add the post metadata to the `getAllPosts` function in `lib/posts.ts`
3. The post will automatically appear on the homepage and be accessible via its slug

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs)
- [Recharts Documentation](https://recharts.org/en-US/)
