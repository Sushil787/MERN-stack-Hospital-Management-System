import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const IndividualUser = ( {conversation,setCurrentuser}) => {
    const [username,Setusername]=React.useState('')
    

    let UserID=conversation.member.find((c)=>c!==localStorage.getItem('userId'))


    const singleUser=async()=>{
        try {
           const response= await axios.get(`http://localhost:8080/singleuser/${UserID}`,
           {
                headers:{
                     token:localStorage.getItem('token')
                }
           }
           )
              
                console.log(response.data)
                Setusername(response?.data?.singleUser?.username)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        singleUser()
    }
    , [conversation])


 









    
  return (


    <div onClick={()=>setCurrentuser(conversation)} className="userchat">
    <span >{username}</span>
    <p>online</p>

</div>
  )
}

export default IndividualUser