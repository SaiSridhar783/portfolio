import type { Metadata } from "next";
import HeroOrb from "@/components/HeroOrb";
import NavTab from "@/components/NavTab";
import PageTransition from "@/components/PageTransition";
import SecretOrb from "@/components/SecretOrb";
import StatusHeadline from "@/components/StatusHeadline";
import "@/styles/homepage.css";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    // Machine-readable summaries for AI assistants
    types: {
      "text/plain": [
        { url: "/llms.txt", title: "llms.txt" },
        { url: "/llms-full.txt", title: "llms-full.txt" },
      ],
    },
  },
};

// Sections placed around the orb, clockwise from the top
const sections = [
  { title: "Projects", image: "/images/projects.png", href: "/projects" },
  { title: "Certifications", image: "/images/certifications.jpg", href: "/certifications" },
  { title: "Contact Me", image: "/images/contact.jpg", href: "/contact" },
  { title: "About Me", image: "/images/resume.png", href: "/about" },
  { title: "Experience", image: "/images/experience.png", href: "/experience" },
];

// Landing and navigation in one: intro on the left, every section one click away on the right
const Home: React.FC = () => {
  return (
    <PageTransition>
      <div className="home-container">
        <div className="home-intro">
          <p className="home-eyebrow">Software Architect · Technical Lead</p>
          <StatusHeadline />
          <h2>
            I&apos;m <span>Sai Sridhar Akula</span>, a software architect and
            engineer who designs real-time AI and data systems, then builds
            them: a live commentary translator feeding 27 broadcasters across
            the Indian subcontinent, and event-driven backends at 700+ TPS.
          </h2>
          <p className="home-hint">Pick a section to dive in.</p>
        </div>

        <nav className="hub-ring" aria-label="Sections">
          <div className="hub-orb">
            <SecretOrb>
              <HeroOrb size="calc(var(--ring) * 0.5)" />
            </SecretOrb>
          </div>
          {sections.map((s, i) => (
            <span
              key={s.href}
              className="hub-node"
              style={{ "--a": `${-90 + i * 72}deg` } as React.CSSProperties}
            >
              <NavTab {...s} delay={0.08 * i} />
            </span>
          ))}
        </nav>
      </div>
    </PageTransition>
  );
};

export default Home;
