"use client";

import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "motion/react";
import Link from "next/link";
import ContactForm, { type Sender } from "@/components/Contact/ContactForm";
import MessageReceived, { RECEIVED_MS } from "@/components/Contact/MessageReceived";
import ContactLinks from "@/components/Contact/ContactLinks";
import LocalTime from "@/components/Contact/LocalTime";
import SplitText from "@/components/SplitText";
import { FaArrowLeft } from "react-icons/fa";
import PageTransition from "@/components/PageTransition";
import "@/styles/contact.css";

const ContactPage: React.FC = () => {
	const [sender, setSender] = useState<Sender | null>(null);

	const onSent = (s: Sender) => {
		setSender(s);
		setTimeout(() => setSender(null), RECEIVED_MS);
	};

	return (
		<PageTransition>
			<div className="contact">
				<AnimatePresence>
					{sender && (
						<MessageReceived sender={sender} onClose={() => setSender(null)} />
					)}
				</AnimatePresence>
				<Link
					href="/"
					replace
					aria-label="Back to navigation"
					transitionTypes={["nav-back"]}
				>
					<FaArrowLeft size={25} className="back-arrow" />
				</Link>
				<div className="contact-main">
					<p className="contact-eyebrow">Contact</p>
					<h1 className="contact-title">
						<SplitText text="Let's build something together." delay={0.15} />
					</h1>
					<p className="contact-lede">
						Got a role, a project, or a question about something I&apos;ve
						built? Send a message and it lands straight in my inbox, or find
						me on any of these.
					</p>
					<ContactLinks />
					<LocalTime />
				</div>
				<div className="contact-side">
					<ContactForm onSent={onSent} />
				</div>
				<ToastContainer
					position="bottom-center"
					autoClose={3000}
					pauseOnHover={false}
					closeOnClick
					theme="dark"
				/>
			</div>
		</PageTransition>
	);
};

export default ContactPage;
