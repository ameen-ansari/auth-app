import React, { useState } from 'react'
import BasicInput from './BasicInput'
import { Checkbox } from '@material-tailwind/react'
import { bottomArrow } from '../../../helper/icons'
import { OAuthButton } from './Button'

function Form() {
  const [moreOptios, setmoreOptios] = useState(false)
  const [data, setData] = useState({})

  const updateState = (inputName, inputValue) => {
    setData((prevState) => ({ ...prevState, [inputName]: inputValue }))
  }
  return (
    <div className="flex flex-col gap-[1rem] pb-[2rem]">
      <BasicInput placeholder="Email" type="email" />
      <BasicInput placeholder="Password" type="password" />
      <div className="flex justify-start items-start">
        <Checkbox
          style={{ background: '#000' }}
          className="w-[20px] h-[20px] mr-[14px]"
        />
        <p className="text-dark text-[14px] w-[193px] leading-[18px]">
          I agree to Typeform’s{' '}
          <span className="underline">Terms of Service</span>,
          <span className="underline">Privacy Policy</span>and
          <span className="underline">Data Processing Agreement</span>
        </p>
      </div>
      <div
        className={`flex gap-[12px] flex-col ${
          moreOptios ? 'h-[auto]' : 'h-[30px]'
        } transition-all ease-in-out duration-300 overflow-hidden`}
      >
        <div className="flex pl-[30px] pt-[8px] justify-between align-middle pr-[10px]">
          <p className="text-dark font-medium text-[14px]">See options</p>
          <div
            className="w-[28px] h-[32px] cursor-pointer flex justify-center items-center"
            onClick={() => setmoreOptios(!moreOptios)}
          >
            <img
              className={`w-[12px] h-[7px] block my-auto transform transition-all ease-in-out duration-300 ${
                moreOptios ? ' rotate-180' : ' rotate-0'
              }`}
              src={bottomArrow}
              alt=""
            />
          </div>
        </div>
        <div className="pl-[30px] w-[249px] flex gap-[8px] flex-col">
          <p className="text-[14px] text-dark leading-[20px]">
            Get useful tips, inspiration, and offers via e-communication.
          </p>
          <div className="flex gap-[1rem] items-center">
            <input
              onChange={() => updateState('getTips', 0)}
              className="w-[20px] h-[20px]"
              type="radio"
              checked={data?.getTips === 0}
            />
            <p className='text-dark text-[14px] cursor-pointer' onClick={() => updateState('getTips', 0)}>Yes</p>
            <input
              onChange={() => updateState('getTips', 1)}
              className="w-[20px] h-[20px]"
              type="radio"
              checked={data?.getTips === 1}
            />
            <p className='text-dark text-[14px] cursor-pointer' onClick={() => updateState('getTips', 1)}>No</p>
          </div>
        </div>
        <div className="pl-[30px]  w-[249px] flex gap-[8px] flex-col">
          <p className="text-[14px] text-dark leading-[20px]">
            Tailor Typeform to my needs based on my activity.
            <span className="text-dark-100">See Privacy Policy</span>
          </p>
          <div className="flex gap-[1rem] items-center">
            <input
              onChange={() => updateState('activities', 0)}
              className="w-[20px] h-[20px]"
              type="radio"
              checked={data?.activities === 0}
            />
            <p className='text-dark text-[14px] cursor-pointer' onClick={() => updateState('activities', 0)}>Yes</p>
            <input
              onChange={() => updateState('activities', 1)}
              className="w-[20px] h-[20px]"
              type="radio"
              checked={data?.activities === 1}
            />
            <p className='text-dark text-[14px] cursor-pointer' onClick={() => updateState('activities', 1)}>No</p>
          </div>
        </div>
        <div className="pl-[30px] w-[249px] flex gap-[8px] flex-col">
          <p className="text-[14px] text-dark leading-[20px]">
            Enrich my data with select third parties for more relevant content.
            <br />
            <span className="text-dark-100">See Privacy Policy</span>
          </p>
          <div className="flex gap-[1rem] items-center">
            <input
              onChange={() => updateState('thirdParties', 0)}
              className="w-[20px] h-[20px]"
              type="radio"
              checked={data?.thirdParties === 0}
            />
            <p className='text-dark text-[14px] cursor-pointer' onClick={() => updateState('thirdParties', 0)}>Yes</p>
            <input
            id='os-03'
              onChange={() => updateState('thirdParties', 1)}
              className="w-[20px] h-[20px]"
              type="radio"
              checked={data?.thirdParties === 1}
            />
            <p className='text-dark text-[14px] cursor-pointer' onClick={() => updateState('thirdParties', 1)}>No</p>
          </div>
        </div>
        <div className="pl-[30px] w-[249px] flex gap-[8px] flex-col">
          <p className="text-dark-300 text-[14px] leading-[20px]">
            You can update your preferences in your Profile at any time
          </p>
        </div>
      </div>

      <OAuthButton redius={3} isdark text="Create my free account" />
    </div>
  )
}

export default Form
