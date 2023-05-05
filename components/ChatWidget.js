import { useState } from 'react'
import { FaComment } from 'react-icons/fa'
import Image from 'next/image'

const ChatWidget = () => {
  const [show, setShow] = useState(false)
  const [prompt, setPrompt] = useState('')
  const [placeholder, setPlaceholder] = useState('Ask any question')
  const [message, setMessage] = useState('')
  const [botStore, setBotStore] = useState([])
  const [userStore, setUserStore] = useState([])
  const [response, setResponse] = useState(
    'Welcome! I am Christians chatbot. You can ask me anything about Christian and I will respond accordingly.'
  )

  const handleToggle = () => {
    setShow(!show)
    console.log('Toggling...')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!prompt) {
      setPlaceholder('Please enter a question')
    } else {
      setPrompt('')
      setPlaceholder('Ask any question')
      setMessage(prompt)
      setUserStore([prompt, ...userStore])

      const response = await fetch('/api/createMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
        }),
      })

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      let answer = await response.json()
      setResponse(answer.choices[0].text)
      setBotStore([answer.choices[0].text, ...botStore])
    }
  }

  return (
    <>
      {show ? (
        <div className='container w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 absolute bottom-5 right-5 md:bottom-5 md:right-5 mx-auto shadow-lg rounded-lg z-40'>
          <div className='px-5 py-5 flex justify-between bg-gradient-to-r from-purple-600 to-pink-500 rounded-t-md border-b-2'>
            <h1 className='text-white font-semibold text-lg'>Chat</h1>
            <a
              onClick={handleToggle}
              className='text-white font-semibold text-xl cursor-pointer'
            >
              x
            </a>
          </div>
          <div className='flex flex-row justify-between bg-white rounded-b-md'>
            <div className='w-full px-5 flex flex-col justify-between'>
              <div className='flex flex-col mt-5'>
                <div className='flex justify-end mb-4'>
                  <div className='mr-2 py-3 px-4 bg-purple-600 rounded-lg text-white'>
                    Welcome! I am Christians chatbot. You can ask me anything
                    about Christian and I will respond accordingly.
                  </div>
                  <Image
                    src='/img/bot.jpg'
                    className='object-cover h-8 w-8 rounded-full'
                    alt='Chatbot image for Christian B Martinez'
                    width={75}
                    height={75}
                  />
                </div>
                {userStore &&
                  userStore.map((messages, i) => (
                    <div key={i} className='flex justify-start mb-4'>
                      <div className='py-3 px-4 bg-gray-400 rounded-lg text-white'>
                        {messages}
                      </div>
                    </div>
                  ))}
                {botStore &&
                  botStore.map((messages, i) => (
                    <div key={i} className='flex justify-end mb-4'>
                      <div className='mr-2 py-3 px-4 bg-purple-600 rounded-lg text-white'>
                        {messages}
                      </div>
                      <Image
                        src='/img/bot.jpg'
                        className='object-cover h-8 w-8 rounded-full'
                        alt='Chatbot image for Christian B Martinez'
                        width={75}
                        height={75}
                      />
                    </div>
                  ))}
              </div>
              <form className='py-5' onSubmit={handleSubmit}>
                <div className='flex flex-row justify-between'>
                  <input
                    className='text-base
                  w-3/4
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none py-5 px-3 rounded-xl'
                    type='text'
                    placeholder={placeholder}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                  />
                  <button
                    type='submit'
                    className='w-1/4 text-purple-600 font-medium text-sm leading-snug uppercase hover:text-purple-700'
                    onClick={handleSubmit}
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={handleToggle}
          className='fixed cursor-pointer z-40 bottom-5 right-5 p-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full lg shadow-xl'
        >
          <FaComment className='w-5 h-5 text-white' />
        </div>
      )}
    </>
  )
}

export default ChatWidget
