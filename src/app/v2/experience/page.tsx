import { Metadata } from "next";
import Card from "@/components/Card";
import ExperienceCard from "@/components/Mobile/ExperienceCard";
import TCGTestimonials from "@/components/Experience/TCGTestimonials";

export const metadata: Metadata = {
  title: "Experience of Sai Sridhar",
};

const ExperienceMob: React.FC = () => {
  return (
    <div className="experience-mob">
      <p className="experience-heading">Work</p>
      <div className="experience-cards">
        <ExperienceCard
          title="Software Engineer"
          company="TCG Digital Solutions Pvt. Ltd."
          logo="/images/company/tcgdigital.jpg"
          duration="Aug 01, 2023 - Present"
          compURL="https://www.tcgdigital.com/"
          text="Played a crucial role in the design and development of different scalable and reusable frameworks. Streamlined new project initiation, and enhanced application performance with an integrated system for alerts and monitoring."
          delay="0s"
        >
          <TCGTestimonials />
          <h2>Achievements</h2>
          <ul>
            <li>
              Implemented a real-time aviation system in Python with a
              microservice architecture, achieving 700+ TPS, leveraging Kafka
              event streaming, Redis caching, and Kubernetes orchestration while
              maintaining data integrity via PostgreSQL.
            </li>
            <li>
              Engineered a real-time AI football commentary translator using
              Whisper, OpenAI gpt-4o, NGINX, and FFmpeg to translate live audio
              into multiple languages, streaming to 5M+ viewers over 27
              broadcasting channels via HLS and SRT protocols.
            </li>
            <li>
              Directed end-to-end refactoring of legacy petrochemical systems
              with Python, Node.js services and Elasticsearch, resulting in a
              40% cost reduction and a substantial drop in support tickets
              through improved reliability and efficiency.
            </li>
            <li>
              Spearheaded automation of statistical reports using Python,
              Docker, MariaDB, S3 that generated charts and distributed them to
              stakeholders via email, cutting manual effort by 16+ hours per
              week, ensuring timely data-driven decision making.
            </li>
            <li>
              Mentored 2 developers and 4 interns to build different full-stack
              solutions with FastAPI services and Next.js/React UI to streamline
              data management, increasing efficiency across 4 departments by
              60%.
            </li>
          </ul>
        </ExperienceCard>
        <ExperienceCard
          title="SDE Intern"
          company="NoBroker Technologies Pvt. Ltd."
          logo="/images/company/Nobroker.png"
          duration="May 09, 2022 - July 08, 2022"
          compURL="https://www.nobroker.in/"
          text="Developed an interactive Tree Visualizer for the
					service catalog, empowering users to analyze service
					relations quickly."
          delay="0.5s"
        >
          <h2>Achievements</h2>
          <ul>
            <li>
              Developed an interactive Tree Visualizer for the service catalog,
              enabling quick analysis of service relationships.
            </li>
            <li>
              Implemented node management capabilities for multiple concurrent
              users, enhancing data update functionalities.
            </li>
            <li>
              Enabled seamless data reorganization by incorporating network
              hierarchy merging and CSV data export features.
            </li>
            <li>
              Enhanced service catalog data handling by supporting bulk updates
              through CSV file uploads and downloads.
            </li>
          </ul>
        </ExperienceCard>
        <ExperienceCard
          title="UI Development Intern"
          company="Dotgo Pvt. Ltd."
          logo="/images/company/dotgo.jpg"
          duration="May 03, 2021 - June 30, 2021"
          compURL="https://dotgo.com/"
          text="Improved user onboarding experience by adding
					functionalities to filter by country and search for
					specific carriers."
          delay="1s"
        >
          <h2>Achievements</h2>
          <ul>
            <li>
              Enhanced the user onboarding experience by adding filters for
              country selection and search functionalities for carriers.
            </li>
            <li>
              Implemented advanced filtering and nested search features,
              allowing users to efficiently navigate through the data.
            </li>
            <li>
              Enhanced search functionality with alphabetical sorting that
              persists through filters, enabling quicker user navigation.
            </li>
          </ul>
        </ExperienceCard>
      </div>

      <p className="experience-heading">Others</p>
      <div className="experience-cards">
        <Card
          title="Freelance Mentor"
          src="/images/company/nxtwave.png"
          href="https://www.ccbp.in/"
        >
          <ul>
            <li>
              Consistent resolution of learner queries in Node.js, React.js,
              SQL, and Python.
            </li>
            <li>Fostered learner excellence on the platform.</li>
          </ul>
        </Card>
        <Card
          title="Hacktoberfest '21"
          src="/images/extra/hacktoberfest.png"
          href="https://hacktoberfest.digitalocean.com/"
        >
          <ul>
            <li>Contributed to several Open Source projects.</li>
            <li>Successfully submitted and got approved for 7 PR&apos;s.</li>
          </ul>
        </Card>
        <Card
          title="GREAT STEP '19"
          src="/images/extra/greatstep.jpg"
          href="https://www.facebook.com/greatstep/"
        >
          <ul>
            <li>Event Manager at the Departmental Fest.</li>
            <li>Handled the smooth flow of events such as Geobotics.</li>
            <li>Managed accomodation of participants.</li>
          </ul>
        </Card>
        <Card
          title="Google Cloud Ready"
          src="/images/extra/cloudready.webp"
          href="https://www.cloudskillsboost.google/public_profiles/4df25a7d-f70f-4651-a3d3-3754910858e6"
        >
          <ul>
            <li>Successfully achieved the penultimate milestone.</li>
            <li>
              Got accustomed with the various function of GCP and the usage of
              Qwiklabs.
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default ExperienceMob;
