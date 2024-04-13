import SummaryTab from "./SummaryTab";
import Image from "next/image";
import "@/styles/about.scss";

const Overview: React.FC = () => {
	return (
		<div className="overview">
			<div className="overview-head">
				<p>
					<span>Akula Sai Sridhar&nbsp;</span>
					is my name.
				</p>
				<p>Fullstack Development is my domain.</p>
			</div>
			<div className="overview-tabs">
				<SummaryTab
					style={{
						scale: 1.2,
						translate: "-120px -14px -32px",
					}}
					link="/projects"
					linkText="Check out my projects"
				>
					I build fullstack applications that are scalable and
					reliable. My expertise lies in JavaScript and Python.
				</SummaryTab>
				<SummaryTab
					style={{
						scale: 1.2,
						translate: "0 -8px -32px",
						left: "3rem",
						top: "-3px",
					}}
					link="/certifications"
					linkText="Learn more about my education"
				>
					<span>
						Graduated from the&nbsp;
						<span
							style={{
								fontWeight: 600,
							}}
						>
							Indian Institute of Technology, Kharagpur (IIT KGP)
						</span>
						, with a Bachelor&apos;s degree in Mining Engineering.
					</span>
				</SummaryTab>
			</div>
			<div className="overview-tabs-2">
				<SummaryTab
					style={{
						scale: 1.45,
						translate: "-13rem 0 -64px",
						top: "50px",
					}}
					link="/experience"
					linkText="More about my experience"
				>
					Currently working as a Software Consultant at TCG Digital
					Solutions Pvt. Ltd.
				</SummaryTab>
				<SummaryTab
					style={{
						scale: 1.45,
						translate: "7rem 0 -64px",
						top: "50px",
					}}
					link="/contact"
					linkText="Connect with me!"
				>
					Curious to learn more about me or simply want to say hi?
					Feel free to message me anytime!
				</SummaryTab>
			</div>

			<Image
				src="/images/about/profile.png"
				alt="A cool shot of Sai"
				width={550}
				height={800}
			/>
		</div>
	);
};

export default Overview;
