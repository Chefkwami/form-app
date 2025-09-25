import React from 'react'
import logo from "../assets/logo.svg"
import style from "../components/Header.module.css"

function Header() {
  return (
    
    <div className="flex flex-col justify-center items-center">
      <img src={logo} alt="Ping-logo" className={style.header}/>
      <h1 className={`text-5xl font-normal text-neutral-400 tracking-wide ${style.new1} text-center`}>We are launching <span className='font-bold text-neutral-950'>soon!</span></h1>
      <p className={`text-xl text-neutral-800 ${style.new2}`}>Subscribe and get notified</p>
    </div>
  
  )
}

export default Header