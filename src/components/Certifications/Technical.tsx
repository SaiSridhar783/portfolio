import Image from "next/image";
import certiJSON from "../../data/certificates.json";
import "@/styles/certifications.scss";

type ITechnicalProps = {
	makeLink?: boolean;
} & (typeof certiJSON)[0];

const Technical: React.FC<ITechnicalProps> = ({ makeLink, ...props }) => {
	return !makeLink ? (
		<div className="tech-card">
			<div className="tech-card-top">
				<Image
					src={props.logo}
					alt={props.name}
					height={80}
					width={80}
					layout="intrinsic"
					className="edu-logo"
				/>
				<p
					style={{
						fontWeight: 700,
						fontSize: "1.2rem",
						marginLeft: "0.5rem",
					}}
				>
					{props.institution}
				</p>
			</div>
			<div className="tech-card-bottom">
				<p>{props.name}</p>
			</div>
			<div className="tech-card-last">
				<p>Click the list item to learn more!</p>
			</div>
		</div>
	) : (
		<a target="_blank" href={props.link} className="tech-card">
			<div className="tech-card-top">
				<Image
					src={props.logo}
					alt={props.name}
					height={80}
					width={80}
					layout="intrinsic"
					className="edu-logo"
				/>
				<p
					style={{
						fontWeight: 700,
						fontSize: "1.2rem",
						marginLeft: "0.5rem",
					}}
				>
					{props.institution}
				</p>
			</div>
			<div className="tech-card-bottom">
				<p>{props.name}</p>
			</div>
			<div className="tech-card-last">
				<p>Click the list item to learn more!</p>
			</div>
		</a>
	);
};

export default Technical;
