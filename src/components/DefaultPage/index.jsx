import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'

export const DefaultPage = ({children}) => {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  )
}
