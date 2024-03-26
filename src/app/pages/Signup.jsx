import React from 'react'
import LeftSide from '../components/Signup/LeftSide'
import RightSide from '../components/Signup/RightSide'

function Signup() {
  return (
    <div className="flex w-[100%] h-[100vh] bg-dark overflow-hidden">
      <LeftSide />
      <RightSide />
    </div>
  )
}

export default Signup
