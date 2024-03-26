import { Typography } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { alert } from '../../../helper/icons'

function BasicInput({ placeholder, type }) {
  const [isvisible, setIsvisible] = useState(false)
  const [selectedType, settype] = useState(false)
  const [value, setvalue] = useState('')
  const [error, seterror] = useState('')
  const emailRegex = /^([\w!#$%&'*+/=?^`{|}~-]+(?:\.[\w!#$%&'*+/=?^`{|}~-]+)*)@((?:[\dA-Za-z](?:[\dA-Za-z-]*[\dA-Za-z])?\.)+[\dA-Za-z](?:[\dA-Za-z-]*[\dA-Za-z])?)$/
  const passwordRegexSpecial = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  const UserValidation = (text) => {
    if (type === 'email') {
      if (!text.match(emailRegex)) {
        seterror('Invalid Email')
      } else {
        seterror('')
      }
    } else {
      if (!text.match(passwordRegexSpecial)) {
        seterror(
          'Use at least 8 characters, one uppercase, one lowercase , one number and one special character.',
        )
      } else {
        seterror('')
      }
    }
  }

  return (
    <div>
      <div className="max-w-sm">
        <div className="relative">
          <input
            type={selectedType ? 'text' : type}
            className="text-[16px] border-dark-200 text-dark font-medium py-3 px-4 block w-fullrounded-lg text-sm border rounded-[3px] w-[254.5px] h-[38.5px]  "
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
              setvalue(e.target.value)
              UserValidation(value.concat(e.target.value))
            }}
          />
          {error.length > 0 && (
            <Typography
              variant="small"
              color="gray"
              className="mt-2 flex items-center gap-1 font-normal text-danget-100 text-[12px] leading-[14px] w-[254px]"
            >
              <img className='w-[12px] h-[12px]' src={alert} alt="" />
              {error}
            </Typography>
          )}
          {type === 'password' && (
            <button
              type="button"
              className="absolute top-0 end-0 p-3.5"
              onClick={() => {
                setIsvisible(!isvisible)
                settype(!selectedType)
              }}
            >
              <svg
                className="flex-shrink-0 size-3.5 text-gray-400 dark:text-neutral-600"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path className="block" d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                <path
                  className="block"
                  d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                />
                <path
                  className="block"
                  d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                />
                <line
                  className={`${isvisible ? 'hidden' : 'block'}`}
                  x1="2"
                  x2="22"
                  y1="2"
                  y2="22"
                />
                <path
                  className="block hs-password-active:block"
                  d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                />
                <circle
                  className="block hs-password-active:block"
                  cx="12"
                  cy="12"
                  r="3"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default BasicInput
