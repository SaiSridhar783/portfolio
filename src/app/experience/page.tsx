import ExperienceCard from "@/components/Mobile/ExperienceCard";
import Card from "@/components/Card";
import Image from "next/image";
import "@/styles/experience.scss";
import TCGTestimonials from "@/components/Experience/TCGTestimonials";

const Experience: React.FC = () => {
	return (
		<div className="experience">
			<h1 className="experience-heading" style={{ marginTop: "-0.5rem" }}>
				Work
			</h1>
			<div className="experience-cards">
				<ExperienceCard
					title="Software Consultant"
					company="TCG Digital Solutions Pvt. Ltd."
					logo="/images/company/tcgdigital.jpg"
					duration="Aug 01, 2023 - Present"
					compURL="https://www.tcgdigital.com/"
					text="Developed a real-time distributed solution, utilizing Kafka and Redis, deployed on Kubernetes achieving a throughput of 700+ requests per second."
					delay="0.5s"
				>
					<h2>Testimonials</h2>
					<TCGTestimonials />
					<h2>Achievements</h2>
					<ul>
						<li>
							Developed a real-time distributed processing
							solution following a microservicses architecture,
							utilizing Kafka and Redis, deployed on Kubernetes
							achieving a throughput of 700+ requests per second.
						</li>
						<li>
							Led a team in developing a full-stack solution to
							streamline functional requirements and cost
							calculations for the company’s flagship product,
							increasing efficiency by up to 30% and successfully
							meeting all project deadlines.
						</li>
						<li>
							Designed and implemented a versatile solution to
							generate statistical charts and email them to
							relevant stakeholders.
						</li>
						<li>
							Product analysis from deployment to functional view,
							creating documentation and diagrams for easy
							understanding.
						</li>
						<li>
							Engineered real-time streaming pipelines to cloud
							GPU services based on RTMP protocol achieving low
							latency.
						</li>
					</ul>
				</ExperienceCard>
				<ExperienceCard
					title="SDE Intern"
					company="NoBroker Technologies Pvt. Ltd."
					logo="/images/company/Nobroker.png"
					duration="May 09, 2022 - July 08, 2022"
					compURL="https://www.nobroker.in/"
					text="Developed an interactive Tree Visualizer for the service catalog, empowering users to analyze service relations quickly and modify the data more efficiently."
					delay="1s"
				>
					<h2>Achievements</h2>
					<ul>
						<li>
							Developed an interactive Tree Visualizer for the
							service catalog, enabling quick analysis of service
							relationships.
						</li>
						<li>
							Implemented node management capabilities for
							multiple concurrent users, enhancing data update
							functionalities.
						</li>
						<li>
							Enabled seamless data reorganization by
							incorporating network hierarchy merging and CSV data
							export features.
						</li>
						<li>
							Enhanced service catalog data handling by supporting
							bulk updates through CSV file uploads and downloads.
						</li>
					</ul>
				</ExperienceCard>
				<ExperienceCard
					title="UI Development Intern"
					company="Dotgo Pvt. Ltd."
					logo="/images/company/dotgo.jfif"
					duration="May 03, 2021 - June 30, 2021"
					compURL="https://dotgo.com/"
					text="Enhanced the user onboarding experience by adding filters for country selection and search functionalities for carriers enabling quick user navigation."
					delay="1.5s"
				>
					<h2>Achievements</h2>
					<ul>
						<li>
							Enhanced the user onboarding experience by adding
							filters for country selection and search
							functionalities for carriers.
						</li>
						<li>
							Implemented advanced filtering and nested search
							features, allowing users to efficiently navigate
							through the data.
						</li>
						<li>
							Enhanced search functionality with alphabetical
							sorting that persists through filters, enabling
							quicker user navigation.
						</li>
					</ul>
				</ExperienceCard>
			</div>

			<h2 className="experience-heading" style={{ paddingTop: "1.5rem" }}>
				Others
			</h2>
			<div className="experience-cards">
				<Card
					title="Freelance Mentor"
					src="/images/company/nxtwave.png"
					href="https://www.ccbp.in/"
				>
					<ul>
						<li>
							Consistent resolution of learner queries in Node.js,
							React.js, SQL, and Python.
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
						<li>
							Successfully submitted and got approved for 7
							PR&apos;s.
						</li>
					</ul>
				</Card>
				<Card
					title="GREAT STEP '19"
					src="/images/extra/greatstep.jpg"
					href="https://www.facebook.com/greatstep/"
				>
					<ul>
						<li>Event Manager at the Departmental Fest.</li>
						<li>
							Handled the smooth flow of events such as Geobotics.
						</li>
						<li>Managed accomodation of participants.</li>
					</ul>
				</Card>
				<Card
					title="Google Cloud Ready"
					src="/images/extra/cloudready.webp"
					href="https://www.cloudskillsboost.google/public_profiles/4df25a7d-f70f-4651-a3d3-3754910858e6"
				>
					<ul>
						<li>
							Successfully achieved the penultimate milestone.
						</li>
						<li>
							Got accustomed with the various function of GCP and
							the usage of Qwiklabs.
						</li>
					</ul>
				</Card>
			</div>
		</div>
	);
};

export default Experience;
