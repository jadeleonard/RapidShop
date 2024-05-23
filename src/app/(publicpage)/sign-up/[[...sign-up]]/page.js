import React from 'react'
import { SignUp } from '@clerk/nextjs'
const SignIn = () => {
  return (
    <div>
      <SignUp signInFallbackRedirectUrl='/dashboard'/>
    </div>
  )
}

export default SignIn
