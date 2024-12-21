import BannerVerification from "./component/BannerVerification";
import LoginPage from "./component/LoginPage";
import { VerificationCountDisplay } from "./component/verificationCount";
import VoteParty from "./component/VoteParty";
import { Routes, Route } from "react-router-dom";
import { PartyVerifaction } from "./component/partyVerification";
import { PartyVerificationApprovalPage } from "./component/partyVerificationApprovelpage";
import { VoterVerificationListDisplay } from "./component/voterVerification/VoterVerificationListDisplay";
import { VoterVerification } from "./component/voterVerification/voterVerification";
import Register from "./component/voterVerification/VoterRegistration";

function App() {
  return (
    <Routes>
      <Route path="admin/" element={<VerificationCountDisplay />} />
      <Route path="admin/partyVerification" element={<PartyVerifaction />} />
      <Route
        path="admin/partyVerification/:id"
        element={<PartyVerificationApprovalPage />}
      />
      <Route
        path="admin/voterVerification/"
        element={<VoterVerificationListDisplay />}
      />
      <Route
        path="admin/voterVerification/:id"
        element={<VoterVerification />}
      />
      <Route path="/voter-login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />

      <Route path="/voting-page" element={<VoteParty />} />
      <Route path="/Banner-verification" element={<BannerVerification />} />
    </Routes>
  );
}

export default App;
