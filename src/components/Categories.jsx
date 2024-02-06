import React from 'react'
import Category from './ui/Category'

function Categories() {


  return (
    <div className='bg-white py-4  shadow-sm border-b border-gray-50'>
      <div className='container mx-auto'>
        <h3 className='text-sm font-semibold mb-3'>Kategoriler</h3>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12">
          <Category />
        </div>
      </div>
    </div>
  )
}

export default Categories