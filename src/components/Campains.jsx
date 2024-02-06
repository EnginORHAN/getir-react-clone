import React from 'react'

function Campains() {
  return (
    <div className='bg-zinc-50 py-6 relative shadow-sm'>
        <div className='bg-campains-bg min-h-80 bg-primary-brand-color container mx-auto items-center flex overflow-hidden rounded-lg justify-between'>
          <div className='flex flex-col items-start h-full justify-center ml-12 max-w-lg min-w-full tracking-normal'>
            <h2 className='text-white text-2xl font-bold leading-9'>Getir'i indir!</h2>
            <span className='text-white font-semibold mt-2'>İstediğiniz ürünleri dakikalar içinde kapınıza <br/> getirelim.</span>
            <div className='pt-8'>
              <ol className='md:flex gap-2'>
                <li className='my-1 md:my-0'><a href="#"><img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" /></a></li>
                <li className='my-1 md:my-0'><a href="#"><img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" /></a></li>
                <li className='my-1 md:my-0'><a href="#"><img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" /></a></li>
              </ol>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Campains