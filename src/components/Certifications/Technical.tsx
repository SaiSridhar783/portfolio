import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import certiJSON from "../../data/certificates.json";
import "@/styles/certifications.scss";

type ITechnicalProps = {
	makeLink?: boolean;
} & (typeof certiJSON)[0];

// Preview card in the book's hover panel; a link card in the touch list
const Technical: React.FC<ITechnicalProps> = ({ makeLink, ...props }) => {
	const body = (
		<>
			<div className="tech-card-top">
				<Image
					src={props.logo}
					alt={props.institution}
					height={80}
					width={80}
					className="edu-logo"
				/>
				<p className="card-institute">{props.institution}</p>
			</div>
			<div className="tech-card-bottom">
				<p className="card-name">{props.name}</p>
			</div>
			<div className="tech-card-last">
				{makeLink ? (
					<p className="card-link">
						View certificate <FiArrowUpRight />
					</p>
				) : (
					<p>Click the list item to learn more!</p>
				)}
			</div>
		</>
	);

	return makeLink ? (
		<a target="_blank" rel="noopener noreferrer" href={props.link} className="tech-card">
			{body}
		</a>
	) : (
		<div className="tech-card">{body}</div>
	);
};

export default Technical;
