import React from 'react'

function Footer() {

  return (
    <div className='bg-white'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-4 pt-10'>
          <section>
            <nav className='grid gap-y-4'>
              <div className='text-lg text-primary-brand-color'>Getir'i indir!</div>
              <a href="#"><img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" /></a>
              <a href="#"><img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" /></a>
              <a href="#"><img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" /></a>
            </nav>
          </section>
          <section>
          <nav className='grid gap-y-2'>
              <div className='text-lg text-primary-brand-color'>Getir'i keşfet</div>
              <a className='text-sm hover:text-brand-color' href="#"><p>Hakkımızda</p></a>
              <a className='text-sm hover:text-brand-color' href="#"><p>Kariyer</p></a>
              <a className='text-sm hover:text-brand-color' href="#"><p>Teknoloji Kariyerleri</p></a>
              <a className='text-sm hover:text-brand-color' href="#"><p>İletişim</p></a>
              <a className='text-sm hover:text-brand-color' href="#"><p>Sosyal Sorumluluk Projeleri</p></a>
              <a href="#"><p>Basın Bültenleri</p></a>
            </nav>
          </section>
          <section>
          <nav className='grid gap-y-2'>
              <div className='text-lg text-primary-brand-color'>Getir'i keşfet</div>
              <a className='text-sm hover:text-brand-color' href="#"><p>Hakkımızda</p></a>
              <a className='text-sm hover:text-brand-color' href="#"><p>Kariyer</p></a>
              <a className='text-sm hover:text-brand-color' href="#"><p>Teknoloji Kariyerleri</p></a>
              <a className='text-sm hover:text-brand-color' href="#"><p>İletişim</p></a>
              <a className='text-sm hover:text-brand-color' href="#"><p>Sosyal Sorumluluk Projeleri</p></a>
              <a className='text-sm hover:text-brand-color' href="#"><p>Basın Bültenleri</p></a>
            </nav>
          </section>
          <section>
          <nav className='grid gap-y-2'>
              <div className='text-lg text-primary-brand-color'>Getir'i keşfet</div>
              <a className='text-sm hover:text-brand-color' href="#"><p>Hakkımızda</p></a>
              <a className='text-sm hover:text-brand-color' href="#"><p>Kariyer</p></a>
              <a className='text-sm hover:text-brand-color' href="#"><p>Teknoloji Kariyerleri</p></a>
              <a className='text-sm hover:text-brand-color' href="#"><p>İletişim</p></a>
              <a className='text-sm hover:text-brand-color' href="#"><p>Sosyal Sorumluluk Projeleri</p></a>
              <a className='text-sm hover:text-brand-color' href="#"><p>Basın Bültenleri</p></a>
            </nav>
          </section>
        </div>
        <div className='flex justify-between items-center border-t border-gray-100 mt-6 py-6'>
          <div className='text-xs text-gray-700 flex gap-x-8'>
            © 2024 Getir
            <a href="#">Bilgi Toplumu Hizmetleri</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer