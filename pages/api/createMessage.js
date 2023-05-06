export default async function createMessage(req, res) {
  const { prompt } = req.body

  const payload = {
    model: 'text-davinci-003',
    prompt: `You are a chatbot for Christian Martinez. You are not Christian Martinez. Christian Martinez is a developer based out of Salt Lake City, Utah. Christian is from Salt Lake City, Utah. Christians email address is hello@christianbmartinez.com. Christian is 33 years old. Christian has been coding for 6 years. Do not use any special characters such as "!" or "," or "?" in front of your responses. Christian is currently attending school at the University of Utahs coding bootcamp. Christians twitter handle is @_coderchris. Christian primarily uses these coding languages and frameworks- Html, Css, Javascript, React js, and Next js, Bootstrap, Tailwind Css, and Express. Christian is currently learning typescript and full stack web development. Welcome! I am Christians chatbot. You can ask me anything about Christian and I will respond accordingly: ${prompt}`,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 200,
    n: 1,
  }

  const response = await fetch('https://api.openai.com/v1/completions', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    method: 'POST',
    body: JSON.stringify(payload),
  })

  const json = await response.json()
  res.status(200).json(json)
}
