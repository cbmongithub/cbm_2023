import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_GUESTBOOK_ID,
			clientSecret: process.env.GITHUB_GUESTBOOK_SECRET,
		}),
	],
	callbacks: {
		async redirect({ url, baseUrl }) {
			if (url.startsWith("/guestbook")) {
				return `${baseUrl}${url}`;
			}
			if (new URL(url).origin === baseUrl) return url;
			return baseUrl;
		},
	},
	secret: process.env.GITHUB_GUESTBOOK_SECRET,
};

export default NextAuth(authOptions);
