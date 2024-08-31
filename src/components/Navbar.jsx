import React, { useState } from 'react';
import { navLinks } from '../data';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import styles from '../style';
import { logo } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
 

  return (
    <nav className={`sticky ${styles.paddingX} h-[90px] flex justify-between items-center`}>
      <img src={logo} alt="logo" className="w-[55px] h-[55px] rounded-full z-30 object-cover" />
      <ul className="list-none lg:flex hidden justify-center items-center  gap-16">
        {navLinks.map((item, index) => (
          <li
            key={index}
            className={`relative font-poppins font-[600] cursor-pointer text-white hover:text-blue text-[20px] duration-300 `}
          >
            <a href={`#${item.to}`}>
            {item.nameAr}
            </a>
          </li>
        ))}
      </ul>

     
      <div className={`w-full lg:hidden flex flex-1 justify-end items-center`}>
        {toggle ? (
          <RiCloseLine color="white" cursor="pointer" size={27} onClick={() => setToggle(false)} />
        ) : (
          <RiMenu3Line color="white" cursor="pointer" size={27} onClick={() => setToggle(true)} />
        )}

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } flex-col gap-10 z-20 p-6 absolute top-[50%] left-3 mx-10 my-2  rounded-xl bg-[#222] justify-center items-center sidebar`}
        >
          <ul className="list-none flex justify-center items-center gap-8 flex-col">
            {navLinks.map((item, index) => (
              <li
                key={index}
                className={`relative font-poppins font-medium cursor-pointer text-[17px] duration-300 text-white hover:text-blue`}
              >
              <a href={`#${item.to}`}>
              {item.nameAr}
                </a>
              </li>
            ))}
          </ul>
        
        </div>
      </div>
   
     

     
    </nav>
  );
};

export default Navbar;
