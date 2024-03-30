import Link from "next/link";

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
		<Link href={href} passHref>
			<div
				style={
					{
						background: image ? `url(${image})` : "gray",
						"--delay": delay + "s",
						...style,
					} as React.CSSProperties
				}
				className="icon nav-tab"
			>
				<p className="nav-tab-title">{title}</p>
			</div>
		</Link>
	);
};

export default NavTab;
