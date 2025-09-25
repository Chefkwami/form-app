import React from 'react'
import illustration from "../assets/illustration.png";
import style from "../components/MainContent.module.css"

function MainContent() {
  return (
    <div className={`flex justify-center item-center h-screen ${style.image}`}>
      <img src={illustration} alt="illustration"/>
    </div>
  )
}

export default MainContent