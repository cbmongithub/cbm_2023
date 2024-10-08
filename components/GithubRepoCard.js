import Link from "next/link";
import { FaRegFileCode } from "react-icons/fa";
import { formatDate, formatSize } from "../utils";

import { ToolTip } from "../components";

const GithubRepoCard = ({ latestRepo }) => {
	return (
		<div className="rounded-xl bg-white p-5 shadow-2xl dark:bg-slate-900">
			<div className="flex justify-between">
				<h2 className="inline-flex items-center text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-2xl">
					{latestRepo.name}
				</h2>
				<ToolTip
					text={`Created ${formatDate(latestRepo.created_at)}`}
					align="-right-5"
					top="-top-9"
				>
					<span className="inline-flex items-center rounded-xl bg-purple-600 px-2 pb-1.5 pt-1 text-xs font-medium text-zinc-50 dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-500">
						<svg
							className="mr-1.5 h-2.5 w-2.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
						</svg>
						{`${formatDate(latestRepo.pushed_at, true)}`}
					</span>
				</ToolTip>
			</div>
			<p className="my-6 font-light text-zinc-500 dark:text-zinc-400">
				{latestRepo.description}
			</p>
			<div className="flex items-center justify-between">
				<span className="mr-2 inline-flex items-center text-sm font-medium text-zinc-500 dark:text-zinc-400">
					<FaRegFileCode />
					&nbsp;
					{formatSize(latestRepo.size)}
				</span>
				<Link
					href={latestRepo.clone_url}
					target="_blank"
					aria-label={`Christian B Martinez | Repo Link for ${latestRepo.name}`}
					className="inline-flex items-center text-sm font-medium text-zinc-900 hover:underline dark:text-zinc-50"
				>
					View Repo
					<svg
						className="ml-2 h-4 w-4"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>External Link Icon</title>
						<path
							fillRule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</Link>
			</div>
		</div>
	);
};

export default GithubRepoCard;
