import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Sidebar from "@/components/Sidebar/Sidebar";
import {GlobalContextProvider} from "@/context/GlobalContext";

const poppin = Poppins({
  weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: "swap"
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppin.className}`}>
        <GlobalContextProvider>
          <Sidebar />
          {/*<main className={'ml-[345px] px-3 py-6'}>*/}
              {children}
          {/*</main>*/}
        </GlobalContextProvider>
      </body>
    </html>
  )
}