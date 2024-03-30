import {
	FaFacebookF,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
	FaGithub,
} from "react-icons/fa";
import "@/styles/components.scss";

const Social: React.FC = () => {
	return (
		<div className="social-wrapper">
			<a
				className="social-button"
				href="https://www.instagram.com/redhot_deadshot/"
				target="_blank"
				rel="noreferrer noopener"
			>
				<div className="social-icon">
					<FaInstagram size={25} />
				</div>
				<span>Instagram</span>
			</a>

			<a
				className="social-button"
				href="https://www.facebook.com/ShadowKiller783"
				target="_blank"
				rel="noreferrer noopener"
			>
				<div className="social-icon">
					<FaFacebookF size={25} />
				</div>
				<span>Facebook</span>
			</a>

			<a
				className="social-button"
				href="https://twitter.com/ShadowKiller783"
				target="_blank"
				rel="noreferrer noopener"
			>
				<div className="social-icon">
					<FaTwitter size={25} />
				</div>
				<span>Twitter</span>
			</a>

			<a
				className="social-button"
				href="https://www.linkedin.com/in/akula-sai-sridhar/"
				target="_blank"
				rel="noreferrer noopener"
			>
				<div className="social-icon">
					<FaLinkedin size={25} />
				</div>
				<span>LinkedIn</span>
			</a>

			<a
				className="social-button"
				href="https://github.com/SaiSridhar783"
				target="_blank"
				rel="noreferrer noopener"
			>
				<div className="social-icon">
					<FaGithub size={25} />
				</div>
				<span>Github</span>
			</a>
		</div>
	);
};

export default Social;
