import React from 'react'

function Cards() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto my-6'>
      <div className='bg-white p-10 rounded-lg shadow-sm grid items-center text-center justify-center'>
          <img className='w-36 h-36 mb-6' src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg" alt="" />
          <h6 className='font-medium text-lg text-primary-brand-color'>Backend</h6>
          <p className='mt-2 text-sm text-gray-500'>Backend</p>
      </div>
    </div>
  )
}

export default Cards