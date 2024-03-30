import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Overview from "@/components/About/Overview";
import SkillsSection from "@/components/About/SkillsSection";
import BottomSection from "@/components/About/BottomSection";
import "@/styles/about.scss";

const About: React.FC = () => {
	return (
		<div className="about">
			<Link href="/home">
				<FaArrowLeft size={25} className="back-arrow" />
			</Link>
			<div className="about-content">
				<Overview />
				<SkillsSection />
				<BottomSection />
			</div>
		</div>
	);
};

export default About;
