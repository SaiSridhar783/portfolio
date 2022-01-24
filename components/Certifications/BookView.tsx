import { ListItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
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
		<motion.div
			style={{ position: "relative"}}
			whileInView={{ left: [200, 0] }}
		>
			<ListItem
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				width="100%"
				bg="rgba(0,0,0,0.1)"
				p="1rem"
				maxH="5rem"
				minH="5rem"
				overflow="hidden"
				display="flex"
				alignItems="center"
				borderBottom="1px solid black"
				_hover={{ filter: "contrast(1.5)", bg: "rgba(0,0,0,0.4)" }}
				_before={{
					content: "counter(list)",
					background: "#53bf89",
					fontFamily: "Nunito, sans-serif",
					color: "#fff",
					fontSize: "13px",
					textAlign: "center",
					borderRadius: "50%",
					minWidth: "2.2em",
					minHeight: "2.2em",
					lineHeight: "2.3em",
					display: "inline-block",
					mr: "1em",
				}}
			>
				{parsedItem.name}
			</ListItem>
		</motion.div>
	);
};

export default BookView;
