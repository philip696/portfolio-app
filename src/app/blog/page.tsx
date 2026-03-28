"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: "1",
    title: "Getting Started with Next.js 16",
    excerpt:
      "Learn the fundamentals of Next.js 16 and how to build modern web applications with server components and streaming.",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Web Development",
    image: "📚",
  },
  {
    id: "2",
    title: "Mastering Framer Motion Animations",
    excerpt:
      "Deep dive into creating smooth, performant animations using Framer Motion in your React applications.",
    date: "March 10, 2024",
    readTime: "12 min read",
    category: "Animation",
    image: "✨",
  },
  {
    id: "3",
    title: "Building Scalable Node.js Backends",
    excerpt:
      "Best practices and patterns for building scalable backend services with Node.js and Express.",
    date: "March 5, 2024",
    readTime: "10 min read",
    category: "Backend",
    image: "⚙️",
  },
  {
    id: "4",
    title: "TypeScript Best Practices",
    excerpt:
      "Explore advanced TypeScript patterns and techniques to write more maintainable and type-safe code.",
    date: "February 28, 2024",
    readTime: "9 min read",
    category: "TypeScript",
    image: "📘",
  },
  {
    id: "5",
    title: "Responsive Design with Tailwind CSS",
    excerpt:
      "Master responsive design techniques using Tailwind CSS utility classes for all screen sizes.",
    date: "February 20, 2024",
    readTime: "7 min read",
    category: "CSS",
    image: "🎨",
  },
  {
    id: "6",
    title: "Database Optimization Tips",
    excerpt:
      "Learn how to optimize database queries and indexes for better application performance.",
    date: "February 15, 2024",
    readTime: "11 min read",
    category: "Database",
    image: "🗄️",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navigation />

      {/* Page Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold">
              My<span className="text-blue-500"> Blog</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about web development, design,
              and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {blogPosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <Link href={`/blog/${post.id}`}>
                  <div className="group p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Image Emoji */}
                      <div className="flex-shrink-0">
                        <div className="text-5xl">{post.image}</div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-3 py-1 text-xs font-medium bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full">
                            {post.category}
                          </span>
                          <span className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400">
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="flex items-center">
                        <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-2 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <button className="px-8 py-4 rounded-lg border-2 border-gray-700 dark:border-gray-300 text-gray-900 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300">
              Load More Articles
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-950">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">
              Subscribe to My<span className="text-blue-500"> Newsletter</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Get the latest articles and insights delivered to your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none transition-colors"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
