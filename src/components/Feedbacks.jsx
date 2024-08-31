import React from 'react';
import styles from '../style';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { textVariant } from '../motion';

const Testimonials = () => {
  const feedBack = [
    {
      id: 1,
      nameAr: "ياسمين عبد الرحمان",
      textAr: "يعطيكم العافية على اهتمامكم و اخص امتناني لخدمة العملاء المتجاوبين"
    },
    {
      id: 2,
      nameAr: "شهد الأحمدي",
      textAr: "توصيل سريع ووصلتني المنتجات سليمة تستاهلون 5 نجوم",
    },
    {
      id: 3,
      nameAr: "شوق النفيعي",
      textAr: "شكرا على المنتجات الجميلة بالفعل فرق معايا"
    },
    {
      id: 4,
      nameAr: "رهف عبد الله",
      textAr: "من أفضل المتاجر الي تعاملت معها"
    },
  ];
  
  return (
    <section className={`bg-gray-100 ${styles.padding} w-full flex flex-col`}>
      <div className='w-full'>
        <div className='flex flex-col gap-2'>
          <motion.h1
            variants={textVariant(0.3)}
            initial='hidden'
            whileInView='show'
            className={`md:text-[58px] text-[45px] xs:leading-[58.8px] leading-[66.8px] w-full mt-5 font-[500] text-center`}>
            أراء عملائنا 
          </motion.h1>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        className="w-full -z-0 my-16 cursor-pointer"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.25,
            spaceBetween: 30,
          },
        }}
      >
        {feedBack.map((item , index) => (
          <SwiperSlide key={item.id} className="flex items-center flex-col gap-3">
            <motion.div
              initial={{ opacity: 0, translateX: -50 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.3, delay: index * 0.4 }}
              className="h-[200px] group w-[95%] md:max-w-[350px] border-2 border-gray-300 p-5 rounded-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-teal-400 hover:to-teal-500 hover:text-white hover:border-transparent flex flex-col gap-3"
            >
              <p className={`${styles.paragraph} text-gray-600 text-sm group-hover:text-white`}>
                {item.textAr}
              </p>
              <div className="flex items-center gap-5 my-5">
                <FaUser className='w-6 h-6 text-gray-600 group-hover:text-white'/>                
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-gray-600 group-hover:text-white">
                   {item.nameAr}
                  </h4> 
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
