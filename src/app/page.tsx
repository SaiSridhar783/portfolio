import Link from "next/link";
import Person from "../components/Person";
import "@/styles/homepage.scss";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-intro">
        <h1 className="home-hello">You found me!</h1>
        <h2>
          I am&nbsp;
          <span color="blue.400">Sai Sridhar Akula</span>, a proficient Software
          Engineer skilled in building scalable and reliable applications.
        </h2>
        <Link href="/home" passHref>
          <button type="button">Dive In!</button>
        </Link>
      </div>

      {/* Floating Person */}
      <div className="floating-person">
        <Person height="350" width="400" />
      </div>
    </div>
  );
};

export default Home;
