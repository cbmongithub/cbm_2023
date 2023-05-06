import { useState } from 'react'

const FormSection = ({ generateResponse }) => {
  const [newQuestion, setNewQuestion] = useState('')

  return (
    <>
      <div className='sticky w-full bg-white bottom-0 py-5 flex flex-row justify-between items-center'>
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
          placeholder='Ask any question'
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <button
          type='submit'
          className='w-1/4 text-purple-600 font-medium text-sm leading-snug uppercase hover:text-purple-700'
          onClick={() => generateResponse(newQuestion, setNewQuestion)}
        >
          SEND
        </button>
      </div>
    </>
  )
}

export default FormSection
