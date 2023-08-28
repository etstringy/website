import NavbarMusic from '@mae/components/layout/NavbarMusic';
import { ComponentChildren } from '@mae/misc/types'
import React, { Fragment } from 'react'

export default function layout({children}: {children: ComponentChildren}) {
  return (
    <Fragment>
      <NavbarMusic/>
      {children}
    </Fragment>
  )
}
