import { ChevronRightIcon } from "@chakra-ui/icons";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverArrow,
	PopoverCloseButton,
	PopoverProps,
	Text,
} from "@chakra-ui/react";

interface IPopupProps {
	heading: string;
}

const Popup: React.FC<IPopupProps & PopoverProps> = ({
	children,
	heading,
	...props
}) => {
	return (
		<Popover {...props}>
			<PopoverTrigger>
				<Text
					_hover={{
						cursor: "pointer",
						color: "white",
						transition: "color 300ms",
					}}
					pr="3rem"
					mt="2rem"
					color="dimgray"
				>
					{heading} <ChevronRightIcon />
				</Text>
			</PopoverTrigger>
			<PopoverContent>
				<PopoverArrow />
				<PopoverCloseButton />
				<PopoverBody>{children}</PopoverBody>
			</PopoverContent>
		</Popover>
	);
};

export default Popup;
