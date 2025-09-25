import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";
import style from "../components/Footer.module.css"


function Footer() {
  return (
    <div className={`${style.footerCon}`}>
      <ul className={`flex justify-center items-center gap-4 text-sm ${style.socials}`}>
      <li className={`${style.pad} rounded-full shadow-xl hover:bg-[#dee2ec]`}><a href="#"><FaInstagram className='text-sky-600'/></a></li>
        <li className={`${style.pad} rounded-full shadow-xl hover:bg-[#dee2ec]`}><a href="#"><FaLinkedin className='text-sky-600' /></a></li>
        <li className={`${style.pad} rounded-full shadow-xl hover:bg-[#dee2ec]`}><a href="#"><FaFacebookMessenger className='text-sky-600' /></a></li>
      </ul>
      <div >
      <p className={`flex justify-center items-center text-[#3b4e5f] gap-1`}><FaRegCopyright className={''}/> Copyright Ping. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer