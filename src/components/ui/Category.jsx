import React from 'react'

function Category() {
  return (
    <a href="#" className='flex flex-col items-center group gap-y-2 text-center p-4 transition hover:bg-purple-50'>
        <img src="https://market-product-images-cdn.getirapi.com/category/f9b26950-a462-49b2-9536-e8a383194182.png" alt="" className='w-12 h-12 rounded border border-gray-200' />
        <span className='text-sm font-semibold text-gray-700 group-hover:text-brand-color whitespace-nowrap tracking-tight'>backendden gelecek resim text</span>
    </a>
  )
}

export default Category