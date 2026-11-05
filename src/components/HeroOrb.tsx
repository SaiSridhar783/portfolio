import Image from "next/image";
import Tilt from "./Tilt";
import "@/styles/hero-orb.css";

// Tech icons riding the two orbits (files in /public/images/lang)
const inner = ["python", "typescript", "react"];
const outer = ["docker", "fastapi", "javascript", "mongodb", "nodejs"];

function Orbit({ icons, className }: { icons: string[]; className: string }) {
	return (
		<div className={`orbit ${className}`}>
			{icons.map((icon, i) => (
				<span
					key={icon}
					className="orbit-node"
					style={{ "--a": `${(360 / icons.length) * i}deg` } as React.CSSProperties}
				>
					<Image
						src={`/images/lang/icons8-${icon}.svg`}
						alt=""
						width={48}
						height={48}
						loading="eager"
					/>
				</span>
			))}
		</div>
	);
}

// Animated emblem at the centre of the landing page: a glowing </> core,
// gradient rings and orbiting tech icons. Purely decorative.
const HeroOrb: React.FC<{ size?: string }> = ({ size }) => {
	return (
		<Tilt max={10}>
			<div
				className="hero-orb"
				style={size ? ({ "--size": size } as React.CSSProperties) : undefined}
				aria-hidden
			>
				<div className="orb-glow" />
				<svg className="orb-rings" viewBox="0 0 400 400">
					<defs>
						<linearGradient id="orb-arc" x1="0" y1="0" x2="1" y2="1">
							<stop offset="0%" stopColor="var(--accent)" />
							<stop offset="60%" stopColor="var(--aurora-2)" />
							<stop offset="100%" stopColor="var(--aurora-3)" stopOpacity="0" />
						</linearGradient>
					</defs>
					<circle className="ring-faint" cx="200" cy="200" r="190" />
					<circle className="ring-base" cx="200" cy="200" r="140" />
					<circle className="ring-arc" cx="200" cy="200" r="140" />
					<circle className="ring-arc ring-arc-outer" cx="200" cy="200" r="190" />
					<circle className="ring-faint" cx="200" cy="200" r="95" />
				</svg>
				<Orbit icons={inner} className="orbit-inner" />
				<Orbit icons={outer} className="orbit-outer" />
				<div className="orb-core">
					<span>&lt;/&gt;</span>
				</div>
			</div>
		</Tilt>
	);
};

export default HeroOrb;
