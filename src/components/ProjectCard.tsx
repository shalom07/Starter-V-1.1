import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>
        <span className={`status status-${project.status.toLowerCase().replaceAll(" ", "-")}`}>
          {project.status}
        </span>
      </div>
      <p className="project-category">{project.category}</p>
      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <div className="tag-list">
        {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
      </div>
      <a className="text-link" href="#contact">
        Discuss this project <ArrowUpRight size={15} />
      </a>
    </article>
  );
}
