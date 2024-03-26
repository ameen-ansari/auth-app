import React from 'react'
import { logo, typeformIcon } from '../../../helper/icons'

function ContentSec() {
  return (
    <div className="flex flex-col justify-center items-center gap-[24px]">
      <p className="flex">
        <img src={logo} alt="" />
        &#160; &#160; <img src={typeformIcon} alt="" />
      </p>
      <p className="text-[24px] max-w-[542px] leading-[36px] text-dark-100 font-extralight mx-auto text-center">
        Get better data with conversational forms, surveys, quizzes & more.
      </p>
    </div>
  )
}

export default ContentSec
