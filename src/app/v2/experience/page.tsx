import { Metadata } from "next";
import Card from "@/components/Card";
import ExperienceCard from "@/components/Mobile/ExperienceCard";

export const metadata: Metadata = {
	title: "Experience of Sai Sridhar",
};

const ExperienceMob: React.FC = () => {
	return (
		<div className="experience-mob">
			<p className="experience-heading">Work</p>
			<div className="experience-cards">
				<ExperienceCard
					title="Software Consultant"
					company="TCG Digital Solutions Pvt. Ltd."
					logo="/images/company/tcg.png"
					duration="Aug 01, 2023 - Present"
					compURL="https://www.tcgdigital.com/"
					text="Played a crucial role in designing and developing several scalable and reusable frameworks, streamlining new project initiation, and enhancing existing application performance with an integrated system for monitoring and alerts."
					delay="0s"
				>
					<ul>
						<li>
							Played a crucial role in designing and developing
							several scalable and reusable frameworks,
							streamlining new project initiation, and enhancing
							existing application performance with an integrated
							system for monitoring and alerts.
						</li>
						<li>
							Built containerized services for data production and
							leveraged Kafka for efficient message handling,
							leading to reduced errors and improved application
							performance.
						</li>
						<li>
							Streamlined user experience and refined audits
							through UI/logic enhancements for an internal
							service used widely.
						</li>
						<li>
							Quickly mastered the internal low-code platform,
							accelerating dashboard development and gathering
							data insights.
						</li>
						<li>
							Engineered a real-time video processing application
							that achieved low latency, optimizing performance
							for live videos.
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
					<ul>
						<li>
							Developed an interactive Tree Visualizer for the
							service catalog, empowering users to analyze service
							relations quickly.
						</li>
						<li>
							Implemented a GUI with node management capabilities
							for the service catalog, enhancing data update
							functionalities.
						</li>
						<li>
							Enabled seamless data reorganization through ability
							to merge network hierarchies and export data in CSV
							format.
						</li>
						<li>
							Enhanced data management of the catalog by
							provisioning bulk updates via a downloadable and
							uploadable CSV file.
						</li>
					</ul>
				</ExperienceCard>
				<ExperienceCard
					title="UI Development Intern"
					company="Dotgo Pvt. Ltd."
					logo="/images/company/dotgo.jfif"
					duration="May 03, 2021 - June 30, 2021"
					compURL="https://dotgo.com/"
					text="Improved user onboarding experience by adding
					functionalities to filter by country and search for
					specific carriers."
					delay="1s"
				>
					<ul>
						<li>
							Improved user onboarding experience by adding
							functionalities to filter by country and search for
							specific carriers.
						</li>
						<li>
							Introduced advanced filtering with nested search
							functionalities, allowing users to efficiently
							search through the data.
						</li>
						<li>
							Enhanced search functionality with alphabetical
							sorting that persists through filters, allowing
							quicker user navigation.
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

export default ExperienceMob;
