import SummaryTab from "./SummaryTab";
import Image from "next/image";
import SplitText from "../SplitText";
import Stats from "./Stats";
import "@/styles/about.scss";

const Overview: React.FC = () => {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero-text">
          <p className="about-eyebrow">
            Hi, I&apos;m <span>Sai Sridhar Akula</span>.
          </p>
          <h1>
            <SplitText
              text="I build software that holds up under real traffic."
              delay={0.2}
              stagger={0.018}
            />
          </h1>
          <p className="about-lede">
            Fullstack engineer at TCG Digital and an IIT Kharagpur graduate. I
            work across the stack in Python and TypeScript, from event-driven
            backends and AI pipelines to the interfaces people actually use.
          </p>
        </div>
        <div className="about-portrait">
          <Image
            src="/images/about/profile.png"
            alt="Portrait of Sai Sridhar Akula"
            width={550}
            height={800}
            priority
          />
        </div>
      </section>

      <Stats />

      <section className="about-cards">
        <SummaryTab label="What I do" link="/projects" linkText="See what I've built">
          I design and ship products end to end: APIs, data pipelines, real-time
          streaming and the UI on top, mostly in Python and TypeScript.
        </SummaryTab>
        <SummaryTab
          label="Where I studied"
          link="/certifications"
          linkText="Education and certifications"
        >
          B.Tech from{" "}
          <strong>Indian Institute of Technology, Kharagpur</strong>. I studied
          Mining Engineering, graduated in 2023 with a CGPA of 8.85, and moved
          into software full time.
        </SummaryTab>
        <SummaryTab label="Where I work" link="/experience" linkText="My experience">
          Software Engineer at <strong>TCG Digital</strong> since 2023, building
          event-driven systems with Kafka, Redis and Kubernetes. Recognised with
          the Spot Award and the Annual Excellence Award.
        </SummaryTab>
        <SummaryTab label="Say hello" link="/contact" linkText="Get in touch">
          Hiring, collaborating, or just curious about something I&apos;ve built?
          My inbox is open, and I reply.
        </SummaryTab>
      </section>
    </>
  );
};

export default Overview;
