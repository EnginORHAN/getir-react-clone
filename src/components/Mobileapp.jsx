import React from 'react'

function Mobileapp() {
  return (
    <div className='bg-primary-brand-color bg-campains-bg container mx-auto mt-7 rounded-lg text-white flex justify-between'>
      <div className='flex flex-col gap-y-3 p-10'>
        <h3 className='text-2xl font-bold tracking-tight'>Getir'i indirin!</h3>
        <p className='font-semibold'>İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</p>
        <nav className='mt-5 flex gap-x-2'>
          <a href="#" className='transition-all transform hover:scale-105'><img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" /></a>
          <a href="#" className='transition-all transform hover:scale-105'><img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" /></a>
          <a href="#" className='transition-all transform hover:scale-105'><img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" /></a>
        </nav>
      </div>
      <picture className='pt-6 hidden md:block self-end'>
        <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="" />
      </picture>
    </div>
  )
}

export default Mobileapp