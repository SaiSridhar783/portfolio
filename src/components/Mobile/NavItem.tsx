"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface INavItemProps {
	title: string;
	image: string;
	href: string;
	closeDrawer: () => void;
}

const NavItem: React.FC<INavItemProps> = (props) => {
	const pathname = usePathname();
	return (
		<Link href={"/v2" + props.href} passHref>
			<div
				className="nav-item"
				style={{
					backgroundColor:
						pathname === `/v2${props.href}`
							? "#eee"
							: "transparent",
				}}
				onClick={props.closeDrawer}
			>
				<Image
					src={props.image}
					alt={props.title}
					width={50}
					height={50}
					style={{ borderRadius: "25px" }}
				/>
				<p style={{ textTransform: "capitalize" }}>{props.title}</p>
			</div>
		</Link>
	);
};

export default NavItem;
