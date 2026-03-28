"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featuredProjects = [
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
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Projects Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Featured<span className="text-blue-500"> Projects</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Showcase of my latest work and creative projects built with
                modern technologies.
              </p>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {featuredProjects.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </motion.div>

            {/* View All Button */}
            <motion.div variants={itemVariants} className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 dark:bg-gray-900 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 text-gray-900 dark:text-white font-semibold rounded-lg transition-all duration-300 group"
              >
                View All Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Skills &<span className="text-blue-500"> Expertise</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Technologies and tools I work with
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { title: "Frontend", skills: ["React", "Next.js", "Tailwind CSS"] },
                { title: "Backend", skills: ["Node.js", "Express", "Python"] },
                { title: "Databases", skills: ["MongoDB", "PostgreSQL", "Firebase"] },
                { title: "Tools", skills: ["Git", "Docker", "AWS"] },
              ].map((category) => (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                >
                  <h3 className="font-bold text-lg mb-4 text-blue-500">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-gray-600 dark:text-gray-400 flex items-center gap-2"
                      >
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
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
              Let's Work Together
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and
              opportunities.
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
