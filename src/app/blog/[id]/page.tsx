"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { useParams } from "next/navigation";

const articlesData: Record<string, any> = {
  "1": {
    title: "Getting Started with Next.js 16",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Web Development",
    image: "📚",
    excerpt:
      "Learn the fundamentals of Next.js 16 and how to build modern web applications with server components and streaming.",
    content: `Next.js 16 brings powerful new features that make building modern web applications faster and more efficient. In this guide, we'll explore the key features and best practices.

## What's New in Next.js 16

Next.js 16 introduces several game-changing features:

### Server Components by Default
Server Components are now the default in Next.js 16, allowing you to write components that run only on the server. This reduces the amount of JavaScript sent to the browser and improves performance.

### Streaming Support
With built-in streaming support, you can start rendering your page before all the data is ready. This provides a better user experience with faster perceived performance.

### Improved Performance
The new version includes automatic code splitting, optimized image loading, and better tree-shaking to reduce bundle size.

## Getting Started

To create a new Next.js 16 project:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Key Concepts

### API Routes
Next.js makes it easy to build API endpoints using the file-based routing system.

### File-based Routing
Any file inside the pages directory automatically becomes a route.

### Dynamic Routes
Create dynamic routes using brackets in the filename.

## Best Practices

1. Use Server Components for data fetching
2. Keep Client Components small and focused
3. Optimize images with the Image component
4. Use dynamic imports for code splitting
5. Implement proper error handling

## Conclusion

Next.js 16 is packed with features to help you build faster, more scalable applications. Start exploring today!`,
    tags: ["Next.js", "React", "Web Development", "Tutorial"],
  },
  "2": {
    title: "Mastering Framer Motion Animations",
    date: "March 10, 2024",
    readTime: "12 min read",
    category: "Animation",
    image: "✨",
    excerpt:
      "Deep dive into creating smooth, performant animations using Framer Motion in your React applications.",
    content: `Framer Motion is a powerful animation library for React that makes it easy to create smooth, professional animations. Let's explore how to master it.

## Introduction to Framer Motion

Framer Motion is built on top of three core concepts:

### 1. Motion Components
Motion components are React components that can be animated. They wrap standard HTML elements with animation capabilities.

### 2. Variants
Variants are sets of pre-defined target objects that can be switched between. They help you organize animation states.

### 3. Gesture Animations
Create interactive animations that respond to user interactions like hover, tap, and drag.

## Core Animations

### Basic Animations
\`\`\`jsx
import { motion } from 'framer-motion';

export default function Box() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2 }}
    />
  );
}
\`\`\`

### Gesture Animations
Respond to hover and tap events with ease:
- whileHover: Animate while hovering
- whileTap: Animate while tapped
- whileDrag: Animate while dragging

## Advanced Techniques

### Variants for Complex Animations
Use variants to manage multiple animation states:

\`\`\`jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
\`\`\`

### Scroll Animations
Trigger animations when elements come into view using whileInView.

## Performance Tips

1. Use transform and opacity for better performance
2. Avoid animating properties like width and height
3. Use GPU acceleration with backfaceVisibility
4. Optimize with motion.div for production

## Conclusion

Mastering Framer Motion will take your React applications to the next level with smooth, professional animations that delight users.`,
    tags: ["Framer Motion", "Animation", "React", "Performance"],
  },
  "3": {
    title: "Building Scalable Node.js Backends",
    date: "March 5, 2024",
    readTime: "10 min read",
    category: "Backend",
    image: "⚙️",
    excerpt:
      "Best practices and patterns for building scalable backend services with Node.js and Express.",
    content: `Building scalable Node.js backends requires careful architecture and best practices. Let's explore how to create production-ready backend systems.

## Architecture Principles

### Separation of Concerns
Keep your code organized by separating business logic, routes, and database queries.

### Error Handling
Implement comprehensive error handling throughout your application.

### Logging
Use proper logging to monitor and debug your application in production.

## Project Structure

\`\`\`
src/
├── routes/
├── controllers/
├── models/
├── middleware/
├── utils/
└── index.js
\`\`\`

## Best Practices

1. Use environment variables for configuration
2. Implement rate limiting to prevent abuse
3. Use middleware for cross-cutting concerns
4. Cache frequently accessed data
5. Implement proper authentication and authorization

## Database Design

### Connection Pooling
Use connection pooling to manage database connections efficiently.

### Query Optimization
Write efficient queries and use indexes appropriately.

### Data Relationships
Design relationships carefully to optimize data retrieval.

## Security Considerations

1. Validate and sanitize all inputs
2. Use HTTPS for all communications
3. Implement CORS properly
4. Hash passwords securely
5. Use JWT for authentication

## Conclusion

By following these principles and best practices, you can build scalable, secure, and maintainable Node.js backends.`,
    tags: ["Node.js", "Backend", "Architecture", "Best Practices"],
  },
  "4": {
    title: "TypeScript Best Practices",
    date: "February 28, 2024",
    readTime: "9 min read",
    category: "TypeScript",
    image: "📘",
    excerpt:
      "Explore advanced TypeScript patterns and techniques to write more maintainable and type-safe code.",
    content: `TypeScript is a powerful language that adds type safety to JavaScript. Let's explore best practices for writing maintainable TypeScript code.

## Type Definitions

### Basic Types
\`\`\`typescript
const name: string = "John";
const age: number = 30;
const active: boolean = true;
\`\`\`

### Complex Types
Use interfaces and types for complex data structures:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}
\`\`\`

## Advanced Patterns

### Generics
Write flexible, reusable functions:

\`\`\`typescript
function getValue<T>(obj: T, key: keyof T): T[key] {
  return obj[key];
}
\`\`\`

### Utility Types
Use built-in utility types to create new types:
- Partial<T>
- Required<T>
- Readonly<T>
- Pick<T, K>
- Omit<T, K>

## Best Practices

1. Avoid 'any' type - be specific with types
2. Use strict mode in tsconfig.json
3. Create reusable interfaces and types
4. Leverage discriminated unions for type safety
5. Use enums for fixed sets of values

## Testing with TypeScript

TypeScript makes testing easier by catching errors at compile time. Combined with Jest or other testing frameworks, you get robust test coverage.

## Conclusion

By embracing TypeScript and following these best practices, you'll write more maintainable, scalable code with fewer runtime errors.`,
    tags: ["TypeScript", "Best Practices", "Type Safety", "Advanced"],
  },
  "5": {
    title: "Responsive Design with Tailwind CSS",
    date: "February 20, 2024",
    readTime: "7 min read",
    category: "CSS",
    image: "🎨",
    excerpt:
      "Master responsive design techniques using Tailwind CSS utility classes for all screen sizes.",
    content: `Tailwind CSS makes responsive design intuitive and efficient. Let's explore how to build responsive layouts that look great on any device.

## Breakpoints in Tailwind

Tailwind provides responsive breakpoints for different screen sizes:

- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## Mobile-First Approach

Tailwind uses a mobile-first approach, so you start with styles for mobile and add responsive prefixes for larger screens:

\`\`\`jsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text size
</div>
\`\`\`

## Responsive Layouts

### Flexbox Layouts
\`\`\`jsx
<div className="flex flex-col md:flex-row gap-4">
  <div className="flex-1">Column 1</div>
  <div className="flex-1">Column 2</div>
</div>
\`\`\`

### Grid Layouts
\`\`\`jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Grid items */}
</div>
\`\`\`

## Typography

Responsive typography ensures readable text on all devices:

\`\`\`jsx
<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
  Heading
</h1>
\`\`\`

## Best Practices

1. Always start with mobile styles
2. Use Tailwind's breakpoint system consistently
3. Consider performance with responsive utilities
4. Test on real devices, not just browser DevTools
5. Use custom breakpoints when needed

## Conclusion

With Tailwind CSS and responsive design techniques, creating beautiful layouts that work on all devices is easier than ever.`,
    tags: ["Tailwind CSS", "Responsive Design", "CSS", "Mobile"],
  },
  "6": {
    title: "Database Optimization Tips",
    date: "February 15, 2024",
    readTime: "11 min read",
    category: "Database",
    image: "🗄️",
    excerpt:
      "Learn how to optimize database queries and indexes for better application performance.",
    content: `Database performance is crucial for application speed. Let's explore optimization techniques to make your database queries faster.

## Understanding Query Performance

### EXPLAIN Plans
Use EXPLAIN to understand how your database executes queries:

\`\`\`sql
EXPLAIN SELECT * FROM users WHERE email = 'john@example.com';
\`\`\`

### Slow Queries
Monitor and optimize queries that take too long.

## Indexing Strategies

### Single Column Indexes
\`\`\`sql
CREATE INDEX idx_email ON users(email);
\`\`\`

### Composite Indexes
\`\`\`sql
CREATE INDEX idx_user_email ON users(company_id, email);
\`\`\`

## Query Optimization

### N+1 Problem
Avoid fetching related data in loops:

\`\`\`sql
SELECT * FROM users;
users.forEach(user => {
  // DON'T: SELECT * FROM posts WHERE user_id = user.id;
});

// DO: JOIN the tables
SELECT u.*, p.* FROM users u
LEFT JOIN posts p ON u.id = p.user_id;
\`\`\`

### Query Caching
Cache frequently accessed data to reduce database load.

## Connection Pooling

Use connection pooling to reuse database connections:

\`\`\`javascript
const pool = new Pool({
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
\`\`\`

## Conclusion

Optimizing your database queries and implementing proper indexing strategies will significantly improve your application's performance and scalability.`,
    tags: ["Database", "Optimization", "Performance", "SQL"],
  },
};

export default function BlogArticle() {
  const params = useParams();
  const articleId = params.id as string;
  const article = articlesData[articleId];

  if (!article) {
    return (
      <main className="min-h-screen bg-white dark:bg-black">
        <Navigation />
        <div className="flex items-center justify-center h-96 text-center">
          <div>
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <Link
              href="/blog"
              className="text-blue-500 hover:underline flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navigation />

      {/* Back Button */}
      <div className="pt-24 pb-8 max-w-3xl mx-auto px-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="py-12 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Category */}
            <div>
              <span className="px-4 py-2 text-sm font-medium bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {article.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {article.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {article.readTime}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {article.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Share Button */}
            <div className="flex gap-3 pt-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-colors"
                aria-label="Share"
              >
                <Share2 className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose dark:prose-invert max-w-none"
          >
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
              {article.content}
            </div>
          </motion.div>

          {/* Article Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Want to discuss this article?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Feel free to reach out if you have any questions or thoughts
                about this topic.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="mailto:philip@example.com"
                  className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold">Related Articles</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((num) => (
                <Link key={num} href={`/blog/${num}`}>
                  <div className="group p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all cursor-pointer">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Related Article
                    </p>
                    <h4 className="font-bold group-hover:text-blue-500 transition-colors">
                      Check out more posts
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
