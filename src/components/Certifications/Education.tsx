import Image from "next/image";
import eduJSON from "@/data/education.json";

type IEducationProps = (typeof eduJSON)[0];

const Education: React.FC<IEducationProps> = (props) => {
	return (
		<div className="edu-card">
			<div className="edu-card-top">
				<Image
					src={props.logo}
					alt={props.name}
					height={60}
					width={60}
					className="edu-logo"
				/>
				<p style={{ fontWeight: 600, marginLeft: "0.5rem" }}>
					{props.institute}
				</p>
			</div>
			<div className="edu-bottom">
				<p style={{ fontSize: "1rem" }}>{props.name}</p>
				<time style={{ fontSize: "1.1rem" }}>{props.year}</time>
			</div>
			<div className="edu-bottom">
				<p style={{ fontSize: "1rem" }}>
					<span style={{ fontWeight: 700 }}>Stream:&nbsp;</span>
					{props.stream}
				</p>
				{props.Percentage && (
					<p>
						<span style={{ fontWeight: 700 }}>
							Percentage:&nbsp;
						</span>
						{props.Percentage}
					</p>
				)}
				{props.CGPA && (
					<p>
						<span style={{ fontWeight: 700 }}>CGPA:&nbsp;</span>
						{props.CGPA}
					</p>
				)}
			</div>
		</div>
	);
};

export default Education;
