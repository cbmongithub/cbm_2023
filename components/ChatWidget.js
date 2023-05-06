import { useState } from 'react'
import { FaComment } from 'react-icons/fa'
import Image from 'next/image'
import ScrollableFeed from 'react-scrollable-feed'

const ChatWidget = () => {
  const [show, setShow] = useState(false)
  const [storedValues, setStoredValues] = useState([])

  const handleToggle = () => {
    setShow(!show)
  }

  const generateResponse = async (newQuestion, setNewQuestion) => {
    const response = await fetch('/api/createMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: newQuestion,
      }),
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    let answer = await response.json()
    if (answer) {
      setStoredValues([
        {
          question: newQuestion,
          answer: answer.choices[0].text,
        },
        ...storedValues,
      ])
      setNewQuestion('')
    }
  }

  return (
    <>
      {show ? (
        <div className='bg-white flex flex-col w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 max-h-[30rem] min-h-[22rem] absolute bottom-5 right-5 mx-auto shadow-xl rounded-lg z-30'>
          <div className='sticky top-0 px-4 py-5 flex justify-between bg-gradient-to-r from-purple-600 to-pink-500 rounded-t-md'>
            <h1 className='text-white font-semibold text-lg'>Chat</h1>
            <a
              onClick={handleToggle}
              className='text-white font-semibold text-xl cursor-pointer'
            >
              x
            </a>
          </div>
          <div className='flex flex-col bg-white min-h-[16rem] max-h-[20rem] w-full'>
            <ScrollableFeed>
              <div className='flex flex-row justify-between bg-white rounded-b-md'>
                <div className='px-4 flex flex-col justify-between'>
                  <div className='flex flex-col mt-5'>
                    <div className='flex justify-end mb-4'>
                      <div className='mr-2 py-3 px-4 bg-purple-600 rounded-lg text-white'>
                        <p>
                          Welcome! I am Christians chatbot. You can ask me
                          anything about Christian and I will respond
                          accordingly.
                        </p>
                      </div>
                      <Image
                        src='/img/bot.jpg'
                        className='object-cover h-8 w-8 rounded-full'
                        alt='Chatbot image for Christian B Martinez'
                        width={75}
                        height={75}
                      />
                    </div>
                  </div>
                  {storedValues.length > 0 && (
                    <AnswerSection storedValues={storedValues} />
                  )}
                </div>
              </div>
            </ScrollableFeed>
          </div>
          <FormSection generateResponse={generateResponse} />
        </div>
      ) : (
        <div
          onClick={handleToggle}
          className='fixed cursor-pointer z-30 bottom-5 right-5 p-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full shadow-xl'
        >
          <FaComment className='w-5 h-5 text-white' />
        </div>
      )}
    </>
  )
}

const AnswerSection = ({ storedValues }) => {
  return (
    <>
      {storedValues
        .map((value, index) => {
          return (
            <>
              <div className='flex justify-start mb-4' key={index}>
                <div className='py-3 px-4 bg-slate-400 rounded-lg text-white'>
                  <p>{value.question}</p>
                </div>
              </div>
              <div className='flex justify-end mb-4'>
                <div className='mr-2 py-3 px-4 bg-purple-600 rounded-lg text-white'>
                  {value.answer}
                </div>
                <Image
                  src='/img/bot.jpg'
                  className='object-cover h-8 w-8 rounded-full'
                  alt='Chatbot image for Christian B Martinez'
                  width={75}
                  height={75}
                />
              </div>
            </>
          )
        })
        .reverse()}
    </>
  )
}

const FormSection = ({ generateResponse }) => {
  const [newQuestion, setNewQuestion] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='flex flex-row justify-between items-center relative w-full bottom-0 right-0 bg-white px-4 py-5'
      >
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
              focus:border-purple-600 focus:outline-none py-5 px-4 rounded-xl'
          placeholder='Ask any question'
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          type='text'
        />
        <button
          type='submit'
          className='w-1/4 text-purple-600 font-medium text-sm leading-snug uppercase hover:text-purple-700'
          onClick={() => generateResponse(newQuestion, setNewQuestion)}
        >
          SEND
        </button>
      </form>
    </>
  )
}

export default ChatWidget
