import React from 'react'

const layout = ({children}: { children: React.ReactNode }) => {
  return (
    <div className='h-full bg-slate-100'>
        {/* Navbar here */}
        <main className='pt-40 pb-20 bg-slate-100'>{children}</main>
        {/* Footer here */}
    </div>
  )
}

export default layout
