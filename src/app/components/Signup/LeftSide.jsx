import React from 'react'
import { dashboardImage } from '../../../helper/icons'

function LeftSide() {
  return (
    <div className="hidden flex-[0.9] lg:flex flex-col relative justify-center align-middle gap-[35px]">
      <p className="text-white text-[36px] w-[366px] text-center font-normal mx-auto leading-[44px]">
        Sign up <br /> and come on in
      </p>
      <img
        className="w-[366px] h-[300px] block mx-auto"
        src={dashboardImage}
        alt=""
      />
      <p className="text-light absolute bottom-[40px] w-[100%] text-center text-[14px] ">
        &copy; Typeform
      </p>
    </div>
  )
}

export default LeftSide
