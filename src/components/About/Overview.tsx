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
              text="I design systems that hold up under real traffic, then build them."
              delay={0.2}
              stagger={0.018}
            />
          </h1>
          <p className="about-lede">
            Software architect and Technical Lead at TCG Digital, and an IIT
            Kharagpur graduate. I design real-time AI pipelines, event-driven
            microservices and data platforms, write the code in Python and
            TypeScript, and lead the engineers who ship them.
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
          I own the architecture and the delivery: LLM and speech pipelines,
          Kafka-based microservices, Spark and Delta Lake data platforms, and
          the APIs and UI on top.
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
          Technical Lead at <strong>TCG Digital</strong> since September 2025,
          after two years as a Software Engineer there. I lead AI translation,
          enterprise data intelligence and ETL work. Recognised with the Spot
          Award and the Annual Excellence Award.
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
