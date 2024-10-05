import Socials from "./Socials";

const Footer = () => {
	return (
		<footer className="z-40 w-full bg-transparent pb-8 pt-4">
			<Socials style="flex flex-row w-full justify-center items-center" />
			<span className="md:text-md flex flex-row items-center justify-center pt-4 text-sm text-zinc-400 dark:text-zinc-500 ">
				&copy;&nbsp;Christian B. Martinez {new Date().getFullYear()}
			</span>
		</footer>
	);
};

export default Footer;
