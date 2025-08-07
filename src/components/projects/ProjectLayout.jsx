import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 16 } },
  hover: { scale: 1.04, boxShadow: "0 8px 32px 0 rgba(254,254,91,0.18)", transition: { type: "spring", stiffness: 200, damping: 12 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.08, type: "spring", stiffness: 100, damping: 18 } }),
};

const ProjectLayout = ({ id, name, description, date, demoLink, githubLink, liveLink }) => {
  const router = useRouter();
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="show"
      whileHover="hover"
      className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Project Header */}
      <motion.div
        custom={0}
        variants={childVariants}
        initial="hidden"
        animate="show"
        className="flex items-start justify-between mb-4"
      >
        <h2 className="text-2xl font-bold text-foreground">{name}</h2>
        <span className="text-sm text-muted bg-white/5 px-3 py-1 rounded-full">
          {new Date(date).toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" })}
        </span>
      </motion.div>

      {/* Project Description */}
      <motion.p
        custom={1}
        variants={childVariants}
        initial="hidden"
        animate="show"
        className="text-muted leading-relaxed flex-grow"
      >
        {description}
      </motion.p>

      {/* Project Links - GitHub and View Details in same line */}
      <motion.div
        custom={2}
        variants={childVariants}
        initial="hidden"
        animate="show"
        className="flex items-center justify-between mt-auto pt-4"
      >
        {githubLink && (
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-foreground px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </Link>
        )}
        <button
          type="button"
          onClick={() => router.push(`/projects/${id}`)}
          className="flex items-center gap-2 bg-gradient-to-r from-accent/20 to-accent/10 hover:from-accent/30 hover:to-accent/20 text-foreground px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 border border-accent/20 hover:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/40"
        >
          <span>View Details</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectLayout;
