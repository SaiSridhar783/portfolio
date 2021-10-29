import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "./ActiveLink";
import MainLink from "next/link";
import Anime, { anime } from "react-animejs-wrapper";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

const Navbar: FunctionComponent = () => {
	const { pathname } = useRouter();

	return (
		<Flex
			flexDir={{ base: "row-reverse", md: "row" }}
			py="1rem"
			px="2rem"
			bgColor={pathname === "/" ? "transparent" : "#0d4021"}
			justifyContent="space-between"
			color="gray.200"
			w="100vw"
			position="fixed"
		>
			<Anime
				config={{
					keyframes: [{ opacity: 0 }, { opacity: 1 }],
					duration: 1000,
					easing: "easeOutExpo",
				}}
			>
				<Box
					_hover={{ cursor: "pointer" }}
					border={{ base: "none", md: "3.5px solid #089c42" }}
					p="0.4rem"
					fontSize="1.3rem"
					fontWeight="bold"
					borderRadius="5px"
				>
					<MainLink href="/" passHref={true}>
						<div>
							SS <span>.</span>
						</div>
					</MainLink>
				</Box>
			</Anime>

			<Flex d={{ base: "none", md: "flex" }} mr="0.5rem">
				<Anime
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-around",
						width: "500px",
					}}
					config={{
						translateX: [50, 0],
						translateY: [-50, 0],
						scale: [0, 1],
						loop: false,
						delay: anime.stagger(100, { start: 200 }),
					}}
				>
					<div className="nav-link">
						<Link activeClassName="active" href="/about">
							<Text>Experience</Text>
						</Link>
					</div>
					<div className="nav-link">
						<Link activeClassName="active" href="/projects">
							<Text>Projects</Text>
						</Link>
					</div>
					<div className="nav-link">
						<Link activeClassName="active" href="/certifications">
							<Text>Certifications</Text>
						</Link>
					</div>
					<div className="nav-link">
						<Link activeClassName="active" href="/contact">
							<Text>Contact</Text>
						</Link>
					</div>
					<div className="nav-link">
						<a
							href="https://drive.google.com/file/d/1PLogcZHSrf_AM1c7WIeLbnrxRQ6CmA9M/view?usp=sharing"
							target="_blank"
							rel="noreferrer"
						>
							Resume
						</a>
					</div>
				</Anime>
			</Flex>
		</Flex>
	);
};

export default Navbar;
