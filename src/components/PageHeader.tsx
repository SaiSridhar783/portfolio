import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import "@/styles/components.scss";

interface IPageHeaderProps {
	title: string;
	image: string;
}

const PageHeader: React.FC<IPageHeaderProps> = ({ title, image }) => {
	return (
		<div className="page-header">
			<Link href="/home">
				<FaArrowLeft size={25} className="back-arrow" />
			</Link>
			<h1>{title}</h1>
			<div
				className="page-header-badge"
				style={{ background: `url(${image})` }}
			></div>
		</div>
	);
};

export default PageHeader;
