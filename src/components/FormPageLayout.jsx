import React from 'react'

export default function PageLayout({children, pageTitle}) {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
        <div className="flex flex-col justify-center w-[70%] bg-white px-[28px] py-[14px] [&>form]:space-y-[24px]">
        <p className="text-headline-5-medium mb-[28px]">{pageTitle}</p>
            {children}
        </div>
    </div>
  )
}
