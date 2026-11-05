import Link from "next/link";
import Person from "../components/Person";
import PageTransition, { Shared } from "@/components/PageTransition";
import SplitText from "@/components/SplitText";
import Magnetic from "@/components/Magnetic";
import "@/styles/homepage.scss";

const Home: React.FC = () => {
  return (
    <PageTransition>
      <div className="home-container">
        <div className="home-intro">
          <p className="home-eyebrow">Software Engineer · Fullstack</p>
          <h1 className="home-hello">
            <SplitText text="You hit the right endpoint." delay={0.15} />
          </h1>
          <h2>
            I&apos;m <span>Sai Sridhar Akula</span>, a fullstack engineer
            who builds real-time systems that scale, like an AI commentary
            translator streamed live to 5M+ viewers.
          </h2>
          <Magnetic>
            <Link href="/home" transitionTypes={["nav-forward"]}>
              <span className="cta">Dive In!</span>
            </Link>
          </Magnetic>
        </div>

        {/* Floating Person */}
        <Shared name="person">
          <div className="floating-person">
            <Person height="350" width="400" />
          </div>
        </Shared>
      </div>
    </PageTransition>
  );
};

export default Home;
