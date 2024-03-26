import React from 'react'

function Button({ text }) {
  return (
    <button className="border border-dark px-[10px] h-[26px] rounded-[6px] my-[auto] text-[12px] text-dark font-medium">
      {text}
    </button>
  )
}

export default Button
