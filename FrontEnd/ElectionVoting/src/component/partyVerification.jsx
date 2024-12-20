import { Navigate, useNavigate } from "react-router-dom"
import "./Admin/style/partyverificationPage.css"
import { AdminNav } from "./adminNav"
import { use, useEffect } from "react"
import { fetchPartyVerificationList } from "../Redux/action"
import { useDispatch } from "react-redux";

export const PartyVerifaction=()=>{
        let dispatch=useDispatch()
        let navigate=useNavigate()
        let data=[
            {
                party_id: "123",
                party_name: "Progressive Alliance",
                leader_name: "Alice Doe",
                submitted_at: "2024-12-10T14:00:00Z",
                status: "pending", // "approved", "rejected"
                remarks: "",
                Party_logo:"",
                Party_candidate:""
            },
            {
                party_id: "1234",
                party_name: "Progressive Alliance",
                leader_name: "Alice Doe",
                submitted_at: "2024-12-10T14:00:00Z",
                status: "pending", // "approved", "rejected"
                remarks: "",
                Party_logo:"",
                Party_candidate:""
            },
            {
                party_id: "12345",
                party_name: "Progressive Alliance",
                leader_name: "Alice Doe",
                submitted_at: "2024-12-10T14:00:00Z",
                status: "pending", // "approved", "rejected"
                remarks: "",
                Party_logo:"",
                Party_candidate:""
            },        
        ]

        useEffect(()=>{
            dispatch(fetchPartyVerificationList());
        },[])
        return(
            <>
            <AdminNav/>
            <div class="Partycontainer">
                {data.map((partyCandidate)=>{
                    return(
                    
                        <div class="party-card" onClick={()=>navigate(`/admin/partyVerification/${partyCandidate.party_id}`)}>
                        
                        <div class="party-logo">
                            <img src="https://via.placeholder.com/300x150" alt="Party Logo" />
                        </div>
                
                        
                        <div class="party-details">
                            <h2 class="party-name">Progressive Alliance</h2>
                            <p><strong>Party ID:</strong> 123</p>
                            <p><strong>Leader Name:</strong> Alice Doe</p>
                            <p><strong>Submitted At:</strong> 2024-12-10 14:00:00 UTC</p>
                            <p><strong>Candidate:</strong> John Smith</p>
                        </div>
                
                        
                        <div class="status-section">
                            <p class="status pending">Status: Pending</p>
                            <p class="remarks"><strong>Remarks:</strong> None</p>
                        </div>
                        </div>
                    )
                })
            
        }
            </div>
            </>
        )
}