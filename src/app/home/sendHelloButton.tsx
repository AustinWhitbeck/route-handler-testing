
'use client';

import { sendHello } from "./get-hello";

const SendHelloButton = () => {
  return (
    <form action={sendHello}>
    <button type="submit"> Test Send Hello Button</button>
    </form>
  )
}

export default SendHelloButton;