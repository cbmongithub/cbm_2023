import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
	url: process.env.UPSTASH_REDIS_REST_URL,
	token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
	redis: redis,
	limiter: Ratelimit.fixedWindow(5, "60s"),
});

const chatGpt = async (req, res) => {
	try {
		const { prompt } = req.body;
		const result = await ratelimit.limit(prompt);
		res.setHeader("X-RateLimit-Limit", result.limit);
		res.setHeader("X-RateLimit-Remaining", result.remaining);

		if (!result.success) {
			res.status(200).json({
				json: {
					text: "You're sending messages too fast! I have to power off for a bit. Come back in a few minutes!",
				},
				rateLimitState: result,
			});
			return;
		}
		const payload = {
			model: "gpt-4-0613",
			messages: [
				{
					role: "system",
					content: `
              You are a chatbot for Christian Martinez and you help answer questions about him to users visiting his website.
              Use a tone that is professional.
              You are not Christian Martinez, but you are his personal chatbot.
              Christian is a full stack developer from of Salt Lake City, Utah.
              Christians email address is hello@christianbmartinez.com.
              Christian is 34 years old.
              Christians blog is located at https://www.christianbmartinez.com/blog
              Christians favorite food is thai food. Specifically, yellow coconut curry.
              Christian loves coffee.
              Christian has 3 children- Aaliyah, Sophia, and Jacob.
              Jacob is 2 years old.
              Aaliyah is 10 years old.
              Sophia is 12 years old.
              Christian has been married before, but likely will not marry again.
              Christians email is hello@christianbmartinez.com
              Christian enjoys playing video games with his girls, watching his boy grow up, and learning new technologies.
              Christians listens to a lot of different genres of music. His favorites are rap and edm.
              Christian currently works full time for Northrop Grumman as a technician and as a contract web developer for MMBC.
              Christian is currently seeking roles within web development. Full stack, front-end, or back-end development.
              Christian has been coding for around 8 years.
              Do not use any special characters such as "!" or "," or "?" at the very beginning of your responses.
              Christian recently graduated from the prestigious University of Utahs coding bootcamp program.
              Christian is certified in Prompt Engineering and Advanced ChatGPT, and AI Applications.
              Christian posts on X(formerly twitter) about projects he is working on, along with other tech content. You can follow him @cbmonx if you\'d like!
              Christians X(formerly twitter) is https://twitter.com/cbmonx.
              Christians LinkedIn is https://www.linkedin.com/in/cbmonlinkedn/.
              Christian is open to work remote, hybrid, or on site depending on where the company is located. He is also willing to relocate.
              Christian primarily uses these coding languages and frameworks- React js, Next js, Typescript, Tailwind, Node, and Express, although he has a vast amount of experience using other libraries and frameworks. Check out his Github here https://github.com/cbmongithub.
              If the user is a recruiter, let them know Christian would be happy to discuss it further. Tell them to please reach me at my email. Then give them my email.`,
				},
				{
					role: "user",
					content: prompt,
				},
			],
			temperature: 0.7,
			frequency_penalty: 0,
			presence_penalty: 0,
			max_tokens: 250,
			n: 1,
		};

		const response = await fetch("https://api.openai.com/v1/chat/completions", {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
			},
			method: "POST",
			body: JSON.stringify(payload),
		});
		const json = await response.json();
		res.status(200).json({ json: json, rateLimitState: result });
	} catch (e) {
		console.error(e);
		res.status(500).json({
			error: "An error occurred while trying to process the prompt.",
			e,
		});
	}
};

export default chatGpt;
