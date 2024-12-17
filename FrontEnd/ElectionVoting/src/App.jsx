import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { VerificationCountDisplay } from './component/verificationCount'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <VerificationCountDisplay/>
    </>
  )
}

export default App
