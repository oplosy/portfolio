import type { Project } from "@/data/projects";

export function Pipeline({ project }: { project: Project }) {
  return (
    <div className="pipeline">
      <p className="pipeline-role">{project.systemRole}</p>
      <div className="pipeline-track">
        <ol aria-label={`${project.name} architecture, in request order`}>
          {project.architecture.map((node, index) => (
            <li key={node} style={{ "--i": index } as React.CSSProperties}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {node}
            </li>
          ))}
        </ol>
        <i className="pipeline-packet" aria-hidden="true" />
      </div>
    </div>
  );
}
