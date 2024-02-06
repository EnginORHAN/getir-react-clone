import React from 'react'
import Category from './ui/Category'

function Categories() {


  return (
    <div className='bg-white py-4  shadow-2xl border-b border-gray-50'>
      <div className='container mx-auto'>
        <h3 className='text-sm font-semibold mb-3'>Kategoriler</h3>
        <div className="grid grid-cols-10">
          <Category />
        </div>
      </div>
    </div>
  )
}

export default Categories