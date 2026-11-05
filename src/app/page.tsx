import HeroOrb from "@/components/HeroOrb";
import NavTab from "@/components/NavTab";
import PageTransition from "@/components/PageTransition";
import SplitText from "@/components/SplitText";
import "@/styles/homepage.scss";

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
          <p className="home-eyebrow">Software Engineer · Fullstack</p>
          <h1 className="home-hello">
            <SplitText text="200 OK. You've found the right developer." delay={0.15} />
          </h1>
          <h2>
            I&apos;m <span>Sai Sridhar Akula</span>, a fullstack engineer
            who builds real-time systems that scale, like an AI commentary
            translator streamed live to 5M+ viewers.
          </h2>
          <p className="home-hint">Pick a section to dive in.</p>
        </div>

        <nav className="hub-ring" aria-label="Sections">
          <div className="hub-orb">
            <HeroOrb size="calc(var(--ring) * 0.5)" />
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
