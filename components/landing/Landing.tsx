import { Clock } from "./Clock";
import { Motion } from "./Motion";
import { Systems } from "./Systems";
import { Topology } from "./Topology";

const principles = [
  {
    title: "Boundaries before features",
    body: "Domains, tenants, and trust zones are drawn first, so new work lands inside a shape instead of eroding it.",
  },
  {
    title: "Data that survives",
    body: "Durable logs, explicit ownership of state, and read models that can be rebuilt when something upstream changes its mind.",
  },
  {
    title: "Behavior you can observe",
    body: "Systems should explain themselves in production — through structure, logs, and signals — long after the first release.",
  },
];

const stack = [
  ["Languages", "Go", "TypeScript", "Solidity"],
  ["Protocols", "HTTP", "WebSocket", "SSE", "Yjs"],
  ["Data", "PostgreSQL", "Redis", "Event logs"],
  ["Operations", "Docker", "Kubernetes", "Observability"],
];

export function Landing() {
  return (
    <>
      <Motion />
      <a className="skip-link" href="#work">Skip to selected systems</a>
      <div className="progress" aria-hidden="true"><i className="progress-bar" /></div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Oplosy, back to top">
          <b>O/</b>Oplosy
        </a>
        <p className="status"><i aria-hidden="true" />Open to difficult engineering work</p>
        <nav aria-label="Primary">
          <a href="#approach">Approach</a>
          <a href="#work">Systems</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-meta label">
              <span>Backend &amp; infrastructure engineer</span>
              <span>Istanbul · <Clock /></span>
            </p>
            <h1 id="hero-title" className="hero-title">
              <span className="line"><span>I build systems</span></span>
              <span className="line"><span>that stay <em>calm</em></span></span>
              <span className="line"><span>under load.</span></span>
            </h1>
            <p className="hero-lede">
              APIs, data, realtime, and distributed infrastructure — designed so the parts people rely on keep
              working when traffic, teams, and requirements change.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#work">See the systems <span aria-hidden="true">↓</span></a>
              <a className="button" href="https://github.com/oplosy" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <Topology />
        </section>

        <section className="approach" id="approach" aria-labelledby="approach-title">
          <header className="section-head">
            <p className="label"><span>01</span>Approach</p>
            <h2 id="approach-title" className="reveal">
              Difficult technical systems, turned into <em>calm software.</em>
            </h2>
          </header>
          <ol className="principles">
            {principles.map((principle, index) => (
              <li key={principle.title} className="principle">
                <i className="principle-rule" aria-hidden="true" />
                <span className="principle-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <Systems />

        <section className="stack" id="stack" aria-labelledby="stack-title">
          <header className="section-head">
            <p className="label"><span>03</span>Working set</p>
            <h2 id="stack-title" className="reveal">
              Tools change. <em>Judgment stays.</em>
            </h2>
          </header>
          <dl className="stack-table">
            {stack.map(([term, ...items]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>
                  {items.map((item) => <span key={item}>{item}</span>)}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <footer className="contact" id="contact">
        <p className="label"><span>04</span>Contact</p>
        <h2 className="contact-title reveal">
          Have a system that <br />needs to <em>hold?</em>
        </h2>
        <a className="contact-link" href="https://github.com/oplosy" target="_blank" rel="noreferrer">
          <span>github.com/oplosy</span>
          <span aria-hidden="true">↗</span>
        </a>
        <div className="contact-base">
          <span>© 2026 Oplosy</span>
          <span>Backend / Infrastructure</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
