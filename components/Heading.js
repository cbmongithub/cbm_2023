import { motion } from "framer-motion";

const Heading = ({ title, paragraph, delay }) => {
	return (
		<motion.div
			initial={{ x: 100, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			transition={{ type: "spring", stiffness: 30, delay: delay ? delay : 0 }}
			className="relative z-30 mx-auto my-20 px-6 text-center"
		>
			<h1 className="mb-12 text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-6xl">
				{title}
			</h1>
			{paragraph && (
				<motion.div
					initial={{ x: -100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{
						type: "spring",
						stiffness: 30,
						delay: delay ? delay : 0.5,
					}}
				>
					<p className="text-lg font-light text-zinc-500 dark:text-zinc-400">
						{paragraph}
					</p>
				</motion.div>
			)}
		</motion.div>
	);
};

export default Heading;
