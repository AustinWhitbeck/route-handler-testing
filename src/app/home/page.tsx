'use client'

import React from 'react'
import GetHelloButton from './getHelloButton'
import SendHelloButton from './sendHelloButton'

const HomePage = () => {
  return (
    <>
    <h1>Home Page</h1>
    <GetHelloButton />
    <SendHelloButton />
    </>
  )
}

export default HomePage