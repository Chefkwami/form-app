import React from 'react'
import style from "../components/Buttons.module.css"

function Buttons() {
  return (
    <div className={`flex justify-center item-center gap-3 ${style.btnCon}`}>
      <input type='text' name="email" placeholder='Your email address...' className={`rounded-full text-xs border border-gray-300 ${style.input}`}/>
      <button type="submit" className={`bg-sky-600 text-white tracking-widest rounded-full text-xs shadow ${style.button}`}>Notify Me</button>
    </div>
  )
}

export default Buttons