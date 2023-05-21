import { useState } from 'react'
import useLocalStorage from 'use-local-storage'
import { FaComment } from 'react-icons/fa'
import Image from 'next/image'
import ScrollableFeed from 'react-scrollable-feed'
import { motion, useCycle, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const ChatWidget = () => {
  const [show, setShow] = useCycle(false, true)
  const [typing, setIsTyping] = useState(false)
  const [storedValues, setStoredValues] = useLocalStorage('chat', [])

  const variants = {
    open: {
      opacity: 1,
      x: 5,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        type: 'spring',
        stiffness: 100,
      },
    },
    closed: {
      x: 300,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  }

  const generateResponse = async (newQuestion, setNewQuestion) => {
    setIsTyping(true)
    const response = await fetch('/api/chatGpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: newQuestion,
      }),
    })

    let answer = await response.json()
    console.log(answer)
    if (answer.json.choices[0].message.content) {
      setStoredValues([
        {
          question: newQuestion,
          answer: answer.json.choices[0].message.content,
        },
        ...storedValues,
      ])
      setNewQuestion('')
      setIsTyping(false)
    } else {
      setStoredValues([
        {
          question: newQuestion,
          answer: answer.json,
        },
        ...storedValues,
      ])
      setNewQuestion('')
      setIsTyping(false)
    }
  }

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            className='flex flex-col w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 max-h-[30rem] min-h-[22rem] absolute bottom-5 right-6 mx-auto shadow-2xl rounded-lg z-30'
          >
            <div className='sticky top-0 px-4 py-5 flex justify-between bg-gradient-to-r from-purple-600 to-pink-500 rounded-t-md'>
              <h1 className='text-zinc-50 font-semibold text-lg'>Chat</h1>
              <a
                onClick={setShow}
                className='text-zinc-50 font-semibold text-xl cursor-pointer'
              >
                x
              </a>
            </div>
            <div className='flex flex-col min-h-[16rem] max-h-[20rem] w-full bg-zinc-50  dark:bg-slate-800'>
              <ScrollableFeed>
                <div className='flex flex-row justify-between bg-zinc-50 dark:bg-slate-800 rounded-b-md'>
                  <div className='px-4 flex flex-col justify-between'>
                    <div className='flex flex-col mt-5'>
                      <div className='flex justify-end mb-4'>
                        <div className='mr-2 py-3 px-4 bg-purple-600 rounded-lg text-zinc-50'>
                          <p>
                            Welcome! I am Christians chatbot. You can ask me
                            anything about Christian! If you&apos;re interested
                            in signing his guestbook, you can find that
                            <Link
                              href='/guestbook'
                              aria-label='Christian B Martinez | Guestbook'
                            >
                              &nbsp;
                              <span className='underline'>here</span>
                            </Link>
                          </p>
                        </div>
                        <Image
                          src='/img/bot.webp'
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
                    {typing && (
                      <div className='typing-indicator'>
                        <div className='typing-indicator-bubble'>
                          <div className='typing-indicator-dot'></div>
                          <div className='typing-indicator-dot'></div>
                          <div className='typing-indicator-dot'></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollableFeed>
            </div>
            <FormSection generateResponse={generateResponse} />
          </motion.div>
        )}
      </AnimatePresence>
      {!show ? (
        <>
          <AnimatePresence>
            <motion.div
              variants={variants}
              className='fixed cursor-pointer z-30 bottom-5 right-6 p-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full shadow-xl hover:bg-pink-500'
              initial='closed'
              animate='open'
              exit='closed'
              onClick={setShow}
            >
              <FaComment className='w-5 h-5 text-zinc-50' />
            </motion.div>
          </AnimatePresence>
        </>
      ) : (
        ''
      )}
    </>
  )
}

const AnswerSection = ({ storedValues }) => {
  return (
    <>
      {storedValues
        .map((data, index) => {
          return (
            <div key={index}>
              <div className='flex justify-start mb-4'>
                <div className='py-3 px-4 bg-slate-400 dark:bg-slate-600 rounded-lg text-zinc-50'>
                  <p>{data.question}</p>
                </div>
              </div>
              <div className='flex justify-end mb-4'>
                <div className='mr-2 py-3 px-4 bg-purple-600 rounded-lg text-zinc-50'>
                  <p>{data.answer}</p>
                </div>
                <Image
                  src='/img/bot.webp'
                  className='object-cover h-8 w-8 rounded-full'
                  alt='Chatbot image for Christian B Martinez'
                  width={75}
                  height={75}
                />
              </div>
            </div>
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
    setNewQuestion('')
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='shadow-inner flex flex-row justify-between items-center rounded-b-lg relative w-full bottom-0 right-0 bg-zinc-50 dark:bg-slate-800 px-4 py-5'
      >
        <input
          className='text-base
            w-3/4
            font-normal
            text-zinc-700 dark:text-zinc-200
            bg-zinc-50 dark:bg-slate-800 bg-clip-padding
            border border-solid border-zinc-300 dark:border-zinc-500
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
          aria-label='Chat submit button'
          className='w-1/4 text-purple-600 outline-none focus:outline-none border-none focus:border-none dark:text-zinc-50 font-medium text-sm leading-snug uppercase dark:hover:text-purple-700 hover:text-purple-700'
          onClick={() => generateResponse(newQuestion, setNewQuestion)}
        >
          SEND
        </button>
      </form>
    </>
  )
}

export default ChatWidget
