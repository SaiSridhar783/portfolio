import * as React from "react";

interface ISocialProps {}

const Social: React.FC<ISocialProps> = (props) => {
	return (
		<section>
			<div className="social-wrapper">
				<div className="social-button">
					<a
						href="https://www.instagram.com/redhot_deadshot/"
						target="_blank"
						rel="noreferrer noopener"
					>
						<div className="social-icon">
							<i className="fab fa-instagram"></i>
						</div>
						<span>Instagram</span>
					</a>
				</div>

				<div className="social-button">
					<a
						href="https://www.facebook.com/ShadowKiller783"
						target="_blank"
						rel="noreferrer noopener"
					>
						<div className="social-icon">
							<i className="fab fa-facebook-f"></i>
						</div>
						<span>Facebook</span>
					</a>
				</div>

				<div className="social-button">
					<a
						href="https://twitter.com/ShadowKiller783"
						target="_blank"
						rel="noreferrer noopener"
					>
						<div className="social-icon">
							<i className="fab fa-twitter"></i>
						</div>
						<span>Twitter</span>
					</a>
				</div>

				<div className="social-button">
					<a
						href="https://www.linkedin.com/in/akula-sai-sridhar/"
						target="_blank"
						rel="noreferrer noopener"
					>
						<div className="social-icon">
							<i className="fab fa-linkedin"></i>
						</div>
						<span>LinkedIn</span>
					</a>
				</div>

				<div className="social-button">
					<a
						href="https://github.com/SaiSridhar783"
						target="_blank"
						rel="noreferrer noopener"
					>
						<div className="social-icon">
							<i className="fab fa-github"></i>
						</div>
						<span>Github</span>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Social;
