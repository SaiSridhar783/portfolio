import Image from "next/image";
import { FaChevronRight, FaTimes } from "react-icons/fa";

interface IPopoverProps {
	children: React.ReactNode;
	id: string;
	hide?: boolean;
	title?: string;
	subtitle?: string;
	meta?: string;
	logo?: string;
}

const Popover: React.FC<IPopoverProps> = ({
	children,
	id,
	hide,
	title,
	subtitle,
	meta,
	logo,
}) => {
	return (
		<>
			<div popover="auto" className="popover-content" id={id}>
				<header className="modal-head">
					{logo && (
						<Image src={logo} alt="" width={52} height={52} />
					)}
					<div>
						{title && <p className="modal-title">{title}</p>}
						{subtitle && <p className="modal-subtitle">{subtitle}</p>}
						{meta && <p className="modal-meta">{meta}</p>}
					</div>
					<button
						type="button"
						className="close-btn"
						popoverTarget={id}
						popoverTargetAction="hide"
						aria-label="Close"
					>
						<FaTimes size={16} />
					</button>
				</header>
				<div className="modal-body">{children}</div>
			</div>

			{!hide && (
				<button
					type="button"
					className="learn-more-btn"
					popoverTarget={id}
				>
					Learn More <FaChevronRight size={15} />
				</button>
			)}
		</>
	);
};

export default Popover;
