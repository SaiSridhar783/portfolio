interface IInfoCardProps {
	orientation: "left" | "right";
	children: React.ReactNode;
}

const InfoCard: React.FC<IInfoCardProps> = ({ orientation, children }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignSelf: orientation === "left" ? "flex-start" : "flex-end",
				width: "85%",
				backgroundColor: "#ffffff05",
				padding: "1rem",
				marginTop: "1.5rem",
				textAlign: orientation,
				fontSize: "0.9rem",
				borderRight:
					orientation === "left" ? "3px solid whitesmoke" : "none",
				borderLeft:
					orientation === "right" ? "3px solid whitesmoke" : "none",
				borderTopRightRadius: orientation === "left" ? "10px" : 0,
				borderBottomRightRadius: orientation === "left" ? "10px" : 0,
				borderTopLeftRadius: orientation === "right" ? "10px" : 0,
				borderBottomLeftRadius: orientation === "right" ? "10px" : 0,
			}}
			className={orientation === "left" ? "card-left" : "card-right"}
		>
			{children}
			<span className="info-card-arrow"></span>
		</div>
	);
};

export default InfoCard;
