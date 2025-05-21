import React from 'react'
import Image from 'next/image'

const WorkInProgress = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <Image src='/WorkInProgress.jpg' alt="Page is in development phase" height={600} width={600} />
    </div>
  )
}

export default WorkInProgress;
