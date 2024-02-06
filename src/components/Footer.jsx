import React from 'react'
import { FaFacebook,FaInstagram,FaTwitter,} from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";

function Footer() {

  return (
    <div className='bg-white'>
      <div className='container mx-auto px-4 md:px-0'>
        <div className='grid md:grid-cols-4 pt-5 md:pt-10 gap-y-6'>
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
              <a className='text-sm hover:text-brand-color' href="#"><p>Basın Bültenleri</p></a>
            </nav>
          </section>
          <section>
          <nav className='grid gap-y-2'>
              <div className='text-lg text-primary-brand-color'>Yardıma mı ihtiyacın var?</div>
              <a className='text-sm hover:text-brand-color' href="#"><p>Sıkça Sorulan Sorular</p></a>
              <a className='text-sm hover:text-brand-color' href="#"><p>Kişisel Verilerin Korunması</p></a>
              <a className='text-sm hover:text-brand-color' href="#"><p>Gizlilik Politikası</p></a>
              <a className='text-sm hover:text-brand-color' href="#"><p>Kullanım Koşulları</p></a>
              <a className='text-sm hover:text-brand-color' href="#"><p>Çerez Politikası</p></a>
              <a className='text-sm hover:text-brand-color' href="#"><p>İşlem Rehberi</p></a>
            </nav>
          </section>
          <section>
          <nav className='grid gap-y-2'>
              <div className='text-lg text-primary-brand-color'>İş Ortağımız Ol</div>
              <a className='text-sm hover:text-brand-color' href="#"><p>Bayimiz Olun</p></a>
              <a className='text-sm hover:text-brand-color' href="#"><p>Deponu Kirala</p></a>
              <a className='text-sm hover:text-brand-color' href="#"><p>GetirYemek Restoranı Ol</p></a>
              <a className='text-sm hover:text-brand-color' href="#"><p>GetirÇarşı İşletmesi Ol</p></a>
              <a className='text-sm hover:text-brand-color' href="#"><p>Zincir Restoranlar</p></a>
              
            </nav>
          </section>
        </div>
        <div className='flex flex-col md:flex-row gap-y-4 justify-between items-center border-t border-gray-100 mt-6 py-6'>
          <div className='text-xs text-gray-700 flex gap-x-8'>
            © 2024 Getir
            <a href="#">Bilgi Toplumu Hizmetleri</a>
          </div>
          <nav className='flex gap-x-4'>
            <a href="#" className=' w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center'>
              <FaFacebook size={21} />
            </a>
            <a href="#" className=' w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center'>
              <FaTwitter size={21} />
            </a>
            <a href="#" className=' w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center'>
              <FaInstagram size={21} />
            </a>
            <a href="#" className='h-8 text-gray-500 transition-colors rounded-lg hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center text-sm'>
              <BiGlobe size={18}/> Türkçe(TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Footer