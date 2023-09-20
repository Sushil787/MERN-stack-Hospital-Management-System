import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import User from './User'

const Sidebar = ({setCurrentuser}) => {
  return (
    <div className='sidebar'>

        <Navbar/>
        <Search/>
        <User  setCurrentuser={setCurrentuser}/>

    </div>
  )
}

export default Sidebar