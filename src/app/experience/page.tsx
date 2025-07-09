import { memo } from "react";
import ExperienceCard from "@/components/Mobile/ExperienceCard";
import Card from "@/components/Card";
import Image from "next/image";
import "@/styles/experience.scss";
import TCGTestimonials from "@/components/Experience/TCGTestimonials";

const workExperiences = [
  {
    title: "Software Engineer",
    company: "TCG Digital Solutions Pvt. Ltd.",
    logo: "/images/company/tcgdigital.jpg",
    duration: "Aug 01, 2023 - Present",
    compURL: "https://www.tcgdigital.com/",
    text: "Engineered and built a real-time football commentary translator using Whisper, gpt-4o, NGINX, and FFmpeg, streaming to 5M+ viewers over 27 broadcasting channels.",
    delay: "0.5s",
    achievements: [
      "Implemented a real-time aviation system in Python with a microservice architecture, achieving 700+ TPS, leveraging Kafka event streaming, Redis caching, and Kubernetes orchestration while maintaining data integrity via PostgreSQL.",
      "Engineered a real-time AI football commentary translator using Whisper, OpenAI gpt-4o, NGINX, and FFmpeg to translate live audio into multiple languages, streaming to 5M+ viewers over 27 broadcasting channels via HLS and SRT protocols.",
      "Directed end-to-end refactoring of legacy petrochemical systems with Python, Node.js services and Elasticsearch, resulting in a 40% cost reduction and a substantial drop in support tickets through improved reliability and efficiency.",
      "Spearheaded automation of statistical reports using Python, Docker, MariaDB, S3 that generated charts and distributed them to stakeholders via email, cutting manual effort by 16+ hours per week, ensuring timely data-driven decision making.",
      "Mentored 2 developers and 4 interns to build different full-stack solutions with FastAPI services and Next.js/React UI to streamline data management, increasing efficiency across 4 departments by 60%.",
    ],
    hasTestimonials: true,
  },
  {
    title: "SDE Intern",
    company: "NoBroker Technologies Pvt. Ltd.",
    logo: "/images/company/Nobroker.png",
    duration: "May 09, 2022 - July 08, 2022",
    compURL: "https://www.nobroker.in/",
    text: "Developed a dynamic Tree Visualizer using React.js and Redux covering a catalog of 20+ services, improving understanding and decision-making.",
    delay: "1s",
    achievements: [
      "Built a dynamic Tree Visualizer using React.js and Redux covering a comprehensive catalog of 20+ services, improving understanding and decision-making.",
      "Devised node management capabilities for concurrent users using Java Spring Boot, ensuring seamless data updates, reducing conflicts by 80%.",
      "Consolidated network hierarchies, eliminating 95% of data inconsistencies, while streamlining data export processes.",
      "Boosted data handling efficiency by 60% through bulk updates via CSV file uploads and downloads slashing manual work.",
    ],
  },
  {
    title: "UI Development Intern",
    company: "Dotgo Pvt. Ltd.",
    logo: "/images/company/dotgo.jpg",
    duration: "May 03, 2021 - June 30, 2021",
    compURL: "https://dotgo.com/",
    text: "Enhanced the user onboarding experience by adding filters for country selection and search functionalities for carriers enabling quick user navigation.",
    delay: "1.5s",
    achievements: [
      "Enhanced the user onboarding experience by adding filters for country selection and search functionalities for carriers.",
      "Implemented advanced filtering and nested search features, allowing users to efficiently navigate through the data.",
      "Enhanced search functionality with alphabetical sorting that persists through filters, enabling quicker user navigation.",
    ],
  },
];

const otherExperiences = [
  {
    title: "Freelance Mentor",
    src: "/images/company/nxtwave.png",
    href: "https://www.ccbp.in/",
    achievements: [
      "Consistent resolution of learner queries in Node.js, React.js, SQL, and Python.",
      "Fostered learner excellence on the platform.",
    ],
  },
  {
    title: "Hacktoberfest '21",
    src: "/images/extra/hacktoberfest.png",
    href: "https://hacktoberfest.digitalocean.com/",
    achievements: [
      "Contributed to several Open Source projects.",
      "Successfully submitted and got approved for 7 PR's.",
    ],
  },
  {
    title: "GREAT STEP '19",
    src: "/images/extra/greatstep.jpg",
    href: "https://www.facebook.com/greatstep/",
    achievements: [
      "Event Manager at the Departmental Fest.",
      "Handled the smooth flow of events such as Geobotics.",
      "Managed accomodation of participants.",
    ],
  },
  {
    title: "Google Cloud Ready",
    src: "/images/extra/cloudready.webp",
    href: "https://www.cloudskillsboost.google/public_profiles/4df25a7d-f70f-4651-a3d3-3754910858e6",
    achievements: [
      "Successfully achieved the penultimate milestone.",
      "Got accustomed with the various function of GCP and the usage of Qwiklabs.",
    ],
  },
];

const ExperienceSection = memo(
  ({ title, children }: { title: string; children: React.ReactNode }) => (
    <>
      <h1
        className="experience-heading"
        style={{ marginTop: title === "Work" ? "-0.5rem" : "1.5rem" }}
      >
        {title}
      </h1>
      <div className="experience-cards">{children}</div>
    </>
  )
);

ExperienceSection.displayName = "ExperienceSection";

const Experience: React.FC = () => {
  return (
    <div className="experience">
      <ExperienceSection title="Work">
        {workExperiences.map((exp, index) => (
          <ExperienceCard
            key={exp.company}
            title={exp.title}
            company={exp.company}
            logo={exp.logo}
            duration={exp.duration}
            compURL={exp.compURL}
            text={exp.text}
            delay={exp.delay}
          >
            {exp.hasTestimonials && (
              <>
                <h2>Testimonials</h2>
                <TCGTestimonials />
              </>
            )}
            <h2>Achievements</h2>
            <ul>
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </ExperienceCard>
        ))}
      </ExperienceSection>

      <ExperienceSection title="Others">
        {otherExperiences.map((exp, index) => (
          <Card key={exp.title} title={exp.title} src={exp.src} href={exp.href}>
            <ul>
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </Card>
        ))}
      </ExperienceSection>
    </div>
  );
};

export default Experience;
