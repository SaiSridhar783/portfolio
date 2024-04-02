"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavItem from "./NavItem";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const SideDrawer: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleDrawer = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<>
			<GiHamburgerMenu
				size={25}
				className="hamburger"
				onClick={toggleDrawer}
				style={{
					position: "fixed",
					top: "1rem",
					left: "1rem",
					zIndex: 10,
				}}
			/>

			<Drawer
				className="side-drawer"
				open={isOpen}
				onClose={toggleDrawer}
				direction="left"
			>
				<h1>Pick a Section!</h1>
				<NavItem
					closeDrawer={toggleDrawer}
					image="/images/home.png"
					title="home"
					href=""
				/>
				<NavItem
					closeDrawer={toggleDrawer}
					image="/images/resume.png"
					title="About Me"
					href="/about"
				/>
				<NavItem
					closeDrawer={toggleDrawer}
					title="Experience"
					image="/images/experience.png"
					href="/experience"
				/>
				<NavItem
					closeDrawer={toggleDrawer}
					title="Projects"
					image="/images/projects.png"
					href="/projects"
				/>
				<NavItem
					closeDrawer={toggleDrawer}
					title="Certifications"
					image="/images/certifications.jpg"
					href="/certifications"
				/>
				<NavItem
					closeDrawer={toggleDrawer}
					title="Get In Touch"
					image="/images/contact.jpg"
					href="/contact"
				/>
			</Drawer>
		</>
	);
};

export default SideDrawer;
