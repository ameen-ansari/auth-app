import React from 'react'
import { OAuthButton } from './Button'
import { googleIcon, microsoftIcon } from '../../../helper/icons'

function OAuthButtons({onSignupWithEmail}) {
  return (
    <div className="flex flex-col gap-[1rem]">
      <OAuthButton startIcon={googleIcon} text="Sign up with Google" />
      <OAuthButton startIcon={microsoftIcon} text="Sign up with Microsoft" />
      <p className="text-dark-100 font-normal text-[14px] text-center">OR</p>
      <OAuthButton onClick={onSignupWithEmail} isdark text="Sign up with email" />
    </div>
  )
}

export default OAuthButtons
