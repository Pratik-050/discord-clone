import React from 'react'
import { SignedIn, SignInButton, UserButton, SignedOut } from '@clerk/nextjs'

function LoginScreen() {
    return (
        <div className='h-full w-full fixed flex pr-4 justify-center items-center'>
            <SignedOut>
                <SignInButton>
                    <button className='h-20 w-xl bg-purple-500 text-white p-4 rounded-xl'>
                        Login to your Discord account
                    </button>
                </SignInButton>
            </SignedOut>
        </div>
    )
}

export default LoginScreen