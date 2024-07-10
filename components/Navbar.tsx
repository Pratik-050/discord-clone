import React from 'react'
import { SignedIn, SignInButton, UserButton, SignedOut } from '@clerk/nextjs'

function Navbar() {
    return (
        <div className='h-20 w-full fixed flex pr-4 justify-end items-center'>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    )
}

export default Navbar