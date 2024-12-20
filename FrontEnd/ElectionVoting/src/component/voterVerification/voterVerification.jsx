import { useParams } from "react-router-dom"
import "../Admin/style/voter/voterDetailPage.css"
import { useState } from "react"
import { AdminNav } from "../adminNav"

export const VoterVerification=()=>{

    let [status,setStatus]=useState("")
    let {id}=useParams()
    console.log(id)
    function onClickStatus(statusData){
        setStatus(statusData)
      }
    
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
            application_id: "APP1234546",
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
            application_id: "APP1234256",
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
            application_id: "APP1237456",
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
            application_id: "APP1236456",
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
            application_id: "APP1234456",
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
            application_id: "APP12453456",
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
            application_id: "APP145423456",
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
    let filterData = data.filter((ele) => ele.application_id === id);
    console.log(filterData)
    return(
        <>
        <AdminNav/>
            {filterData.map((details)=>{
                return(
                    <div class="details-page-container">
                    <div class="details-page-header">
                        <img src="https://via.placeholder.com/150" alt="Profile Picture"/>
                        <h1>{details.full_name}</h1>
                    </div>
                    <div class="details-page-grid">
                        <div class="details-page-grid-item">
                            <strong>Application ID:</strong>
                            <span>{details.application_id}</span>
                        </div>
                        <div class="details-page-grid-item">
                            <strong>Constituency:</strong>
                            <span>{details.constituency}</span>
                        </div>
                        <div class="details-page-grid-item">
                            <strong>Date of Birth:</strong>
                            <span>{details.date_of_birth}</span>

                        </div>
                        <div class="details-page-grid-item">
                            <strong>National ID:</strong>
                            <span>{details.national_id}</span>
                        </div>
                        <div class="details-page-grid-item">
                            <strong>Status:</strong>
                            <span class="details-page-status">{(status!=="")?status:"pending"}</span>
                        </div>
                        <div class="details-page-grid-item">
                            <strong>Applied At:</strong>
                            <span>{details.applied_at}</span>
                        </div>
                        <div class="details-page-grid-item">
                            <strong>Address:</strong>
                            <span>{details.address}</span>
                        </div>
                    </div>
                    <div class="buttons">
                <button class="approve-btn" id="approveBtn" onClick={()=>onClickStatus("Approve")}>
                  Approve
                </button>
                <button class="reject-btn" id="rejectBtn" onClick={()=>onClickStatus("Reject")}>
                  Reject
                </button>
              </div>
                </div>
                )
            })
            }
    
        </>
    )
}