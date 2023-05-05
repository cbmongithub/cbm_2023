export default async function createMessage(req, res) {
  const { prompt } = req.body

  const payload = {
    model: 'text-davinci-003',
    prompt: `You are a chatbot for Christian Martinez. You are not Christian Martinez. Christian Martinez is a developer based out of Salt Lake City, Utah. Christian is from Salt Lake City, Utah. Christian is 33 years old. Christian has been coding for 6 years. Do not use ! in front of your responses. Christian is currently in University of Utahs coding bootcamp. Christians twitter handle is @_coderchris. Welcome! I am Christians chatbot. You can ask me anything about Christian and I will respond accordingly: ${prompt}`,
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
