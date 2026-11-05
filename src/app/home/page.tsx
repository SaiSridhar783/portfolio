import Person from "@/components/Person";
import NavTab from "@/components/NavTab";
import PageTransition, { Shared } from "@/components/PageTransition";
import "@/styles/homepage.scss";

export const metadata = {
	title: "Sai's Portfolio Navigation",
};

const HomePage: React.FC = () => {
	return (
		<PageTransition>
			<div className="home-wrap">
				<div className="homepanel">
					<NavTab
						title="Projects"
						image="/images/projects.png"
						href="/projects"
					/>
					<div className="float-person-nav">
						<Shared name="person">
							<div>
								<Person height="350" width="400" />
							</div>
						</Shared>
					</div>
					<NavTab
						title="Certifications"
						image="/images/certifications.jpg"
						href="/certifications"
						delay={0.05}
					/>

					<NavTab
						title="Experience"
						image="/images/experience.png"
						href="/experience"
						delay={0.1}
					/>
					<NavTab
						title="About Me"
						image="/images/resume.png"
						href="/about"
						style={{ position: "relative", top: "5rem" }}
						delay={0.15}
					/>
					<NavTab
						title="Contact Me"
						image="/images/contact.jpg"
						href="/contact"
						delay={0.2}
					/>
				</div>
			</div>
		</PageTransition>
	);
};

export default HomePage;
