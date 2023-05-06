import { useState } from 'react'
import FormSection from './FormSection'
import AnswerSection from './AnswerSection'
import { FaComment } from 'react-icons/fa'
import Image from 'next/image'

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
        <div className='container w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 max-h-[32rem] overflow-y-auto overflow-x-hidden absolute bottom-5 right-5 md:bottom-5 md:right-5 mx-auto shadow-lg rounded-lg z-40'>
          <div className='sticky top-0 w-full px-5 py-5 flex justify-between bg-gradient-to-r from-purple-600 to-pink-500 rounded-t-md border-b-2'>
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
                {storedValues.length < 1 && (
                  <div className='flex justify-end mb-4'>
                    <div className='mr-2 py-3 px-4 bg-purple-600 rounded-lg text-white'>
                      <p>
                        Welcome! I am Christians chatbot. You can ask me
                        anything about Christian and I will respond accordingly.
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
                )}
              </div>
              {storedValues.length > 0 && (
                <AnswerSection storedValues={storedValues} />
              )}
              <FormSection generateResponse={generateResponse} />
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
