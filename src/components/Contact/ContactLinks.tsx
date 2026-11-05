"use client";

import {
	FaFacebookF,
	FaFileAlt,
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import type { IconType } from "react-icons";

type ContactLink = {
	label: string;
	handle: string;
	href: string;
	icon: IconType;
	brand: string;
};

const primary: ContactLink[] = [
	{
		label: "LinkedIn",
		handle: "akula-sai-sridhar",
		href: "https://www.linkedin.com/in/akula-sai-sridhar/",
		icon: FaLinkedinIn,
		brand: "#0a66c2",
	},
	{
		label: "GitHub",
		handle: "SaiSridhar783",
		href: "https://github.com/SaiSridhar783",
		icon: FaGithub,
		brand: "#8b949e",
	},
	{
		label: "Résumé",
		handle: "View on Google Drive",
		href: "https://drive.google.com/file/d/1UA8ROT6MRdFNf5U26B7J9Y2zdZeo5WA6/view?usp=drive_link",
		icon: FaFileAlt,
		brand: "#34d399",
	},
];

const secondary: ContactLink[] = [
	{
		label: "Instagram",
		handle: "redhot_deadshot",
		href: "https://www.instagram.com/redhot_deadshot/",
		icon: FaInstagram,
		brand: "#e1306c",
	},
	{
		label: "Twitter",
		handle: "ShadowKiller783",
		href: "https://twitter.com/ShadowKiller783",
		icon: FaTwitter,
		brand: "#1da1f2",
	},
	{
		label: "Facebook",
		handle: "ShadowKiller783",
		href: "https://www.facebook.com/ShadowKiller783",
		icon: FaFacebookF,
		brand: "#4267b2",
	},
];

const brandStyle = (brand: string) =>
	({ "--brand": brand }) as React.CSSProperties;

// Feed the cursor position to CSS for the spotlight
const track = (e: React.PointerEvent<HTMLElement>) => {
	const r = e.currentTarget.getBoundingClientRect();
	e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
	e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

// Where to find me: big cards for work profiles, compact pills for social
const ContactLinks: React.FC = () => {
	return (
		<div className="contact-links">
			<div className="link-cards">
				{primary.map(({ label, handle, href, icon: Icon, brand }) => (
					<a
						key={label}
						className="link-card"
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						style={brandStyle(brand)}
						onPointerMove={track}
					>
						<Icon className="link-watermark" aria-hidden />
						<span className="link-icon">
							<Icon />
						</span>
						<span className="link-text">
							<span className="link-label">{label}</span>
							<span className="link-handle">{handle}</span>
						</span>
						<FiArrowUpRight className="link-arrow" />
					</a>
				))}
			</div>
			<div className="link-pills">
				{secondary.map(({ label, href, icon: Icon, brand }) => (
					<a
						key={label}
						className="link-pill"
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						style={brandStyle(brand)}
					>
						<Icon /> {label}
					</a>
				))}
			</div>
		</div>
	);
};

export default ContactLinks;
