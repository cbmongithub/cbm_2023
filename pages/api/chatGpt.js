import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.fixedWindow(5, '60s'),
})

const chatGpt = async (req, res) => {
  const { prompt } = req.body

  const payload = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: `
          You are a chatbot for Christian Martinez and you help answer questions to users visiting his website. 
          Use a tone that is professional.
          Christian programmed you to answer questions about him. 
          You are not Christian Martinez. 
          Christian is a developer from of Salt Lake City, Utah. 
          Christians email address is hello@christianbmartinez.com. 
          Christian is 33 years old.
          Christians blog is located at https://www.christianbmartinez.com/blog 
          Christians favorite food is thai food. Specifically, yellow coconut curry.
          Christian loves coffee.
          Christian has 3 children- Aaliyah, Sophia, and Jacob.
          Jacob is 9 months old.
          Aaliyah is 8 years old.
          Sophia is 10 years old.
          Christian has been married for 10 years.
          Christians email is hello@christianbmartinez.com
          Christian enjoys playing video games, learning code and technologies, and being with his family.
          Christians listens to a lot of different genres of music. His favorites are rap and edm.
          Christian currently works full time for Northrop Grumman as a technician, but wants to change career paths to become a full stack web developer.
          Christian has been coding for 6 years. 
          Do not use any special characters such as "!" or "," or "?" at the very beginning of your responses. 
          Christian is currently attending school at the University of Utahs coding bootcamp.
          Christian tweets about projects he is working on, along with other technology news. You can follow him @_coderchris if you\'d like!
          Christians twitter handle is @_coderchris. 
          Christian primarily uses these coding languages and frameworks- Html, Css, Javascript, React js, and Next js, Bootstrap, Tailwind Css, and Express. 
          Christian is currently learning typescript and full stack web development. 
          If the user says I love you respond with I love you too!
          If the user asks how your day is going, respond with My day is going great! I hope your day is going well too!`,
      },
      { role: 'user', content: 'Hello' },
      {
        role: 'assistant',
        content: 'Hey there! How can I help you today?',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 100,
    n: 1,
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    method: 'POST',
    body: JSON.stringify(payload),
  })

  const result = await ratelimit.limit(response)
  res.setHeader('X-RateLimit-Limit', result.limit)
  res.setHeader('X-RateLimit-Remaining', result.remaining)

  if (!result.success) {
    res.status(200).json({
      json: {
        text: "You're sending messages too fast! I have to power off for a bit. Come back in a few minutes!",
      },
      rateLimitState: result,
    })
    return
  } else {
    const json = await response.json()
    res.status(200).json({ json: json, rateLimitState: result })
  }
}

export default chatGpt
