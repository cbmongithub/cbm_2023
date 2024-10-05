import { motion } from "framer-motion";
import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";

const Cookie = () => {
	const [hasAccepted, setHasAccepted] = useState(false);

	useEffect(() => {
		const consent = Cookies.get("cookieConsent");
		if (consent === "true") {
			setHasAccepted(true);
		}
	}, []);

	const handleAccept = () => {
		Cookies.set("cookieConsent", "true", { expires: 365 });
		setHasAccepted(true);
	};

	return (
		!hasAccepted && (
			<div className="absolute bottom-5 left-0 mx-8 flex w-full flex-col items-start justify-between gap-8 rounded-xl bg-white p-5 dark:bg-slate-900 md:flex-row md:items-center">
				<svg
					alt="Cookies Icon"
					className="h-12 w-12 md:h-10 md:w-10"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Cookies Icon</title>
					<g id="Environment / Cookie">
						<g>
							<path
								d="M12.1521 4.08723C12.1513 3.71959 12.1001 3.3538 12 3C16.9683 3.00545 20.9944 7.03979 21 12C21.0161 16.9625 16.9705 20.9835 12 20.9997C7.02946 21.0158 3.01615 16.963 3 12.0005C4.11168 12.2363 5.27038 11.9981 6.1499 11.2795C7.0562 10.5452 7.5789 9.43935 7.5702 8.27407C7.56959 8.01195 7.5461 7.75072 7.5 7.49268C8.51784 7.89624 9.67043 7.76409 10.5708 7.14162C11.5696 6.44537 12.161 5.3034 12.1521 4.08723Z"
								className="stroke-zinc-900 dark:stroke-zinc-50"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M3.00195 7.002V7H3V7.00195L3.00195 7.002Z"
								className="stroke-zinc-900 dark:stroke-zinc-50"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M8.00195 3.002V3H8V3.00195L8.00195 3.002Z"
								className="stroke-zinc-900 dark:stroke-zinc-50"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M4.00195 3.002V3H4V3.00195L4.00195 3.002Z"
								className="stroke-zinc-900 dark:stroke-zinc-50"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M10.002 17.002V17H10V17.002L10.002 17.002Z"
								className="stroke-zinc-900 dark:stroke-zinc-50"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M15.002 15.002V15H15V15.002L15.002 15.002Z"
								className="stroke-zinc-900 dark:stroke-zinc-50"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M11.002 12.002V12H11V12.002L11.002 12.002Z"
								className="stroke-zinc-900 dark:stroke-zinc-50"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M16.002 10.002V10H16V10.002L16.002 10.002Z"
								className="stroke-zinc-900 dark:stroke-zinc-50"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M3.00195 7.002V7H3V7.00195L3.00195 7.002Z"
								className="stroke-zinc-900 dark:stroke-zinc-50"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M8.00195 3.002V3H8V3.00195L8.00195 3.002Z"
								className="stroke-zinc-900 dark:stroke-zinc-50"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M4.00195 3.002V3H4V3.00195L4.00195 3.002Z"
								className="stroke-zinc-900 dark:stroke-zinc-50"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</g>
					</g>
				</svg>
				<div>
					<h4 className="text-base font-bold text-zinc-900 dark:text-zinc-50">
						Do you consent to the use of cookies?
					</h4>
					<p className="mt-2 text-xs text-zinc-700 dark:text-zinc-50 md:mt-1">
						This website uses cookies to enhance your experience. By clicking
						accept, you permit the use of cookies. You can learn more about
						cookies and what they mean for you by clicking{" "}
						<Link
							className="text-pink-500 underline hover:text-purple-600 hover:no-underline focus:text-purple-600 focus:no-underline active:text-purple-600 active:no-underline"
							href="https://en.wikipedia.org/wiki/HTTP_cookie"
							type="link"
							aria-label="A link to a wikipedia cookie article."
						>
							here
						</Link>
						.
					</p>
				</div>
				<motion.div
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "spring", stiffness: 30, delay: 0.5 }}
				>
					<Link
						className="mr-2 rounded-xl bg-transparent px-7 py-3.5 text-sm font-medium uppercase leading-snug text-zinc-50 shadow-xl transition duration-150 ease-in-out hover:border-pink-500 hover:bg-pink-500 hover:shadow-2xl focus:border-pink-500 focus:bg-pink-500 focus:text-zinc-50 focus:shadow-2xl focus:outline-none focus:ring-0 active:bg-pink-500 active:shadow-2xl"
						onClick={handleAccept}
						type="button"
						aria-label="Cookie consent accept button"
						rel="noopener noreferrer"
					>
						ACCEPT
					</Link>
					<Link
						className="mr-2 rounded-xl border-pink-500 bg-transparent px-7 py-3.5 text-sm font-medium uppercase leading-snug text-zinc-50 shadow-xl transition duration-150 ease-in-out hover:border-purple-600 hover:bg-purple-600 hover:shadow-2xl focus:border-purple-600 focus:bg-purple-600 focus:text-zinc-50 focus:shadow-2xl focus:outline-none focus:ring-0 active:bg-purple-600 active:shadow-2xl"
						href="https://www.google.com"
						as="button"
						typeof="button"
						aria-label="Cookie consent deny button"
					>
						DENY
					</Link>
				</motion.div>
			</div>
		)
	);
};

export default Cookie;
