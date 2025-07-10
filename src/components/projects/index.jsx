"use client";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import ProjectLayout from "./ProjectLayout";
import { Filter, Star, X } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const ProjectList = ({ projects }) => {
  const [filter, setFilter] = useState("all");
  const [showFeatured, setShowFeatured] = useState(false);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(projects.map(project => project.category))];
    return ["all", ...cats];
  }, [projects]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    let filtered = projects;
    
    if (showFeatured) {
      filtered = filtered.filter(project => project.featured);
    }
    
    if (filter !== "all") {
      filtered = filtered.filter(project => project.category === filter);
    }
    
    return filtered;
  }, [projects, filter, showFeatured]);

  const clearFilters = () => {
    setFilter("all");
    setShowFeatured(false);
  };

  const hasActiveFilters = filter !== "all" || showFeatured;

  return (
    <div className="w-full max-w-7xl px-4 mx-auto lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          My Projects
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          A collection of my work showcasing various technologies and creative solutions
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-4 mb-8"
      >
        {/* Featured Toggle */}
        <motion.button
          onClick={() => setShowFeatured(!showFeatured)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
            showFeatured
              ? "bg-accent/20 text-accent border-accent/30 shadow-lg shadow-accent/10"
              : "bg-muted/20 text-muted border-muted/30 hover:bg-accent/20 hover:text-accent hover:border-accent/30"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Star className={`w-4 h-4 transition-transform duration-200 ${showFeatured ? 'rotate-12' : ''}`} />
          <span className="text-sm font-medium">Featured Only</span>
        </motion.button>

        {/* Category Filters */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted" />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                  filter === category
                    ? "bg-accent/20 text-accent border border-accent/30 shadow-lg shadow-accent/10"
                    : "bg-muted/20 text-muted border border-muted/30 hover:bg-accent/20 hover:text-accent hover:border-accent/30"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <motion.button
            onClick={clearFilters}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/20 text-muted border border-muted/30 hover:bg-red-500/20 hover:text-red-400 hover:border-red-400/30 transition-all duration-200"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <X className="w-4 h-4" />
            <span className="text-sm font-medium">Clear</span>
          </motion.button>
        )}
      </motion.div>

      {/* Project Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center mb-8"
      >
        <p className="text-sm text-muted">
          Showing {filteredProjects.length} of {projects.length} projects
          {hasActiveFilters && (
            <span className="text-accent ml-1">
              • Filters active
            </span>
          )}
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {filteredProjects.map((project, index) => (
          <ProjectLayout key={project.id} {...project} />
        ))}
      </motion.div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted/20 flex items-center justify-center">
              <Filter className="w-8 h-8 text-muted" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No projects found</h3>
            <p className="text-muted mb-6">Try adjusting your filters to see more projects.</p>
            <motion.button
              onClick={clearFilters}
              className="px-6 py-3 bg-accent/20 text-accent border border-accent/30 rounded-lg hover:bg-accent/30 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Clear All Filters
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectList;
