import Image from "next/image";
import { Box, Center, Heading, Text, Stack } from "@chakra-ui/react";

export default function ProjectCard() {
	return (
		<Center py={6}>
			<Box
				maxW="445px"
				w="full"
				bg="gray.900"
				boxShadow="0 0 10px 2px #1f3e4b"
				rounded="md"
				p={6}
				overflow="hidden"
			>
				<Box
					h="210px"
					bg="gray.200"
					mt={-6}
					mx={-6}
					mb={6}
					pos="relative"
				>
					<Image
						src="/images/logos/google.png"
						alt="Waka"
						layout="fill"
					/>
				</Box>
				<Stack>
					<Text
						color="green.200"
						textTransform="uppercase"
						fontWeight={800}
						fontSize="sm"
						letterSpacing={1.1}
					>
						Blog
					</Text>
					<Heading color="white" fontSize="2xl" fontFamily="body">
						Boost your conversion rate
					</Heading>
					<Text color="gray.200">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
						sed diam nonumy eirmod tempor invidunt ut labore et
						dolore magna aliquyam erat, sed diam voluptua. At vero
						eos et accusam et justo duo dolores et ea rebum.
					</Text>
				</Stack>
				<Stack mt={6} direction="row" spacing={4} align="center">
					<Stack direction="column" spacing={0} fontSize="sm">
						<Text fontWeight={600}>Achim Rolle</Text>
						<Text color="gray.200">Feb 08, 2021 · 6min read</Text>
					</Stack>
				</Stack>
			</Box>
		</Center>
	);
}
