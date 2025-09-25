import React from 'react'
import style from "../components/Buttons.module.css"
import toast from "react-hot-toast"

import { useEmailStore} from "../store/email"

function Buttons() {

  const[newEmail, setNewEmail] = React.useState({
    email:""
  });
  const createEmail = useEmailStore((state)=>state.createEmail)
  const handleEmailAdd = async (e)=>{
    e.preventDefault()
    
    const {success, message} =await createEmail(newEmail);
    if(success){
      toast.success(message)
      setNewEmail({email:""})
    }else{
      toast.error(message)
    }
   
  }
  return (
    <form onSubmit={handleEmailAdd}>
    <div className={`flex flex-col justify-center items-center ${style.btnCon} gap-3 lg:flex lg:flex-row lg:gap-3`}>
      <input value={newEmail.email}onChange={(e)=>setNewEmail({email:e.target.value})} type='text' name="email" placeholder='Your email address...' className={`rounded-full text-xs border border-gray-300 ${style.input}`}/>
      <button type="submit" className={`bg-sky-600 text-white tracking-widest rounded-full text-xs shadow ${style.button} hover:bg-sky-700`}>Notify Me</button>
      
    </div>
    </form>
  )
}

export default Buttons