import { useNavigate } from "react-router-dom"
import "../Admin/style/voter/VoterListinng.css"
import { AdminNav } from "../adminNav"


export const VoterVerificationListDisplay=()=>{
    let navigate=useNavigate()




    let data=[
        {
            application_id: "APP123456",
            full_name: "John Doe",
            date_of_birth: "1990-01-15",
            constituency: "District 10",
            address: "123 Elm Street, Springfield", 
            national_id: "NID987654321",
            status:"pending",
            voted:"false",
            applied_at:"2024-12-15T14:30:00Z",
            comments:""
        },
        {
            application_id: "APP123456",
            full_name: "John Doe",
            date_of_birth: "1990-01-15",
            constituency: "District 10",
            address: "123 Elm Street, Springfield", 
            national_id: "NID987654321",
            status:"pending",
            voted:"false",
            applied_at:"2024-12-15T14:30:00Z",
            comments:""
        },
        {
            application_id: "APP123456",
            full_name: "John Doe",
            date_of_birth: "1990-01-15",
            constituency: "District 10",
            address: "123 Elm Street, Springfield", 
            national_id: "NID987654321",
            status:"pending",
            voted:"false",
            applied_at:"2024-12-15T14:30:00Z",
            comments:""
        },
        {
            application_id: "APP123456",
            full_name: "John Doe",
            date_of_birth: "1990-01-15",
            constituency: "District 10",
            address: "123 Elm Street, Springfield", 
            national_id: "NID987654321",
            status:"pending",
            voted:"false",
            applied_at:"2024-12-15T14:30:00Z",
            comments:""
        },
        {
            application_id: "APP123456",
            full_name: "John Doe",
            date_of_birth: "1990-01-15",
            constituency: "District 10",
            address: "123 Elm Street, Springfield", 
            national_id: "NID987654321",
            status:"pending",
            voted:"false",
            applied_at:"2024-12-15T14:30:00Z",
            comments:""
        },
        {
            application_id: "APP123456",
            full_name: "John Doe",
            date_of_birth: "1990-01-15",
            constituency: "District 10",
            address: "123 Elm Street, Springfield", 
            national_id: "NID987654321",
            status:"pending",
            voted:"false",
            applied_at:"2024-12-15T14:30:00Z",
            comments:""
        },
        {
            application_id: "APP123456",
            full_name: "John Doe",
            date_of_birth: "1990-01-15",
            constituency: "District 10",
            address: "123 Elm Street, Springfield", 
            national_id: "NID987654321",
            status:"pending",
            voted:"false",
            applied_at:"2024-12-15T14:30:00Z",
            comments:""
        },
        {
            application_id: "APP123456",
            full_name: "John Doe",
            date_of_birth: "1990-01-15",
            constituency: "District 10",
            address: "123 Elm Street, Springfield", 
            national_id: "NID987654321",
            status:"pending",
            voted:"false",
            applied_at:"2024-12-15T14:30:00Z",
            comments:""
        },
            
    ]
    return(
        <>
        <AdminNav/>
        <div class="Votercontainer">
            {data.map((voterCandidate)=>{
                return(
                
                    <div class="votercard" key={voterCandidate.application_id} onClick={()=>navigate(`/admin/voterVerification/${voterCandidate.application_id}`)}>
                    <img src="https://via.placeholder.com/100" alt="Profile Picture"/>
                    <h2>{voterCandidate.full_name}</h2>
                    <p class="important"><strong>Application ID:</strong> {voterCandidate.application_id}</p>
                    <p class="important"><strong>Constituency:</strong> {voterCandidate.constituency}</p>
                    <p><strong>Status:</strong> <span class="status">{voterCandidate.status}</span></p>
                    <p><strong>Applied At:</strong> {voterCandidate.applied_at}</p>
                </div>
            )})
        
    }
        </div>
        </>
    )
}