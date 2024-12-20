import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { VerificationCountDisplay } from './component/verificationCount'
import { AdminNav } from './component/adminNav'
import {  Routes, Route } from "react-router-dom";
import { PartyVerifaction } from './component/partyVerification'
import { PartyVerificationApprovalPage } from './component/partyVerificationApprovelpage'
import { VoterVerificationListDisplay } from './component/voterVerification/VoterVerificationListDisplay'
import { VoterVerification } from './component/voterVerification/voterVerification'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='admin/' element={<VerificationCountDisplay/>}/>
      <Route path='admin/partyVerification' element={<PartyVerifaction/>}/>
      <Route path='admin/partyVerification/:id' element={<PartyVerificationApprovalPage/>}/>
      <Route path='admin/voterVerification/' element={<VoterVerificationListDisplay/>}/>
      <Route path='admin/voterVerification/:id' element={<VoterVerification/>}/>
  {/* // <VerificationCountDisplay/> */}
      </Routes>
    </>
  )
}

export default App
