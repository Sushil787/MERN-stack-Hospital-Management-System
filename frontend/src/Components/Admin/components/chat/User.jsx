import React from 'react'
import {useState,useEffect} from 'react'
import IndividualUser from './IndividualUser'



const User = ({setCurrentuser}) => {
    const [conversation,setConversation]=useState([])





    useEffect(() => {
        const getConversation=async( )=>{
            try {
                const res=await fetch(`http://localhost:8080/get-conversation/${localStorage.getItem('userId')}`)
                const data=await res.json()
                
                setConversation(data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getConversation()
    }
    , [])
    

    

  return (
    <div className="chats">

        {
            conversation.map((c)=>(
               
                <IndividualUser  setCurrentuser={setCurrentuser} conversation={c} key={c._id}/>
            ))
        }
         

   
    
    </div>
  )
}

export default User