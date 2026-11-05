import Image from "next/image";
import eduJSON from "@/data/education.json";

type IEducationProps = (typeof eduJSON)[0];

const Education: React.FC<IEducationProps> = (props) => {
	return (
		<div className="edu-card">
			<div className="edu-card-top">
				<Image
					src={props.logo}
					alt={props.institute}
					height={60}
					width={60}
					className="edu-logo"
				/>
				<p className="card-institute">{props.institute}</p>
			</div>
			<div className="edu-bottom">
				<p className="card-name">{props.name}</p>
				<time className="card-year">{props.year}</time>
			</div>
			<div className="edu-bottom card-meta">
				<p>
					<span>Stream</span> {props.stream}
				</p>
				{props.Percentage && (
					<p>
						<span>Percentage</span> {props.Percentage}
					</p>
				)}
				{props.CGPA && (
					<p>
						<span>CGPA</span> {props.CGPA}
					</p>
				)}
			</div>
		</div>
	);
};

export default Education;
