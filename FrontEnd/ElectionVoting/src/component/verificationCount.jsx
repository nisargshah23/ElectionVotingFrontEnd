import "../component/Admin/style/NotificationCount.css"
import { AdminNav } from "./adminNav"


export const VerificationCountDisplay=()=>{
 return(
    <>
    <div>
   <AdminNav/>
    <div class="container">
         <a href="/admin/partyVerification" class="card-link-page">
        <div class="card" id="partyCard" onclick="highlightCard('partyCard')">
            <h2>Party Verification</h2>
            <p>Count: <span id="partyCount">120</span></p>
        </div>
        </a>
        <a href="/admin/voterVerification" class="card-link-page">
        <div class="card" id="voterCard" onclick="highlightCard('voterCard')">
            <h2>Voter Verification</h2>
            <p>Count: <span id="voterCount">450</span></p>
        </div>
        </a>
        <div class="card" id="partyCard" onclick="highlightCard('partyCard')">
            <h2>Banner Verification</h2>
            <p>Count: <span id="partyCount">120</span></p>
        </div>
        <div class="card" id="partyCard" onclick="highlightCard('partyCard')">
            <h2>Notification </h2>
            <p>Count: <span id="partyCount">120</span></p>
        </div>
    </div>
      <div class="displayContainer">
      <div class="card" id="partyCard" onclick="highlightCard('partyCard')">
            <h2>Result Declare Section</h2>
            <p>Count: <span id="partyCount">120</span></p>
        </div>
      </div>
      </div>
    </>
 )
} 