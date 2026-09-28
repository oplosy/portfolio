"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { Pipeline } from "./Pipeline";

export function Systems() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const articles = listRef.current?.querySelectorAll<HTMLElement>("[data-index]");
    if (!articles) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    articles.forEach((article) => observer.observe(article));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="systems" id="work" aria-labelledby="systems-title">
      <header className="section-head">
        <p className="label"><span>02</span>Selected systems</p>
        <h2 id="systems-title" className="reveal">
          Four systems. <em>Four ways</em> to fail.
        </h2>
        <p className="section-note">Each one is built around the failure it has to survive — chain reorgs, diverging replicas, leaking tenants, and clients that disagree.</p>
      </header>

      <div className="systems-body">
        <div className="systems-list" ref={listRef}>
          {projects.map((project, index) => (
            <article key={project.id} className="system" data-index={index} data-active={index === active}>
              <p className="system-index">
                <span>{String(index + 1).padStart(2, "0")}</span>
                {project.eyebrow}
              </p>
              <h3>{project.name}</h3>
              <p className="system-description">{project.description}</p>
              <p className="system-engineering">{project.engineering}</p>
              <p className="system-stack">
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </p>
              <div className="system-inline">
                <Pipeline project={project} />
              </div>
              <a className="system-link" href={project.github} target="_blank" rel="noreferrer">
                Read the repository <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>

        <aside className="systems-panel" aria-hidden="true">
          <div className="systems-panel-inner">
            <div className="systems-panel-head">
              <span>Request path</span>
              <span>
                {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
            </div>
            <div className="systems-stage">
              {projects.map((project, index) => (
                <div key={project.id} className="systems-slide" data-active={index === active}>
                  <p className="systems-slide-name">{project.name}</p>
                  <Pipeline project={project} />
                </div>
              ))}
            </div>
            <div className="systems-progress">
              {projects.map((project, index) => (
                <i key={project.id} data-active={index <= active} />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
