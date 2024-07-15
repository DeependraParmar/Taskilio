import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

const headingFont = localFont({
    src: '../public/fonts/font.woff2'
})

const logo = () => {
  return (
    <>
        <Link href={'/'}>
            <div className='hover:opacity-75 transition justify-center items-center hidden md:flex'>
                <Image src={'/logo.png'} alt='Logo' height={40} width={40} />
                  <p className={cn('text-lg pt-1 text-neutral-700', headingFont.className)}>Taskilio</p>
            </div>
        </Link>
    </>
  )
}

export default logo;
