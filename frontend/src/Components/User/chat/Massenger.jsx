import React from 'react'

import axios from 'axios'
import { useEffect } from 'react'
import Message from './Message'


const Massenger = ({currentuser}) => {

    const [newmessage,setNewmessage]=React.useState('')
    const [messages,setMessages]=React.useState([])
    
    const fetchmessage= async()=>{
        try {
          const response=await axios.get(`http://localhost:8080/get-message/${currentuser._id}`,
          {
            headers:{
              token:localStorage.getItem('token')
            }
          }
          )
          console.log(response.data)
          setMessages(response?.data)
          
        } catch (error) {
          
          console.log(error.message)
        }
      }
  
      useEffect(() => {
          fetchmessage()
          }
      , [currentuser])


    const handlesubmit= async(e)=>{
        e.preventDefault()
        const message={
            sender:localStorage.getItem('userId'),
            text:newmessage,
            conversationId:currentuser._id
        }
      
        try {
            const response= await axios.post('http://localhost:8080/Add-message',message,
            {
                headers:{
                    token:localStorage.getItem('token')
                }
            }
            )
          
           setMessages([...messages,response.data])
            setNewmessage('')

            
        } catch (error) {
            console.log(error.message)
            
        }
        
    }




    
  return (
    <div className="chat">


        {
            currentuser?
            <>
        <div className="chatinfo">
            <span>Niroj</span>
            
        </div>


        <div className="messages">
    {
      messages?.map((m)=>(
        <Message message={m} key={m._id}/>
      ))
    }

    
    
   </div>

        <div className='input'>
        <input type="text" className='inputfield' value={newmessage} onChange={(e)=>setNewmessage(e.target.value)} placeholder='write a message' />
        <button onClick={handlesubmit}>Send</button>
    </div>

      
        </>:
        <div className="nocurrent">
            <span>select a user</span>
            </div>


}
        

    </div>
  )
}

export default Massenger