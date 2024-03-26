import React from 'react'
import { bottomArrow, worldIcon } from '../../../helper/icons'
import Dropdown from './Dropdown'
import { SignupButton } from './Button'

function Header() {
  return (
    <div  className="flex justify-between py-[0.8rem] align-middle h-[52px] px-[24px]">
      <div className="flex w-[80px] my-[auto] justify-between">
        <img
          src={worldIcon}
          className="mr-[8px] w-[17px] h-[17px] block my-[auto]"
          alt=""
        />
        <Dropdown text="English" nextIcon={bottomArrow} />
      </div>
      <div className="flex gap-[8px] justify-end align-bottom">
        <p className="text-dark-200 text-[14px] my-[auto]">
          Already have an account?
        </p>
        <SignupButton text="Log in" />
      </div>
    </div>
  )
}

export default Header
