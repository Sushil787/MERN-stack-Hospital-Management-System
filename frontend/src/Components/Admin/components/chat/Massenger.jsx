import React from 'react'
import Messages from './Messages'
import Input from './Input'

const Massenger = ({currentuser}) => {

    
  return (
    <div className="chat">


        {
            currentuser?
            <>
        <div className="chatinfo">
            <span>Niroj</span>
            
        </div>


        <Messages/>

        <Input/>
        </>:
        <div className="nocurrent">
            <span>select a user</span>
            </div>


}
        

    </div>
  )
}

export default Massenger