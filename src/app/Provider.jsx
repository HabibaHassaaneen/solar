'use client'

import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
export default function Provider(  {children}) {
  return (

    <NextUIProvider>
    {children}
  </NextUIProvider>

  )
}
