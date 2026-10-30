import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Globe2,
  Lightbulb,
  PenLine,
  BriefcaseBusiness,
  Mail,
  Linkedin,
  Github
} from "lucide-react";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const expertise = [
  {
    icon: Code2,
    title: "Technology & development",
    text: "Designing and building software, digital products and intelligent systems."
  },
  {
    icon: BriefcaseBusiness,
    title: "Entrepreneurship",
    text: "Exploring business opportunities, scalable products and practical solutions."
  },
  {
    icon: PenLine,
    title: "Writing & authorship",
    text: "Developing ideas, perspectives and written work with purpose."
  },
  {
    icon: Globe2,
    title: "Diplomacy & global affairs",
    text: "Interested in international relations, geopolitics and the forces shaping our world."
  }
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="live-dot" /> PERSONAL DIGITAL HEADQUARTERS</p>
              <p className="hero-kicker">Independent thinker. Builder. Global perspective.</p>
              <h1>Ideas into <span>impact.</span><br />Beyond borders.</h1>
              <p className="hero-description">
                I&apos;m Shalom Jeremiah — a developer, author and entrepreneur with a deep
                interest in diplomacy, geopolitics, international relations and global affairs.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17} /></a>
                <a className="button button-quiet" href="#about">Discover my story <ArrowDown size={16} /></a>
              </div>
              <div className="hero-footnote">
                <span>BASED IN KENYA</span><span className="footnote-line" /><span>THINKING GLOBALLY</span>
              </div>
            </div>

            <div className="hero-art" aria-label="Abstract orbital graphic">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="orbit-core">
                <span className="core-cross">+</span>
                <span className="core-label">SJ / 01</span>
              </div>
              <span className="orbit-label orbit-label-top">TECHNOLOGY</span>
              <span className="orbit-label orbit-label-right">ENTERPRISE</span>
              <span className="orbit-label orbit-label-bottom">GLOBAL AFFAIRS</span>
              <span className="orbit-label orbit-label-left">IDEAS</span>
              <div className="art-caption"><span>FIG. 001</span><span>AN INTERCONNECTED WORLD</span></div>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-strip">
          <div className="section-wrap intro-strip-inner">
            <span>MY WORK SITS AT THE INTERSECTION OF</span>
            <p>Technology <i>×</i> Enterprise <i>×</i> Ideas <i>×</i> Global affairs</p>
          </div>
        </section>

        <section className="content-section section-wrap" id="about">
          <SectionHeading eyebrow="01 / THE PERSON" title="Curiosity without borders." />
          <div className="about-grid">
            <p className="about-lead">
              I believe meaningful progress happens when technical thinking meets
              entrepreneurial action and a wider understanding of the world.
            </p>
            <div className="about-copy">
              <p>
                My work and interests move across software development, business building,
                writing and the study of international affairs. I enjoy turning ideas into
                practical systems while staying curious about the institutions, strategies
                and relationships that shape our world.
              </p>
              <p>
                This space brings those disciplines together: what I build, what I write,
                what I am learning and the direction I am working towards.
              </p>
              <a className="text-link" href="#contact">Start a conversation <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="content-section section-wrap" id="expertise">
          <SectionHeading
            eyebrow="02 / AREAS OF FOCUS"
            title="Different disciplines. One perspective."
            description="A multidisciplinary outlook grounded in building, learning and understanding."
          />
          <div className="expertise-grid">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className="expertise-card" key={item.title}>
                  <div className="expertise-top"><span>0{index + 1}</span><Icon size={21} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="content-section work-section" id="work">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="03 / SELECTED WORK"
              title="Built with intention."
              description="A selection of software projects and product explorations. Project status is shown transparently."
            />
            <div className="projects-grid">
              {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
            </div>
          </div>
        </section>

        <section className="content-section section-wrap" id="enterprise">
          <div className="enterprise-panel">
            <div>
              <p className="eyebrow">04 / ENTERPRISE</p>
              <h2>Building for<br /><span>what&apos;s next.</span></h2>
            </div>
            <div className="enterprise-copy">
              <p className="enterprise-brand">QYNTRAVA ENTERPRISES</p>
              <p>
                An entrepreneurial platform focused on technology, digital solutions
                and opportunities to build products with value beyond borders.
              </p>
              <a className="text-link" href="#contact">Explore collaboration <ArrowUpRight size={15} /></a>
            </div>
            <div className="enterprise-index">Q / 01</div>
          </div>
        </section>

        <section className="content-section global-section" id="global">
          <div className="section-wrap global-grid">
            <div>
              <SectionHeading eyebrow="05 / GLOBAL AFFAIRS" title="The world is connected. So is its future." />
              <p className="global-copy">
                An ongoing interest in diplomacy, geopolitics, international relations
                and global affairs — examining how nations interact, how power moves
                and how global decisions shape everyday realities.
              </p>
              <a className="button button-outline" href="#writing">Explore my perspectives <ArrowUpRight size={16} /></a>
            </div>
            <div className="global-visual">
              <div className="globe-ring ring-a" />
              <div className="globe-ring ring-b" />
              <div className="globe-sphere"><Globe2 size={74} strokeWidth={0.7} /></div>
              <span className="global-coord coord-a">01°17&apos;S / 36°49&apos;E</span>
              <span className="global-coord coord-b">A GLOBAL OUTLOOK</span>
            </div>
          </div>
        </section>

        <section className="content-section section-wrap" id="writing">
          <SectionHeading
            eyebrow="06 / PUBLICATIONS & IDEAS"
            title="Thoughts made tangible."
            description="Writing is a way to examine ideas, challenge assumptions and make sense of complex systems."
          />
          <div className="book-feature">
            <div className="book-cover">
              <div className="book-cover-rule" />
              <span className="book-overline">POWER · POLITICS · DIPLOMACY</span>
              <h3>GEOMETRY<br />OF POWER</h3>
              <span className="book-author">SHALOM JEREMIAH</span>
              <div className="book-cover-orbit" />
            </div>
            <div className="book-details">
              <p className="eyebrow">FEATURED MANUSCRIPT</p>
              <h3>Geometry of Power</h3>
              <p>
                A work exploring geopolitics and diplomacy, examining the structures,
                interests and relationships that influence power in the international system.
              </p>
              <span className="status status-in-development">Publication details to be added</span>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <p className="eyebrow">07 / CONNECTIONS</p>
            <h2>Good things begin<br />with a <span>conversation.</span></h2>
            <p className="contact-intro">For professional opportunities, collaborations, ideas and meaningful conversations.</p>
            <a className="button button-primary contact-button" href="mailto:hello@shalomjeremiah.co">
              <Mail size={17} /> Get in touch <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <a className="brand" href="#home"><span className="brand-mark">SJ</span><span>SHALOM JEREMIAH</span></a>
          <p>Building. Learning. Looking beyond borders.</p>
          <div className="footer-links">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
            <a href="mailto:hello@shalomjeremiah.co" aria-label="Email"><Mail size={17} /></a>
          </div>
          <span className="copyright">© {new Date().getFullYear()} SHALOM JEREMIAH</span>
        </div>
      </footer>
    </>
  );
}
