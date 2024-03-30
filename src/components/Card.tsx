import Image from "next/image";
import "@/styles/experience.scss";

interface ICardProps {
	title: string;
	src: string;
	href: string;
	children?: React.ReactNode;
}

const Card: React.FC<ICardProps> = ({ title, src, href, children }) => {
	return (
		<div className="mini-card">
			<a
				className="mini-card__link"
				href={href}
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image src={src} height={50} width={50} alt={title} />
				<p>{title}</p>
			</a>
			<div>{children}</div>
		</div>
	);
};

export default Card;
