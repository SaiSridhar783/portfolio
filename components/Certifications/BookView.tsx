import { ListItem } from "@chakra-ui/react";
import * as React from "react";

interface IBookViewProps {
	item: string;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
}

const BookView: React.FC<IBookViewProps> = ({
	item,
	onMouseEnter,
	onMouseLeave,
}) => {
	const parsedItem = JSON.parse(item);
	return (
		<ListItem
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			width="100%"
			bg="rgba(0,0,0,0.1)"
			p="1rem"
			borderBottom="1px solid black"
			_hover={{filter: "contrast(1.5)", bg: "rgba(0,0,0,0.4)"}}
			_before={{
				content: "counter(list)",
				background: "#53bf89",
				fontFamily: "Nunito, sans-serif",
				color: "#fff",
				fontSize: "13px",
				textAlign: "center",
				borderRadius: "50%",
				width: "2.2em",
				height: "2.2em",
				lineHeight: "2.3em",
				display: "inline-block",
				mr: "1em",
			}}
		>
			{parsedItem.name}
		</ListItem>
	);
};

export default BookView;
