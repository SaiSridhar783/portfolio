import Link from "next/link";
import Magnetic from "../Magnetic";
import "@/styles/about.css";

const BottomSection: React.FC = () => {
	return (
		<section className="bottom-section reveal">
			<p className="connect-text">
				That&apos;s enough about me. What are you building?
			</p>
			<Magnetic>
				<Link
					href="/contact"
					className="connect-cta"
					transitionTypes={["nav-forward"]}
				>
					Let&apos;s talk
				</Link>
			</Magnetic>
			<p className="copyright">
				&copy; Copyright {new Date().getFullYear()}. Sai Sridhar Akula.
				All Rights Reserved.
			</p>
		</section>
	);
};

export default BottomSection;
