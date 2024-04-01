import Image from "next/image";
import proJSON from "@/data/projects.json";
import "@/styles/projects.scss";

type IProjectdata = {
	params: {
		slug: string;
	};
};

const mainDelay = 0;

const EachProjectMob: React.FC<IProjectdata> = ({ params }) => {
	const data = proJSON.find((pro) => pro.slug === params.slug);

	return (
		<div className="each-project-mob">
			<Image
				className="project-image"
				src={data!.image}
				alt="Waka"
				width={500}
				height={250}
				priority
				style={{
					maxHeight: "250px",
				}}
			/>

			<div className="project-info">
				<div className="info">
					<h1>{data!.name}</h1>
					<p className="project-desc">{data!.description}</p>
				</div>

				<div className="project-tech">
					{data!.languages.map((lang, idx) => (
						<div key={idx} className="tooltip">
							<span className="tooltiptext">{lang}</span>
							<Image
								src={`/images/lang/icons8-${lang}.svg`}
								alt="Waka"
								width={60}
								height={60}
								className="logo-box"
							/>
						</div>
					))}
				</div>
				<div className="buttons">
					{data!.url && (
						<a
							className="download-link"
							href={data!.url}
							target="_blank"
						>
							Visit Site
						</a>
					)}
					{data!.apk && (
						<a
							className="download-link"
							href={data!.apk}
							target="_blank"
						>
							Download APK
						</a>
					)}
					{data!.file && (
						<a
							className="download-link"
							href={data!.file}
							target="_blank"
						>
							Download File
						</a>
					)}
					{data!.github && (
						<a
							className="github-link"
							href={data!.github}
							target="_blank"
						>
							View on Github
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default EachProjectMob;
