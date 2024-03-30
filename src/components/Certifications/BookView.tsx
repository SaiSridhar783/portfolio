import "@/styles/certifications.scss";

interface IBookViewProps {
	item: string;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
	href?: string;
}

const BookView: React.FC<IBookViewProps> = ({
	item,
	onMouseEnter,
	onMouseLeave,
	href = "#",
}) => {
	const parsedItem = JSON.parse(item);
	return (
		<li
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			className="book-view"
		>
			<a href={href} target={href === "#" ? "_self" : "_blank"}>
				{parsedItem.name}
			</a>
		</li>
	);
};

export default BookView;
