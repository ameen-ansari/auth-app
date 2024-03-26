import React from 'react'

export function SignupButton({ text }) {
  return (
    <button className="border w-[64px] border-dark px-[10px] h-[26px] rounded-[6px] my-[auto] text-[12px] text-dark font-medium  ">
      {text}
    </button>
  )
}

export function OAuthButton({ text, isdark, startIcon, redius, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`border relative ${
        isdark ? 'bg-dark text-light' : 'bg-light text-dark'
      } border-dark  px-[16px] w-[256px] h-[42px] ${
        redius ? 'rounded-[3px]' : 'rounded-[10px]'
      } my-[auto] text-[16px]  font-medium flex justify-center items-center`}
    >
      {startIcon && (
        <img
          className="w-[30px] h-[80%] block my-auto absolute left-[8px]"
          src={startIcon}
          alt=""
        />
      )}
      {text}
    </button>
  )
}
