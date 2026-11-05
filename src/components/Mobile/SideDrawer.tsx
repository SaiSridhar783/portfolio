"use client";

import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavItem from "./NavItem";
import "@/styles/components.css";

const SideDrawer: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleDrawer = () => {
		setIsOpen((prevState) => !prevState);
	};

	useEffect(() => {
		if (!isOpen) return;
		const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [isOpen]);

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

			{isOpen && (
				<div
					className="drawer-overlay fixed inset-0 z-100 bg-black/40"
					onClick={toggleDrawer}
				/>
			)}
			<nav
				className={`side-drawer fixed top-0 left-0 z-100 h-screen w-[250px] bg-white shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] transition-all duration-500 ${
					isOpen ? "visible translate-x-0" : "invisible -translate-x-full"
				}`}
			>
				<h1>Pick a Section!</h1>
				<NavItem
					closeDrawer={toggleDrawer}
					image="/images/home.png"
					title="home"
					href="/"
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
			</nav>
		</>
	);
};

export default SideDrawer;
