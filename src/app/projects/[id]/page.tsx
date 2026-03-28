"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { useParams } from "next/navigation";

const projectsData: Record<string, any> = {
  "1": {
    title: "Portfolio Website",
    shortDescription: "A modern, animated portfolio built with Next.js",
    description:
      "A comprehensive portfolio website showcasing projects, articles, and experience with smooth animations and interactive elements. Built with cutting-edge web technologies for optimal performance and user experience.",
    image: "🌐",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    github: "https://github.com/philip696/portfolio-app",
    demo: "https://example.com",
    fullDescription: `This portfolio website serves as a showcase of my work and expertise. It features:

- Smooth page transitions and animations using Framer Motion
- Dark mode support with next-themes
- Responsive design that works on all devices
- Dynamic project showcase with filtering
- Blog section with article previews
- Timeline for work experience and education
- SEO optimized with Next.js metadata
- Performance optimized with lazy loading and code splitting`,
    technologies: [
      { name: "Next.js 16", description: "React framework for production" },
      {
        name: "React 19",
        description: "JavaScript library for building user interfaces",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework",
      },
      {
        name: "Framer Motion",
        description: "Animation library for React",
      },
      {
        name: "TypeScript",
        description: "Typed superset of JavaScript",
      },
    ],
    features: [
      "Responsive Design",
      "Dark Mode",
      "Smooth Animations",
      "Project Showcase",
      "Blog Section",
      "Experience Timeline",
      "SEO Optimized",
    ],
    screenshots: ["🖼️ Hero Section", "🎨 Projects Grid", "📝 Blog Page"],
  },
  "2": {
    title: "Task Manager App",
    shortDescription: "Full-stack task management application",
    description:
      "A MERN stack application for managing daily tasks with real-time updates, dark mode, and responsive design.",
    image: "✓",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    github: "https://github.com",
    demo: "https://example.com",
    fullDescription: `A complete task management solution enabling users to organize and track their daily activities efficiently.

Key Features:
- Create, read, update, and delete tasks
- Real-time synchronization across devices
- User authentication with JWT
- Task prioritization and categories
- Local storage for offline support
- Beautiful UI with dark mode`,
    technologies: [
      { name: "React", description: "Frontend library" },
      { name: "Node.js", description: "JavaScript runtime" },
      { name: "MongoDB", description: "NoSQL database" },
      { name: "Express", description: "Web application framework" },
    ],
    features: [
      "Real-time Updates",
      "User Authentication",
      "Task Categories",
      "Offline Support",
      "Dark Mode",
      "Mobile Friendly",
    ],
    screenshots: ["📋 Task List", "➕ Add Task", "⚙️ Settings"],
  },
  "3": {
    title: "E-commerce Platform",
    shortDescription: "Full-featured online shopping experience",
    description:
      "A complete e-commerce solution with product catalog, shopping cart, checkout, and payment integration.",
    image: "🛒",
    tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
    fullDescription: `A production-ready e-commerce platform built with modern technologies and best practices.

Features:
- Product catalog with advanced filtering
- Shopping cart with persistent storage
- Secure checkout process
- Stripe payment integration
- Order tracking
- Admin dashboard
- Inventory management`,
    technologies: [
      { name: "Next.js", description: "React framework" },
      { name: "Stripe", description: "Payment processing" },
      { name: "Prisma", description: "ORM" },
      { name: "PostgreSQL", description: "Database" },
    ],
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Payment Integration",
      "Order Tracking",
      "Admin Dashboard",
      "Inventory System",
    ],
    screenshots: ["🏪 Store Front", "🛍️ Product Page", "💳 Checkout"],
  },
};

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id as string;
  const project = projectsData[projectId];

  if (!project) {
    return (
      <main className="min-h-screen bg-white dark:bg-black">
        <Navigation />
        <div className="flex items-center justify-center h-96 text-center">
          <div>
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <Link
              href="/projects"
              className="text-blue-500 hover:underline flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
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
      <div className="pt-24 pb-8 max-w-4xl mx-auto px-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
      </div>

      {/* Project Header */}
      <section className="py-12 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold">{project.title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-4">
              {project.github && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-black rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </motion.a>
              )}
              {project.demo && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold">Overview</h2>
            <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line leading-relaxed">
              {project.fullDescription}
            </p>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Technologies Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.technologies.map((tech: any) => (
                <div
                  key={tech.name}
                  className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                >
                  <h3 className="font-bold text-blue-500 mb-2">{tech.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature: string) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
                >
                  <span className="text-2xl">✓</span>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Interested in working together?
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Let me know if you'd like to discuss this project or explore
              potential collaborations.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="mailto:philip@example.com"
                className="inline-block px-8 py-4 bg-white text-blue-500 font-bold rounded-lg hover:shadow-xl transition-all duration-300"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
