'use client'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import React from 'react'

const page = () => {
    const onClick = async (provider: 'google') => {
        await signIn(provider, {
            callbackUrl: '/'
        });
    }
    return (
        <div>
            <Button onClick={() => onClick('google')}>Google</Button>
        </div>
    )
}

export default page
