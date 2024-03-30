import Link from "next/link";
import Person from "../components/Person";
import "@/styles/homepage.scss";

const Home: React.FC = () => {
	return (
		<div className="home-container">
			<div className="home-intro">
				<h1 className="home-hello">Hello There!</h1>
				<h2>
					I am&nbsp;
					<span color="blue.400">Akula Sai Sridhar</span>, a Fullstack
					Javascript Developer skilled in building scalable
					appilcations.
				</h2>
				<Link href="/home" passHref>
					<button type="button">Click Me!</button>
				</Link>
			</div>

			{/* Floating Person */}
			<div className="floating-person">
				<Person height="420" width="450" />
			</div>
		</div>
	);
};

export default Home;
