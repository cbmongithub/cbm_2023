import Link from "next/link";

import { SiteHead } from "../components";

const NotFound = () => {
	return (
		<>
			<SiteHead
				page="404 Page"
				title="404 Page"
				description="Portfolio site of full stack web developer Christian B. Martinez"
				keywords="next js, tailwind css, blog, javascript, tech site, portfolio site, chatgpt app, react, 404"
			/>
			<section>
				<div className="relative z-30 flex h-full w-full items-center justify-center px-16 pt-48 md:px-0">
					<div className="flex flex-col items-center justify-center rounded-xl bg-white px-4 py-8 shadow-2xl dark:bg-slate-900 md:px-8 lg:px-24">
						<p className="border-b-2 pb-4 text-6xl font-bold tracking-wider text-zinc-900 dark:text-zinc-50 md:text-6xl lg:text-7xl">
							404
						</p>
						<p className="mt-4 text-2xl font-bold tracking-wider text-zinc-900 dark:text-zinc-50 md:text-3xl lg:text-4xl">
							Page Not Found
						</p>
						<p className="mt-4 px-4 pb-4 text-center text-zinc-700 dark:text-zinc-300">
							Sorry, the page you are looking for could not be found.
						</p>
						<Link
							className="mt-4 rounded-xl bg-purple-600 px-7 py-3.5 text-sm font-medium uppercase leading-snug text-zinc-50 shadow-xl transition duration-150 ease-in-out hover:border-pink-500 hover:bg-pink-500 hover:shadow-2xl focus:border-pink-500 focus:bg-pink-500 focus:text-zinc-50 focus:shadow-2xl focus:outline-none focus:ring-0 active:bg-pink-500 active:shadow-2xl"
							href="/"
							as="button"
							typeof="button"
							aria-label="Back to home button"
						>
							&larr; BACK TO HOME
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default NotFound;
