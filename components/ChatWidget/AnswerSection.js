import Image from 'next/image'

const AnswerSection = ({ storedValues }) => {
  return (
    <>
      {storedValues.map((value, index) => {
        return (
          <>
            <div className='flex justify-start mb-4' key={index}>
              <div className='py-3 px-4 bg-gray-400 rounded-lg text-white'>
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
      })}
    </>
  )
}

export default AnswerSection
