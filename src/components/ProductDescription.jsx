import React from 'react'
import styles, { layout } from '../style'
import {description_img, product2Bg, productImg1, productImg2, productImg4} from '../assets' 
import { motion } from 'framer-motion'
import { textVariant } from '../motion'

const ProductDescription = () => {
  return (
    <section id='about' className={`relative -z-0 min-h-[100vh] bg-gray-200 ${layout.section}  ${styles.padding}`}>
      <div className='gradient-circle2'></div>
      <motion.div
       variants={textVariant(0.3)}
       initial='hidden'
       whileInView='show'
      className={`${layout.sectionInfo} gap-5 `}>
        <h1 className={`${styles.title} font-[600] z-50`}>
        شعرك متكسر ولا ينمو ؟
        </h1>
        <p className={`${styles.paragraph} text-black z-50`}>
        المجموعة الأمثل لعلاج الشعر التالف والمجعد وحمايته من التلف والتساقط وزيادة نموه وتقويته من الجذور والحصول على نعومة فائقة للشعر ومعالجة الشعر المتقصف
        </p>
        <a href="#products" class="relative inline-block text-lg group">
        <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span class="relative">اكتشفي المنتج</span>
        </span>
        <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </a>
      </motion.div>
   
     
      
     
          <motion.div
       variants={textVariant(0.3)}
       initial='hidden'
       whileInView='show'
       className={`${layout.sectionImg} `}>
        <div className='w-[550px] h-[550px]'>
         <img src={description_img} alt="Product img" className='object-cover w-[100%] h-[100%] rounded-[25px]' />
        </div>
      </motion.div>
     
     

     
 
     
    </section>
  )
}

export default ProductDescription
