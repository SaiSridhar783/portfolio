import { memo } from "react";
import ExperienceCard from "@/components/Mobile/ExperienceCard";
import Card from "@/components/Card";
import Image from "next/image";
import "@/styles/experience.css";
import TCGTestimonials from "@/components/Experience/TCGTestimonials";
import PageTransition from "@/components/PageTransition";
import { workExperiences } from "@/data/experience";

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
    <PageTransition>
      <div className="experience">
        <ExperienceSection title="Work">
          {workExperiences.map((exp, index) => (
            <ExperienceCard
              key={`${exp.company}-${exp.title}`}
              title={exp.title}
              company={exp.company}
              logo={exp.logo}
              duration={exp.duration}
              compURL={exp.compURL}
              text={exp.text}
              // Stagger by position, capped so later entries do not wait long
              delay={`${Math.min(index + 1, 5) / 10}s`}
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
    </PageTransition>
  );
};

export default Experience;
