import "@/styles/components.scss";

interface ICertiTabProps {
	title: string;
}

const CertiTab: React.FC<ICertiTabProps> = ({ title }) => {
	return <div className="certi-tab">{title}</div>;
};

export default CertiTab;
