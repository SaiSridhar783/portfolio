// @ts-nocheck
import { FaChevronRight } from "react-icons/fa";

interface IPopoverProps {
	children: React.ReactNode;
	id: string;
}

const Popover: React.FC<IPopoverProps> = ({ children, id }) => {
	return (
		<>
			<div popover="true" id={id}>
				{children}
				<button type="button" className="close-btn" popovertarget={id}>
					Close
				</button>
			</div>

			<button type="button" className="learn-more-btn" popovertarget={id}>
				Learn More <FaChevronRight size={15} />
			</button>
		</>
	);
};

export default Popover;
