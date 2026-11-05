"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
	FaCalendarAlt,
	FaCopy,
	FaEnvelopeOpenText,
	FaInbox,
	FaQuoteLeft,
	FaReply,
	FaSearch,
	FaTrashAlt,
	FaUserFriends,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { deleteMessage } from "@/app/admin/actions";
import { easeOut } from "@/lib/motion";
import ActivityChart from "./Admin/ActivityChart";

export type AdminMessage = {
	id: string;
	name: string;
	email: string;
	message: string;
	createdAt: string; // ISO
};

const fullDate = (iso: string) =>
	new Date(iso).toLocaleString("en-IN", {
		timeZone: "Asia/Kolkata",
		dateStyle: "long",
		timeStyle: "short",
	});

const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
const units: [Intl.RelativeTimeFormatUnit, number][] = [
	["year", 31536000],
	["month", 2592000],
	["week", 604800],
	["day", 86400],
	["hour", 3600],
	["minute", 60],
];
function timeAgo(iso: string) {
	const secs = (new Date(iso).getTime() - Date.now()) / 1000;
	for (const [unit, size] of units) {
		if (Math.abs(secs) >= size)
			return rtf.format(Math.round(secs / size), unit);
	}
	return "just now";
}

// List section a message falls under, newest first
function groupOf(iso: string, now: number) {
	const age = (now - new Date(iso).getTime()) / 86400000;
	if (age < 1) return "Today";
	if (age < 7) return "This week";
	if (age < 30) return "This month";
	const year = new Date(iso).getFullYear();
	return year === new Date(now).getFullYear() ? "Earlier this year" : String(year);
}

const initials = (name: string) =>
	name
		.trim()
		.split(/\s+/)
		.slice(0, 2)
		.map((w) => w[0]?.toUpperCase())
		.join("") || "?";

// Stable hue per sender so avatars are easy to tell apart
const hue = (s: string) =>
	[...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 360, 7);

function Avatar({ name }: { name: string }) {
	return (
		<span
			className="avatar"
			style={{ "--h": hue(name) } as React.CSSProperties}
			aria-hidden
		>
			{initials(name)}
		</span>
	);
}

function Detail({
	msg,
	onDelete,
}: {
	msg: AdminMessage;
	onDelete: (id: string) => void;
}) {
	const [confirming, setConfirming] = useState(false);
	const words = msg.message.trim().split(/\s+/).length;

	return (
		<article className="detail">
			<header className="detail-head">
				<Avatar name={msg.name} />
				<div>
					<p className="detail-name">{msg.name}</p>
					<a className="detail-email" href={`mailto:${msg.email}`}>
						{msg.email}
					</a>
				</div>
			</header>
			<p className="detail-meta">
				<span>
					<FaCalendarAlt aria-hidden /> {fullDate(msg.createdAt)}
				</span>
				<span>
					{words} {words === 1 ? "word" : "words"}
				</span>
			</p>
			<blockquote className="detail-body">
				<FaQuoteLeft className="detail-quote" aria-hidden />
				{msg.message}
			</blockquote>
			<div className="detail-actions">
				<a
					className="btn primary"
					href={`mailto:${msg.email}?subject=${encodeURIComponent("Re: your message")}`}
				>
					<FaReply /> Reply
				</a>
				<button
					type="button"
					className="btn"
					onClick={() =>
						navigator.clipboard
							.writeText(msg.email)
							.then(() => toast.success("Email copied"))
					}
				>
					<FaCopy /> Copy email
				</button>
				{confirming ? (
					<span className="confirm">
						<span>Delete for good?</span>
						<button
							type="button"
							className="btn danger"
							onClick={() => onDelete(msg.id)}
						>
							Delete
						</button>
						<button
							type="button"
							className="btn"
							onClick={() => setConfirming(false)}
						>
							Cancel
						</button>
					</span>
				) : (
					<button
						type="button"
						className="btn ghost-danger"
						onClick={() => setConfirming(true)}
					>
						<FaTrashAlt /> Delete
					</button>
				)}
			</div>
		</article>
	);
}

const AdminMain: React.FC<{ data: AdminMessage[] }> = ({ data }) => {
	const [messages, setMessages] = useState(data);
	const [query, setQuery] = useState("");
	const [now] = useState(() => Date.now());
	const [selectedId, setSelectedId] = useState<string | null>(
		data[0]?.id ?? null
	);

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return messages;
		return messages.filter((m) =>
			[m.name, m.email, m.message].some((f) => f.toLowerCase().includes(q))
		);
	}, [messages, query]);

	const selected = messages.find((m) => m.id === selectedId) ?? null;
	const recent = messages.filter(
		(m) => now - new Date(m.createdAt).getTime() < 30 * 86400 * 1000
	).length;
	const senders = new Set(messages.map((m) => m.email.toLowerCase())).size;
	const latest = messages[0]?.createdAt;

	// ↑/↓ (or j/k) move through the list unless you're typing in the search box
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if ((e.target as HTMLElement).closest("input, textarea")) return;
			const step =
				e.key === "ArrowDown" || e.key === "j"
					? 1
					: e.key === "ArrowUp" || e.key === "k"
						? -1
						: 0;
			if (!step || filtered.length === 0) return;
			e.preventDefault();
			const idx = filtered.findIndex((m) => m.id === selectedId);
			const next = filtered[Math.min(filtered.length - 1, Math.max(0, idx + step))];
			setSelectedId(next.id);
			document
				.querySelector(`[data-msg="${next.id}"]`)
				?.scrollIntoView({ block: "nearest" });
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [filtered, selectedId]);

	async function handleDelete(id: string) {
		try {
			await deleteMessage(id);
			const idx = filtered.findIndex((m) => m.id === id);
			const next = filtered[idx + 1] ?? filtered[idx - 1] ?? null;
			setMessages((all) => all.filter((m) => m.id !== id));
			setSelectedId(next?.id ?? null);
			toast.success("Message deleted");
		} catch {
			toast.error("Couldn't delete that message. Try again.");
		}
	}

	const stats = [
		{ icon: FaInbox, value: messages.length, label: "Total messages" },
		{ icon: FaUserFriends, value: senders, label: "Unique senders" },
		{ icon: FaEnvelopeOpenText, value: recent, label: "Last 30 days" },
	];

	return (
		<div className="inbox">
			<section className="inbox-overview">
				<div className="stat-cards">
					{stats.map(({ icon: Icon, value, label }) => (
						<div key={label} className="stat-card">
							<span className="stat-icon">
								<Icon />
							</span>
							<span className="stat-num">{value}</span>
							<span className="stat-label">{label}</span>
						</div>
					))}
					{latest && (
						<p className="stat-latest">
							Latest message{" "}
							<time dateTime={latest} title={fullDate(latest)} suppressHydrationWarning>
								{timeAgo(latest)}
							</time>
						</p>
					)}
				</div>
				<ActivityChart dates={messages.map((m) => m.createdAt)} />
			</section>

			<div className="inbox-toolbar">
				<label className="inbox-search">
					<FaSearch aria-hidden />
					<input
						type="search"
						placeholder="Search name, email or message"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
					{query && (
						<span className="result-count">{filtered.length} found</span>
					)}
				</label>
				<p className="kbd-hint">
					<kbd>↑</kbd> <kbd>↓</kbd> to move between messages
				</p>
			</div>

			{messages.length === 0 ? (
				<div className="inbox-empty">
					<FaInbox size={36} />
					<p>Inbox zero. Nothing to read.</p>
				</div>
			) : (
				<div className="inbox-panes">
					<ul className="inbox-list">
						<AnimatePresence initial={false}>
							{filtered.map((m, i) => {
								const group = groupOf(m.createdAt, now);
								const showGroup =
									i === 0 || groupOf(filtered[i - 1].createdAt, now) !== group;
								return (
									<motion.li
										key={m.id}
										layout
										initial={{ opacity: 0, y: 12 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, x: -40 }}
										transition={{ duration: 0.3, ease: easeOut }}
									>
										{showGroup && <p className="group-label">{group}</p>}
										<button
											type="button"
											data-msg={m.id}
											className={`inbox-item${m.id === selectedId ? " active" : ""}`}
											onClick={() =>
												setSelectedId(m.id === selectedId ? null : m.id)
											}
											aria-expanded={m.id === selectedId}
										>
											<Avatar name={m.name} />
											<span className="item-main">
												<span className="item-top">
													<span className="item-name">{m.name}</span>
													<time
														dateTime={m.createdAt}
														title={fullDate(m.createdAt)}
														suppressHydrationWarning
													>
														{timeAgo(m.createdAt)}
													</time>
												</span>
												<span className="item-email">{m.email}</span>
												<span className="item-snippet">{m.message}</span>
											</span>
										</button>
										{/* Narrow screens read the message inline */}
										{m.id === selectedId && (
											<div className="inline-detail">
												<Detail msg={m} onDelete={handleDelete} />
											</div>
										)}
									</motion.li>
								);
							})}
						</AnimatePresence>
						{filtered.length === 0 && (
							<li className="no-results">
								No messages match &ldquo;{query}&rdquo;.
							</li>
						)}
					</ul>

					<aside className="inbox-reader">
						<AnimatePresence mode="wait">
							{selected ? (
								<motion.div
									key={selected.id}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -6 }}
									transition={{ duration: 0.25, ease: easeOut }}
								>
									<Detail msg={selected} onDelete={handleDelete} />
								</motion.div>
							) : (
								<motion.div
									key="none"
									className="reader-empty"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
								>
									<FaEnvelopeOpenText size={40} />
									<p>Select a message to read it.</p>
								</motion.div>
							)}
						</AnimatePresence>
					</aside>
				</div>
			)}
		</div>
	);
};

export default AdminMain;
