import React, { ReactNode } from 'react'

export default function PageHeader({title, children}: {title: string; children: ReactNode[] | ReactNode}) {
  return (
    <div>
      <h1 className='font-bold text-2xl'>
        { title }
      </h1>
      <h3 className='text-md'>
        { children }
      </h3>
    </div>
  )
}