"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

const allProjects = [
  {
    id: "1",
    title: "Portfolio Website",
    shortDescription: "A modern, animated portfolio built with Next.js",
    description:
      "A comprehensive portfolio website showcasing projects, articles, and experience with smooth animations and interactive elements.",
    image: "🌐",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/philip696/portfolio-app",
  },
  {
    id: "2",
    title: "Task Manager App",
    shortDescription: "Full-stack task management application",
    description:
      "A MERN stack application for managing daily tasks with real-time updates, dark mode, and responsive design.",
    image: "✓",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "3",
    title: "E-commerce Platform",
    shortDescription: "Full-featured online shopping experience",
    description:
      "A complete e-commerce solution with product catalog, shopping cart, checkout, and payment integration.",
    image: "🛒",
    tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "4",
    title: "Real-time Chat App",
    shortDescription: "Messaging platform with instant notifications",
    description:
      "A Socket.io powered chat application with real-time messaging, user presence indicators, and typing notifications.",
    image: "💬",
    tags: ["React", "Socket.io", "Node.js", "Redis"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "5",
    title: "Weather Dashboard",
    shortDescription: "Beautiful weather forecast application",
    description:
      "A weather app with real-time data, location-based forecasts, and interactive weather visualizations.",
    image: "🌤️",
    tags: ["React", "API", "Tailwind CSS", "TypeScript"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "6",
    title: "Analytics Dashboard",
    shortDescription: "Data visualization and monitoring tool",
    description:
      "A comprehensive analytics dashboard with charts, graphs, and real-time data processing for business insights.",
    image: "📊",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
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

export default function ProjectsPage() {
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
              My<span className="text-blue-500"> Projects</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A collection of projects showcasing my skills in web development,
              design, and problem-solving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {allProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
