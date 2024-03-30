import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	useDisclosure,
	Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavItem from "./NavItem";

interface ISideDrawerProps {
	forwardedRef?: React.Ref<HTMLDivElement>;
}

const SideDrawer: React.FC<ISideDrawerProps> = ({ forwardedRef }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Box
				position="absolute"
				top="1rem"
				left="1rem"
				colorScheme="blue"
				onClick={onOpen}
				ref={forwardedRef}
			>
				<HamburgerIcon color="whiteAlpha.800" transform="scale(1.5)" />
			</Box>

			<Drawer placement="left" onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent maxWidth="80vw">
					<DrawerHeader borderBottomWidth="1px" fontFamily="nunito">
						Pick a Section!
					</DrawerHeader>
					<DrawerBody>
						<NavItem
							image="/images/home.png"
							title="home"
							href=""
						/>
						<NavItem
							image="/images/resume.png"
							title="About Me"
							href="/about"
						/>
						<NavItem
							title="Experience"
							image="/images/experience.png"
							href="/experience"
						/>
						<NavItem
							title="Projects"
							image="/images/projects.png"
							href="/projects"
						/>
						<NavItem
							title="Certifications"
							image="/images/certifications.png"
							href="/certifications"
						/>
						<NavItem
							title="Contact Me"
							image="/images/contact.png"
							href="/contact"
						/>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default SideDrawer;
