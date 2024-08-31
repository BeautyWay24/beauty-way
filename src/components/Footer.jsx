import React from 'react';
import { FaBehance, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone, FaPhoneAlt, FaSearchLocation, FaTiktok, FaTwitter, FaVimeo, FaVoicemail } from 'react-icons/fa';
import styles from '../style';
import { logo } from '../assets';

const Footer = () => {


  return (
    <footer  id="contact" className={`w-full -z-0 bg-[#111] relative flex flex-col gap-5 ${styles.padding}`}>
      
      <div className='flex md:flex-row flex-col md:justify-between justify-center  items-center gap-[50px]'>
      <div className='flex md:items-start items-center flex-col gap-2 md:mt-0 mt-10 z-10'>
        <a href='#'>
        <div className='flex gap-0 items-center'>
        <img src={logo} alt="logo" className="w-[55px] h-[55px] rounded-full z-30 object-cover" />
        </div>
        </a>
        <p className='md:max-w-[480px] w-[95%] text-[18px] text-white md:text-start text-center leading-[32px]'>
        استمتعي بأفضل تجربة جمال مع بيوتي واي
        اكتشفي مجموعة منتجاتنا الطبيعية والعضوية التي تعزز جمالك بشكل صحي وآمن.
        </p>
        
      </div>

      <div className='flex md:flex-row flex-col md:justify-between justify-center md:items-start items-center gap-[40px] md:mt-0 mt-10 z-10'>
        <ul className='flex flex-col gap-3 md:text-start text-center'>
          <li><h3 className='text-white text-[20px] font-semibold'>روابط سريعة</h3></li>
          <li><a href='#home' className='text-[16px] duration-300 hover:text-blue font-medium text-white'>الرئيسية</a></li>
          <li><a href='#about' className='text-[16px] duration-300 hover:text-blue font-medium text-white'>من نحن</a></li>
          <li><a href='#products' className='text-[16px] duration-300 hover:text-blue font-medium text-white'>منتجاتنا</a></li>
          <li><a href='#why_us' className='text-[16px] duration-300 hover:text-blue font-medium text-white'>لماذا نحن ؟</a></li>
        </ul>

        <ul className='flex flex-col justify-center items-center gap-3 md:text-start text-center'>
          <li><h3 className='text-white text-[20px] font-semibold'>وسائل التواصل</h3></li>

          <ul className='flex flex-row gap-2 items-center'>
          <li className='flex items-center gap-4 '>
            <div className='circle-icons w-[50px] h-[50px] flex justify-center items-center rounded-full bg-transparent'>
              <a href='https://www.facebook.com/people/Beautyway/61560046036718/?mibextid=LQQJ4d&rdid=I2eqb0fDkhDgHwR9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FEgrCLiYjydaYKb7Z%2F%3Fmibextid%3DLQQJ4d' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
                <FaFacebook className="text-white" size={25} />
              </a>
            </div>
          </li>
          <li className='flex items-center gap-4 '>
          <div className='circle-icons w-[50px] h-[50px] flex justify-center items-center rounded-full bg-transparent'>
              <a href='https://www.instagram.com/bbeauty_way?igsh=cWVreTEzbzBzZTl5' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
                <FaInstagram className="text-white" size={25} />
              </a>
            </div>
          </li>
          <li className='flex items-center gap-4 '>
          <div className='circle-icons w-[50px] h-[50px] flex justify-center items-center rounded-full bg-transparent'>
              <a href='https://www.tiktok.com/@beautyway24?_t=8nuhjDm4RuA&_r=1' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
                <FaTiktok className="text-white" size={25} />
              </a>
            </div>
          </li>
          <li className='flex items-center gap-4 '>
          <div className='circle-icons w-[50px] h-[50px] flex justify-center items-center rounded-full bg-transparent'>
              <a href='https://x.com/beauty_store123?s=11&t=pIlroXs5ABj8dKvGTD8pbQ' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
                <FaTwitter className="text-white" size={25} />
              </a>
            </div>
          </li>
         
          </ul>

        </ul>

        <ul className='flex flex-col gap-5 justify-center items-center md:text-start text-center'>
          <li><h3 className='text-white text-[20px] font-semibold'>تواصل معنا</h3></li>
          <li className='flex flex-row gap-10 items-center'>
          <a 
          href="https://wa.me/966568760579" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex gap-3 text-white text-[16px] duration-300 hover:text-blue font-medium"
          >
          <FaPhone size={25} color="white" />
          <span>+966534646943</span>
          </a>
         
          </li>
        
        </ul>
      </div>

      </div>

     
  


    </footer>
  )
}

export default Footer;