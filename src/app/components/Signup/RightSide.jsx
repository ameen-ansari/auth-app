import React, { useState } from 'react'
import ContentSec from './ContentSec'
import Header from './Header'
import OAuthButtons from './OAuthButtons'
import Form from './Form'

function RightSide() {
  const [showForm, setshowForm] = useState(false)
  return (
    <div className=" flex-[1.1] bg-light rounded-tl-[16px] rounded-bl-[16px] gap-[2rem] flex flex-col overflow-y-scroll">
      <Header />
      <div className="flex-1 flex  justify-center items-center flex-col gap-[24px]">
        <ContentSec />
        {showForm ? (
          <Form />
        ) : (
          <OAuthButtons onSignupWithEmail={() => setshowForm(true)} />
        )}
      </div>
    </div>
  )
}

export default RightSide
