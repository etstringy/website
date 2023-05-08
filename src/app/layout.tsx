import { Inter } from 'next/font/google'
import 'react-tooltip/dist/react-tooltip.css'
import '../css/globals.css'

import Navbar from '../components/layout/Navbar';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const inter = Inter({ preload: true, weight: ['400', '700', '900'], subsets: ['latin']})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"/>
      </head>
      <body className={inter.className + " " + "bg-str-bleck text-gray-200"}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
