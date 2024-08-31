import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../style';
import { product1, productImg1, productImg2, productImg3, productImg4 } from '../assets';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../motion';

Modal.setAppElement('#root');

const Products = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');

  const openModal = (img) => {
    setModalImg(img);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImg('');
  };

  return (
    <section id='products' className={`relative min-h-[100vh] flex flex-col gap-5 ${styles.padding}`}>
      <div className='gradient-circle4'></div>
      <motion.h1
       variants={textVariant(0.3)}
       initial='hidden'
       whileInView='show'
      className={`${styles.title} text-center relative`}>
        صور المنتج
      </motion.h1>
      <div className='w-full flex flex-col gap-5 justify-center items-center'>
        <div className={`${styles.marginY} w-full flex justify-center items-center gap-5`}>
          <motion.div
            variants={textVariant(0.5)}
            initial='hidden'
            whileInView='show'
            className='flex flex-col gap-3'
          >
            <img
              src={productImg2}
              alt="Founder"
              className='rounded-[15px] w-[280px] md:h-[350px] cursor-pointer'
              onClick={() => openModal(productImg2)}
            />
            <img
              src={productImg1}
              alt="about"
              className='rounded-[15px] w-[250px] md:h-[350px] cursor-pointer'
              onClick={() => openModal(productImg1)}
            />
          </motion.div>
          <motion.div
            variants={fadeIn('top', 'tween', 0.5, 0.1)}
            initial='hidden'
            whileInView='show'
          >
            <img
              src={productImg4}
              alt="about"
              className='rounded-[15px] w-[280px] md:h-[350px] cursor-pointer'
              onClick={() => openModal(productImg4)}
            />
          </motion.div>
        </div>

        <a href="https://salla.sa/beautyway24/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D8%B4%D8%A7%D9%85%D8%A8%D9%88-%D8%A8%D9%84%D8%B3%D9%85-%D8%A7%D9%84%D9%83%D9%8A%D8%B1%D8%A7%D8%AA%D9%8A%D9%86/p1666220889"
          target='_blank' 
          rel="noopener noreferrer" 
          className="relative inline-block text-lg group -z-0"
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">اطلبيه الآن</span>
          </span>
          <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </a>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center z-50 justify-center bg-black bg-opacity-75"
        overlayClassName="fixed inset-0"
        contentClassName="relative flex items-center justify-center"
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          &times;
        </button>
        <img
          src={modalImg}
          alt="Enlarged"
          className="sm:max-w-full max-w-[80%] max-h-[80%] rounded-[25px] object-contain m-5"
        />
      </Modal>
    </section>
  );
};

export default Products;
