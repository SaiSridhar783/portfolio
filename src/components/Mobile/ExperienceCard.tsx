import Image from "next/image";
import Popover from "../Popover";
import { FaArrowAltCircleRight } from "react-icons/fa";

interface IExperienceCardProps {
	title: string;
	company: string;
	logo: string;
	duration: string;
	compURL: string;
	text: string;
	delay?: string;
	children: React.ReactNode;
}

const ExperienceCard: React.FC<IExperienceCardProps> = ({
	children,
	...props
}) => {
	return (
		<div
			className="experience-card"
			style={{ animationDelay: props.delay }}
		>
			<div className="logo-box">
				<a
					href={props.compURL}
					target="_blank"
					rel="noreferrer noopener"
				>
					<Image
						src={props.logo}
						alt={props.title}
						height={50}
						width={50}
					/>
				</a>
				<p>{props.company}</p>
			</div>
			<div className="info-box">
				<p className="title">{props.title}</p>
				<Popover hide id={props.title}>
					{children}
				</Popover>
				<p className="text">{props.text}</p>
				<div className="bottom">
					<button
						type="button"
						className="learn-more"
						// @ts-ignore
						popovertarget={props.title}
					>
						Learn More <FaArrowAltCircleRight size={12} />
					</button>
					<p className="duration">{props.duration}</p>
				</div>
			</div>
		</div>
	);
};

export default ExperienceCard;
