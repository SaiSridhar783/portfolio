import { Metadata } from "next";
import CertiTab from "@/components/CertiTab";
import Education from "@/components/Certifications/Education";
import Technical from "@/components/Certifications/Technical";
import eduJSON from "@/data/education.json";
import certiJSON from "@/data/certificates.json";

export const metadata: Metadata = {
	title: "Certifications of Sai Sridhar",
};

const CertificationsMob: React.FC = () => {
	return (
		<div className="certifications-mob">
			<CertiTab title="Education" />
			{eduJSON.map((item, idx) => (
				<Education key={idx} {...item} />
			))}

			<CertiTab title="Technical" />
			{certiJSON.map((item, idx) => (
				<Technical makeLink key={idx} {...item} />
			))}
		</div>
	);
};

export default CertificationsMob;
