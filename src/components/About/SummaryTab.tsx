import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import "@/styles/about.scss";

interface ISummaryTabProps {
	children: React.ReactNode;
	linkText: string;
	link: string;
	style: React.CSSProperties;
}

const SummaryTab: React.FC<ISummaryTabProps> = ({
	children,
	link,
	linkText,
	style,
}) => {
	return (
		<p className="summary-tab" style={style}>
			{children}
			<Link href={link}>
				<span className="link">
					{linkText} <FaChevronRight size={15} />
				</span>
			</Link>
		</p>
	);
};

export default SummaryTab;
