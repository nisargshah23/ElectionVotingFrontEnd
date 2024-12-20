import BannerVerification from './component/BannerVerification'
import LoginPage from './component/LoginPage'
import SignupPage from './component/Signup'
import { VerificationCountDisplay } from './component/verificationCount'
<<<<<<< HEAD
import VoteParty from './component/VoteParty'


=======
import { AdminNav } from './component/adminNav'
import {  Routes, Route } from "react-router-dom";
import { PartyVerifaction } from './component/partyVerification'
import { PartyVerificationApprovalPage } from './component/partyVerificationApprovelpage'
import { VoterVerificationListDisplay } from './component/voterVerification/VoterVerificationListDisplay'
import { VoterVerification } from './component/voterVerification/voterVerification'
>>>>>>> origin/master

function App() {

  return (
    <>
<<<<<<< HEAD
      {/* <VerificationCountDisplay/> */}
      {/* <LoginPage /> */}

      {/* <VoteParty /> */}
      {/* <BannerVerification /> */}
=======
    <Routes>
      <Route path='admin/' element={<VerificationCountDisplay/>}/>
      <Route path='admin/partyVerification' element={<PartyVerifaction/>}/>
      <Route path='admin/partyVerification/:id' element={<PartyVerificationApprovalPage/>}/>
      <Route path='admin/voterVerification/' element={<VoterVerificationListDisplay/>}/>
      <Route path='admin/voterVerification/:id' element={<VoterVerification/>}/>
  {/* // <VerificationCountDisplay/> */}
      </Routes>
>>>>>>> origin/master
    </>
  )
}

export default App
