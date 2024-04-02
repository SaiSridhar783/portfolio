import InfoCard from "@/components/Mobile/InfoCard";
import badgesData from "@/data/badges.json";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

export const metadata: Metadata = {
	title: "About Sai Sridhar",
};

const AboutMob: React.FC = () => {
	return (
		<div className="about-mob">
			<div>
				<p className="text-head">
					<span>Akula Sai Sridhar&nbsp;</span>
					is my name.
				</p>
				<p className="text-head">Fullstack Development is my domain.</p>
			</div>
			<InfoCard orientation="left">
				I build fullstack applications that are scalable and reliable.
				My expertise lies in JavaScript and Python.
			</InfoCard>
			<InfoCard orientation="right">
				Graduated from the Indian Institute of Technology, Kharagpur
				with a Bachelor&apos;s degree in Mining Engineering.
			</InfoCard>
			<InfoCard orientation="left">
				Currently working as a Software Consultant at TCG Digital
				Solutions Pvt. Ltd.
			</InfoCard>
			{/* <InfoCard orientation="right">
				What&apos;s that? You would like to know more about me? Or
				perhaps you would like to get in touch? Connect with me!
			</InfoCard> */}
			<Link href="/v2/contact">
				<button type="button">
					Get In Touch! <FaArrowCircleRight />
				</button>
			</Link>
			<h2>My Skillset</h2>
			<div className="badges-container">
				{badgesData.map((badge, idx) => (
					<div
						key={idx}
						style={{
							padding: "0.5rem",
							backgroundColor: badge.color,
							borderRadius: "10px",
							border: "2px solid black",
						}}
					>
						<Image
							alt={badge.name}
							src={badge.icon}
							height={30}
							width={100}
							style={{ width: "auto" }}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default AboutMob;
