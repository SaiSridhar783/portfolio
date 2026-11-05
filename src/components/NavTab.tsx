import Link from "next/link";
import Magnetic from "./Magnetic";
import { Shared } from "./PageTransition";

interface INavTabProps {
	title: string;
	image: string;
	href: string;
	delay?: number;
	link?: boolean;
	style?: React.CSSProperties;
}

const NavTab: React.FC<INavTabProps> = ({
	title,
	image,
	href,
	delay = 0,
	style,
}) => {
	return (
		<Link href={href} scroll={false} transitionTypes={["nav-forward"]}>
			<Magnetic strength={0.2}>
				<Shared name={`badge-${image}`}>
					<div
						style={
							{
								background: image ? `url(${image})` : "gray",
								"--delay": delay + "s",
								...style,
							} as React.CSSProperties
						}
						className="nav-tab"
					>
						<p className="nav-tab-title">{title}</p>
					</div>
				</Shared>
			</Magnetic>
		</Link>
	);
};

export default NavTab;
