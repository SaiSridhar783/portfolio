import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Overview from "@/components/About/Overview";
import SkillsSection from "@/components/About/SkillsSection";
import BottomSection from "@/components/About/BottomSection";
import Journey from "@/components/About/Journey";
import PageTransition from "@/components/PageTransition";
import "@/styles/about.scss";

const About: React.FC = () => {
	return (
		<PageTransition>
			<div className="about">
				<Link
					href="/home"
					aria-label="Back to navigation"
					transitionTypes={["nav-back"]}
				>
					<FaArrowLeft size={25} className="back-arrow" />
				</Link>
				<Overview />
				<Journey />
				<SkillsSection />
				<BottomSection />
			</div>
		</PageTransition>
	);
};

export default About;
