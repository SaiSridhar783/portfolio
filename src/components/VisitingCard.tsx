"use client";
import Image from "next/image";
import { Parallax } from "react-next-parallax";

interface IVisitingCardProps {
	company: string;
	compURL: string;
	title: string;
	logo: string;
	duration: string;
}

const VisitingCard: React.FC<IVisitingCardProps> = ({
	company,
	title,
	logo,
	duration,
	compURL,
}) => {
	return (
		<Parallax
			className="parallax"
			lineGlareEnable={false}
			spotGlareEnable={false}
		>
			<div className="visiting-card">
				<a
					className="company-text"
					target="_blank"
					rel="noreferrer noopener"
					href={compURL}
				>
					<Image
						src={logo}
						alt={company}
						width={40}
						height={40}
						className="company-logo"
					/>

					<p>{company}</p>
				</a>
				<div className="card-title">{title}</div>
				<div className="card-duration">{duration}</div>
			</div>
		</Parallax>
	);
};

export default VisitingCard;
