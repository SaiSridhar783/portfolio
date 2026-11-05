import Tilt from "./Tilt";
import "@/styles/errors.css";

interface IErrorScreenProps {
	code: string;
	title: string;
	message: React.ReactNode;
	children?: React.ReactNode; // action buttons
}

// Big glitching status code; each "0" becomes an orbiting ring
const ErrorScreen: React.FC<IErrorScreenProps> = ({
	code,
	title,
	message,
	children,
}) => {
	return (
		<main className="error-screen">
			<Tilt className="error-code-wrap" max={12}>
				<h1 className="error-code" aria-label={code}>
					{[...code].map((char, i) =>
						char === "0" ? (
							<span
								key={i}
								className="error-orbit"
								style={{ "--i": i } as React.CSSProperties}
								aria-hidden
							>
								<span className="orbit-track">
									<i />
								</span>
							</span>
						) : (
							<span
								key={i}
								className="error-char"
								data-char={char}
								style={{ "--i": i } as React.CSSProperties}
								aria-hidden
							>
								{char}
							</span>
						)
					)}
				</h1>
			</Tilt>
			<h2 className="error-title">{title}</h2>
			<p className="error-message">{message}</p>
			<div className="error-actions">{children}</div>
		</main>
	);
};

export default ErrorScreen;
