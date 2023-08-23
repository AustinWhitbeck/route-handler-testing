
'use client'

import { getHello } from "./get-hello";

const GetHelloButton = () => {
  return (
    <form action={getHello}>
    <button type="submit"> Test Get Hello Button</button>
    </form>
  )
}

export default GetHelloButton;