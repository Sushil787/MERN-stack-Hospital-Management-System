import React from 'react'
import Sidebar from './Sidebar'
import Massenger from './Massenger'
import './style.css'

const ChatDashboard = () => {

  const [currentuser,setCurrentuser]=React.useState(null)
    
  return (
    <div className="home">
        <div className="container">
            <div className="sidebar">
                <Sidebar setCurrentuser={setCurrentuser} />
            </div>
            <div className="massenger">
                <Massenger currentuser={currentuser} />
            </div>
        </div>

        
    </div>
  )
}

export default ChatDashboard