"use client";

import { motion } from 'framer-motion';

const projects = [
  {
    id: 7,
    title: "Geo Hostel Finder",
    description: "Find hostels easily with location-based search and interactive maps.",
    tags: ["Next.js", "Maps", "Vercel"],
    category: "web",
    url: "https://geo-hostel-finder.vercel.app/"
  },
  {
    id: 8,
    title: "ResearchIndex Admin",
    description: "Admin dashboard for managing research indexes and academic content.",
    tags: ["Next.js", "Admin", "Vercel"],
    category: "web",
    url: "https://researchindex-admin.vercel.app/"
  },
  {
    id: 9,
    title: "Food Delivery",
    description: "Modern food delivery platform with real-time order tracking.",
    tags: ["Next.js", "Delivery", "Vercel"],
    category: "web",
    url: "https://food-develivery-7oj3.vercel.app/"
  },
  {
    id: 10,
    title: "eFashion",
    description: "Trendy e-commerce fashion store with seamless shopping experience.",
    tags: ["Next.js", "E-commerce", "Vercel"],
    category: "web",
    url: "https://efashion-gold.vercel.app/"
  },
  {
    id: 11,
    title: "iPhone Showcase",
    description: "Interactive showcase for the latest iPhone models.",
    tags: ["Next.js", "Showcase", "Vercel"],
    category: "web",
    url: "https://iphone-eta-three.vercel.app/"
  },
  {
    id: 12,
    title: "Upsa Mental Health",
    description: "Mental health resources and support platform for UPSA students.",
    tags: ["Next.js", "Health", "Vercel"],
    category: "web",
    url: "https://upsamentalhealth.vercel.app/"
  }
];

type Props = {
  activeCategory: string;
};

const ProjectGrid = ({ activeCategory }: Props) => {
  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-16 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full"
            >
              <div className="relative w-full h-56">
                <iframe
                  src={project.url}
                  title={project.title}
                  className="w-full h-full border-0"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
                >
                  Visit
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGrid;