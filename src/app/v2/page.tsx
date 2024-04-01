import PersonMob from "@/components/Mobile/PersonMob";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

const Home2: React.FC = () => {
	return (
		<div className="home-mob">
			<div className="home-container">
				<div>
					<p className="hello">Hello There!</p>
					<p className="intro">
						I am&nbsp;<span>Akula Sai Sridhar</span>, a Fullstack
						Javascript Developer skilled in building scalable
						appilcations.
					</p>
				</div>

				<PersonMob
					className="float-person-home"
					height="300"
					width="350"
				/>

				<Link href="/v2/about">
					<button type="button">
						Get to know me! <FaArrowCircleRight />
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Home2;