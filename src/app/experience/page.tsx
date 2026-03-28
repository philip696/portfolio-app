"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const experienceData = [
  {
    id: 1,
    type: "work",
    company: "Tech Solutions Inc.",
    position: "Senior Frontend Developer",
    period: "Jan 2022 - Present",
    description:
      "Leading frontend development for scalable web applications. Mentoring junior developers and establishing best practices for the team.",
    responsibilities: [
      "Designed and implemented responsive UI components",
      "Improved application performance by 40%",
      "Led migration from Vue to React",
      "Mentored 3 junior developers",
    ],
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    id: 2,
    type: "work",
    company: "Digital Agency Co.",
    position: "Full Stack Developer",
    period: "Jun 2020 - Dec 2021",
    description:
      "Developed and maintained multiple full-stack web applications for diverse clients. Collaborated with designers and project managers.",
    responsibilities: [
      "Built 15+ production applications",
      "Implemented RESTful APIs with Node.js",
      "Optimized database queries for performance",
      "Deployed applications to AWS",
    ],
    skills: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    id: 3,
    type: "work",
    company: "StartUp Ventures",
    position: "Frontend Developer",
    period: "Jan 2019 - May 2020",
    description:
      "Started career as a frontend developer working on early-stage startup projects with modern web technologies.",
    responsibilities: [
      "Built responsive web interfaces",
      "Implemented interactive features with JavaScript",
      "Collaborated with backend team",
      "Participated in code reviews",
    ],
    skills: ["React", "JavaScript", "CSS", "Git"],
  },
];

const educationData = [
  {
    id: 1,
    school: "University of Technology",
    degree: "Bachelor of Science in Computer Science",
    period: "2015 - 2019",
    description:
      "Focused on full-stack web development, algorithms, and software engineering principles.",
    highlights: [
      "GPA: 3.8/4.0",
      "Dean's List: All semesters",
      "President of Web Development Club",
    ],
  },
  {
    id: 2,
    school: "Online Learning Platform",
    degree: "Advanced React & Next.js",
    period: "2021",
    description: "Specialized course in modern React patterns and Next.js framework.",
    highlights: [
      "Certified",
      "100% completion rate",
      "Built 5 production projects",
    ],
  },
  {
    id: 3,
    school: "Tech Bootcamp",
    degree: "Full Stack Web Development",
    period: "2018",
    description:
      "Intensive 12-week bootcamp covering HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
    highlights: [
      "Top 10% of cohort",
      "Completed capstone project",
      "100% job placement",
    ],
  },
];

export default function ExperiencePage() {
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
              My<span className="text-blue-500"> Experience</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A timeline of my professional journey and educational background.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Work Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12">
              Work<span className="text-blue-500"> Experience</span>
            </motion.h2>

            <div className="space-y-8">
              {experienceData.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative pl-8 pb-8 border-l-2 border-blue-500 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-4 top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-black"></div>

                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-blue-500">
                          {exp.position}
                        </h3>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                          {exp.company}
                        </p>
                      </div>
                      <span className="px-4 py-2 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>

                    <div className="space-y-3 mb-4">
                      <p className="font-semibold text-sm text-gray-700 dark:text-gray-300">
                        Key Responsibilities:
                      </p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-3"
                          >
                            <span className="text-blue-500 font-bold mt-1">
                              •
                            </span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12">
              Education
            </motion.h2>

            <div className="space-y-8">
              {educationData.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="relative pl-8 pb-8 border-l-2 border-cyan-500 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-4 top-0 w-6 h-6 bg-cyan-500 rounded-full border-4 border-white dark:border-black"></div>

                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-cyan-500">
                          {edu.degree}
                        </h3>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                          {edu.school}
                        </p>
                      </div>
                      <span className="px-4 py-2 bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-full text-sm font-medium whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {edu.description}
                    </p>

                    <div className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <p
                          key={idx}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-3"
                        >
                          <span className="text-cyan-500 font-bold">✓</span>
                          {highlight}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">
              Skills
              <span className="text-blue-500"> & Proficiencies</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  category: "Frontend",
                  skills: [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Framer Motion",
                  ],
                },
                {
                  category: "Backend",
                  skills: [
                    "Node.js",
                    "Express",
                    "Python",
                    "MongoDB",
                    "PostgreSQL",
                  ],
                },
                {
                  category: "Tools & Platforms",
                  skills: ["Git", "Docker", "AWS", "Vercel", "GitHub"],
                },
                {
                  category: "Soft Skills",
                  skills: [
                    "Leadership",
                    "Mentoring",
                    "Communication",
                    "Problem-solving",
                    "Teamwork",
                  ],
                },
              ].map((skillGroup) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-bold text-blue-500">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
