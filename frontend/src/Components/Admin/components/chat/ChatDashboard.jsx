import React from 'react'
import Sidebar from './Sidebar'
import Massenger from './Massenger'
import './style.css'

const ChatDashboard = () => {

  const [currentuser,setCurrentuser]=React.useState(null)
    const [messages,setMessages]=React.useState([])
  return (
    <div className="home">
        <div className="container">
            <div className="sidebar">
                <Sidebar seCurrentuser={setCurrentuser} />
            </div>
            <div className="massenger">
                <Massenger currentuser={currentuser} />
            </div>
        </div>

        
    </div>
  )
}

export default ChatDashboard