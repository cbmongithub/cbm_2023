import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const getPost = (slug) => {
	const fileContents = fs.readFileSync(path.join(`posts/${slug}.mdx`), "utf8");
	const { data, content } = matter(fileContents);
	return {
		data,
		content,
	};
};

export default getPost;
