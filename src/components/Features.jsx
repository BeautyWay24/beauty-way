import React from 'react'
import styles, { layout } from '../style'
import { product1 } from '../assets'

const Features = () => {
  return (
    <section id='about' className={`relative min-h-[100vh] bg-gray-200 ${layout.section}  ${styles.padding}`}>
     <div className='gradient-circle2'></div>
     <div className={`${layout.sectionInfo} gap-5`}>
      <h1 className={`${styles.title} font-[600]`}>
      عن بيوتي واي

      </h1>
      <p className={`${styles.paragraph}`}>
      في بيوتي واي، نؤمن بأن الجمال ينبع من الداخل. نقدم منتجات تجميل طبيعية عالية الجودة تبرز جمالك الطبيعي. مع خبرة 8 سنوات، نوفر أفضل المنتجات من أشهر العلامات التركية. منتجاتنا مصنوعة من مكونات طبيعية آمنة، ونقدم تشكيلة تلبي جميع احتياجاتك. نلتزم بخدمة عملاء متميزة، مع شحن مجاني للطلبات فوق 299 ريال وتوصيل سريع في جميع أنحاء السعودية.
      </p>
     </div>
     <div className={`${layout.sectionImg} z-50`}>
      <div className='w-[550px] h-[550px]'>
      <img src={product1} alt="product img" className='object-cover w-[100%] h-[100%] rounded-[25px]'/>
      </div>
     </div>
    </section>
  )
}

export default Features