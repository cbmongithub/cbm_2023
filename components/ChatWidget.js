import { useState } from 'react'
import { FaComment } from 'react-icons/fa'

const ChatWidget = () => {
  const [show, setShow] = useState(false)
  const handleToggle = () => {
    setShow(!show)
    console.log('Toggling...')
  }
  return (
    <>
      <div
        onClick={handleToggle}
        className='fixed cursor-pointer z-50 bottom-5 right-5 p-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full lg shadow-xl'
      >
        <FaComment className='w-5 h-5 text-white' />
      </div>
      {show ? (
        <div className='fixed z-50 bottom-20 right-10 p-4 bg-gradient-to-r text-white from-purple-600 to-pink-500 rounded-md lg shadow-xl'>
          <p>This is where chat gpt will eventually appear!</p>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default ChatWidget
