import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { Shared } from "./PageTransition";
import SplitText from "./SplitText";
import "@/styles/components.scss";

interface IPageHeaderProps {
	title: string;
	image: string;
}

const PageHeader: React.FC<IPageHeaderProps> = ({ title, image }) => {
	return (
		<div className="page-header">
			<Link
				href="/"
				aria-label="Back to navigation"
				transitionTypes={["nav-back"]}
			>
				<FaArrowLeft size={25} className="back-arrow" />
			</Link>
			<h1>
				<SplitText text={title} delay={0.1} />
			</h1>
			<Shared name={`badge-${image}`}>
				<div
					className="page-header-badge"
					style={{ background: `url(${image})` }}
				></div>
			</Shared>
		</div>
	);
};

export default PageHeader;
