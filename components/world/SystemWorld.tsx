"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

const disciplines = ["Backend architecture", "Distributed systems", "Realtime infrastructure", "Data-intensive software"];

const stack = [
  ["Languages", "Go, TypeScript, Solidity"],
  ["Protocols", "HTTP, WebSocket, SSE, Yjs"],
  ["Data", "PostgreSQL, Redis, event logs"],
  ["Operations", "Docker, Kubernetes, observability"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function SystemWorld() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add("(min-width: 761px) and (prefers-reduced-motion: no-preference)", () => {
        const hero = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom bottom", scrub: 0.8 },
        });

        hero
          .to(".hero-line--one", { xPercent: -24 }, 0)
          .to(".hero-line--two", { xPercent: 17 }, 0)
          .to(".hero-line--three", { xPercent: -10 }, 0)
          .to(".hero-aside", { yPercent: -70, opacity: 0 }, 0)
          .to(".hero-code", { yPercent: 35, rotation: 4 }, 0)
          .to(".hero-rule__fill", { scaleX: 1 }, 0)
          .to(".hero-word", { letterSpacing: "0.025em" }, 0);

        const track = document.querySelector<HTMLElement>(".project-track");
        if (track) {
          const horizontal = gsap.to(track, {
            x: () => -(track.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
              trigger: ".work",
              start: "top top",
              end: () => `+=${track.scrollWidth - window.innerWidth}`,
              pin: true,
              scrub: 0.65,
              invalidateOnRefresh: true,
            },
          });

          gsap.utils.toArray<HTMLElement>(".project-panel").forEach((panel) => {
            gsap.from(panel.querySelectorAll(".project-reveal"), {
              y: 70,
              opacity: 0,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: horizontal,
                start: "left 78%",
                end: "left 48%",
                scrub: true,
              },
            });
          });
        }

        gsap.to(".ticker-row--forward", {
          xPercent: -28,
          ease: "none",
          scrollTrigger: { trigger: ".practice", start: "top bottom", end: "bottom top", scrub: 1 },
        });
        gsap.fromTo(".ticker-row--reverse", { xPercent: -28 }, {
          xPercent: 0,
          ease: "none",
          scrollTrigger: { trigger: ".practice", start: "top bottom", end: "bottom top", scrub: 1 },
        });

        gsap.utils.toArray<HTMLElement>(".reveal-line").forEach((line) => {
          gsap.from(line, {
            yPercent: 110,
            rotate: 2,
            scrollTrigger: { trigger: line, start: "top 88%", end: "top 60%", scrub: 0.6 },
          });
        });
      });

      media.add("(max-width: 760px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom bottom", scrub: 0.7 },
        })
          .to(".hero-line--one", { xPercent: -8 }, 0)
          .to(".hero-line--two", { xPercent: 7 }, 0)
          .to(".hero-line--three", { xPercent: -5 }, 0)
          .to(".hero-code", { yPercent: -45, rotation: -3 }, 0)
          .to(".hero-aside", { opacity: 0, yPercent: -60 }, 0);
      });

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(".scroll-marker", {
          top: "calc(100% - 7px)",
          ease: "none",
          scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom bottom", scrub: true },
        });
      });

      return () => media.revert();
    }, rootRef);

    return () => context.revert();
  }, []);

  return (
    <main ref={rootRef} className="portfolio">
      <a className="skip-link" href="#work">Skip to selected work</a>

      <header className="header">
        <a className="wordmark" href="#top" aria-label="Oplosy, back to top">O/</a>
        <p>Backend &amp; infrastructure engineer</p>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <aside className="scroll-index" aria-hidden="true"><span>00</span><i><b className="scroll-marker" /></i><span>05</span></aside>

      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="hero-aside"><span>OPLOSY — 2026</span><span>IST / UTC+3</span></div>
          <h1 className="hero-word" aria-label="I build the parts people notice when they break">
            <span className="hero-line hero-line--one">I BUILD THE PARTS</span>
            <span className="hero-line hero-line--two">PEOPLE <em>NOTICE</em></span>
            <span className="hero-line hero-line--three">WHEN THEY BREAK.</span>
          </h1>
          <div className="hero-bottom">
            <p>Backend systems built for pressure, change, and the long run.</p>
            <div className="hero-rule"><i className="hero-rule__fill" /></div>
            <span>Scroll to inspect</span>
          </div>
          <div className="hero-code" aria-hidden="true"><span>request_0182</span><b>200</b><span>18.4ms</span></div>
        </div>
      </section>

      <section className="manifesto" id="about">
        <p className="section-label">01 / Position</p>
        <div className="manifesto-copy">
          <div className="line-mask"><p className="reveal-line">I turn difficult</p></div>
          <div className="line-mask"><p className="reveal-line">technical systems into</p></div>
          <div className="line-mask"><p className="reveal-line"><em>calm software.</em></p></div>
        </div>
        <div className="manifesto-note">
          <span>WHAT THAT MEANS</span>
          <p>Clear boundaries. Durable data. Observable behavior. Infrastructure that remains understandable after the first release.</p>
        </div>
      </section>

      <section className="work" id="work" aria-labelledby="work-title">
        <div className="project-track">
          <article className="work-intro">
            <p className="section-label">02 / Selected work</p>
            <h2 id="work-title">FOUR SYSTEMS.<br />FOUR DIFFERENT<br />FAILURE MODES.</h2>
            <p>Drag nothing. Keep scrolling.</p>
          </article>

          {projects.map((project, index) => (
            <article className="project-panel" key={project.id}>
              <div className="project-number project-reveal">0{index + 1}</div>
              <div className="project-main">
                <p className="project-eyebrow project-reveal">{project.eyebrow}</p>
                <h3 className="project-reveal">{project.name}</h3>
                <p className="project-description project-reveal">{project.description}</p>
              </div>
              <div className="project-system project-reveal" aria-label="System architecture">
                {project.architecture.map((node, nodeIndex) => <span key={node}><b>{String(nodeIndex + 1).padStart(2, "0")}</b>{node}</span>)}
              </div>
              <div className="project-foot project-reveal">
                <p>{project.engineering}</p>
                <a href={project.github} target="_blank" rel="noreferrer">Repository <Arrow /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="practice" aria-labelledby="practice-title">
        <p className="section-label">03 / Practice</p>
        <h2 id="practice-title" className="sr-only">Engineering disciplines</h2>
        <div className="ticker" aria-hidden="true">
          <div className="ticker-row ticker-row--forward">{disciplines.concat(disciplines).map((item, index) => <span key={`${item}-${index}`}>{item} <b>↘</b></span>)}</div>
          <div className="ticker-row ticker-row--reverse">{disciplines.slice().reverse().concat(disciplines.slice().reverse()).map((item, index) => <span key={`${item}-${index}`}>{item} <b>↖</b></span>)}</div>
        </div>
      </section>

      <section className="stack" aria-labelledby="stack-title">
        <div><p className="section-label">04 / Working set</p><h2 id="stack-title">TOOLS CHANGE.<br />JUDGMENT STAYS.</h2></div>
        <dl>{stack.map(([term, detail], index) => <div key={term}><span>0{index + 1}</span><dt>{term}</dt><dd>{detail}</dd></div>)}</dl>
      </section>

      <footer className="contact" id="contact">
        <div className="contact-meta"><p className="section-label">05 / Contact</p><span>Available for difficult engineering work</span></div>
        <p className="contact-title">LET&apos;S MAKE<br /><em>IT HOLD.</em></p>
        <div className="contact-links">
          <a href="https://github.com/oplosy" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          <a href="#top">Back to top ↑</a>
        </div>
        <div className="contact-base"><span>OPLOSY</span><span>BACKEND / INFRASTRUCTURE</span><span>2026</span></div>
      </footer>
    </main>
  );
}
