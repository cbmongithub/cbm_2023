import { useState } from 'react'
import useLocalStorage from 'use-local-storage'
import { FaComment } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
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
        stiffness: 30,
      },
    },
    closed: {
      x: 300,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        type: 'spring',
        stiffness: 30,
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
    if (answer.json.choices) {
      setStoredValues([
        {
          question: newQuestion,
          answer: answer.json.choices[0].message.content,
        },
        ...storedValues,
      ])
      setNewQuestion('')
      setIsTyping(false)
    } else if (answer.json.text) {
      setStoredValues([
        {
          question: newQuestion,
          answer: answer.json.text,
        },
        ...storedValues,
      ])
      setNewQuestion('')
      setIsTyping(false)
    } else {
      setStoredValues([
        {
          question: newQuestion,
          answer: answer.json.text,
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
            className='absolute bottom-5 right-6 z-30 mx-auto flex max-h-[30rem] min-h-[22rem] w-3/4 flex-col rounded-xl shadow-2xl md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <div className='sticky top-0 flex justify-between rounded-t-xl bg-purple-600 p-4 px-4 py-5 shadow-xl dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-500'>
              <h1 className='text-lg font-semibold text-zinc-50'>Chat</h1>
              <a
                onClick={setShow}
                className='cursor-pointer'>
                <AiOutlineClose className='mt-2.5 text-lg font-semibold text-zinc-50' />
              </a>
            </div>
            <div className='flex max-h-[20rem] min-h-[16rem] w-full flex-col bg-zinc-50  dark:bg-slate-800'>
              <ScrollableFeed>
                <div className='flex flex-row justify-between rounded-b-xl bg-zinc-50 dark:bg-slate-800'>
                  <div className='flex flex-col justify-between px-4'>
                    <div className='mt-5 flex flex-col'>
                      <div className='mb-4 flex justify-end'>
                        <div className='mr-2 rounded-xl bg-purple-600 px-4 py-3 text-zinc-50'>
                          <p>
                            Welcome! I am Christians chatbot. You can ask me
                            anything about Christian! If you&apos;re interested
                            in signing his guestbook, you can find that
                            <Link
                              href='/guestbook'
                              aria-label='Christian B Martinez | Guestbook'
                              onClick={setShow}>
                              &nbsp;
                              <span className='underline'>here</span>
                            </Link>
                          </p>
                        </div>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_URL}/img/bot.webp`}
                          className='h-8 w-8 rounded-full object-cover'
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
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_URL}/img/bot.webp`}
                          className='mb-4 ml-2 h-8 w-8 rounded-full object-cover'
                          alt='Chatbot image for Christian B Martinez'
                          width={75}
                          height={75}
                        />
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
              className='fixed bottom-5 right-6 z-30 cursor-pointer rounded-full bg-gradient-to-r from-purple-600 to-pink-500 p-4 shadow-xl hover:bg-pink-500'
              initial='closed'
              animate='open'
              exit='closed'
              onClick={setShow}>
              <FaComment className='h-5 w-5 text-zinc-50' />
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
              <div className='mb-4 flex justify-start'>
                <div className='rounded-xl bg-slate-400 px-4 py-3 text-zinc-50 dark:bg-slate-600'>
                  <p>{data.question}</p>
                </div>
              </div>
              <div className='mb-4 flex justify-end'>
                <div className='mr-2 rounded-xl bg-purple-600 px-4 py-3 text-zinc-50'>
                  <p>{data.answer}</p>
                </div>
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/img/bot.webp`}
                  className='h-8 w-8 rounded-full object-cover'
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
  const handleSubmit = e => {
    e.preventDefault()
    setNewQuestion('')
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='relative bottom-0 right-0 flex w-full flex-row items-center justify-between rounded-b-xl border-t border-zinc-300 bg-zinc-50 p-4 shadow-inner dark:border-slate-700 dark:bg-slate-900'>
        <input
          className='m-0
            w-3/4
            rounded-xl
            border border-solid
            border-zinc-300 bg-zinc-50 bg-clip-padding
            p-3 text-base font-normal
            text-slate-700
            transition
            ease-in-out
              focus:border-purple-600 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-zinc-200'
          placeholder='Ask any question'
          value={newQuestion}
          onChange={e => setNewQuestion(e.target.value)}
          type='text'
        />
        <button
          type='submit'
          aria-label='Chat submit button'
          className='w-auto rounded-xl bg-purple-600 px-7 py-3.5 text-sm font-medium uppercase leading-snug text-zinc-50 shadow-xl transition duration-150 ease-in-out hover:border-pink-500 hover:bg-pink-500 hover:shadow-2xl focus:border-pink-500 focus:bg-pink-500 focus:text-zinc-50 focus:shadow-2xl focus:outline-none focus:ring-0 active:bg-pink-500 active:shadow-2xl'
          onClick={() => generateResponse(newQuestion, setNewQuestion)}>
          SEND
        </button>
      </form>
    </>
  )
}

export default ChatWidget
