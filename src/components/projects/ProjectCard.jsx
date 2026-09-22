import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 17 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 .267-.012 2.415-.012 2.744 0 .267.18.578.688.48A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
  </svg>
);

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <div className="project-visual">
        <span>{String(project.id).padStart(2, "0")}</span>
        <b>{project.category}</b>
      </div>

      <div className="project-content">

        <h3>{project.title}</h3>

        {/* Company name */}
        <div className="project-company">
          {project.company}
        </div>

        <p>{project.description}</p>

        <div className="chips">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-links">

          {/* Only ECGC / SMILE is private */}
          {project.private ? (
            <span className="private-project">
              🔒 ECGC — Client Project
            </span>
          ) : project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GithubIcon size={17} />
              GitHub
            </a>
          ) : null}

          {/* Demo */}
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink size={17} />
              Demo
            </a>
          )}

        </div>

      </div>
    </article>
  );
}