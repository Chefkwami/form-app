import React from 'react'
import illustration from "../assets/illustration.png";


function MainContent() {
  return (
    <div className={`flex justify-center items-center`}>
      <img src={illustration} alt="illustration" className='sm:h-auto sm:mb-8 md:h-auto md:mb-12 lg:h-screen'/>
    </div>
  )
}

export default MainContent