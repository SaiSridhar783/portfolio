import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import "@/styles/about.css";

interface ISummaryTabProps {
	children: React.ReactNode;
	label: string;
	linkText: string;
	link: string;
}

const SummaryTab: React.FC<ISummaryTabProps> = ({
	children,
	label,
	link,
	linkText,
}) => {
	return (
		<div className="summary-tab reveal">
			<p className="summary-label">{label}</p>
			<p>{children}</p>
			<Link href={link} transitionTypes={["nav-forward"]}>
				<span className="link">
					{linkText} <FaChevronRight size={13} />
				</span>
			</Link>
		</div>
	);
};

export default SummaryTab;
