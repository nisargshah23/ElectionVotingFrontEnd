import { useParams } from "react-router-dom";
import "./Admin/style/partyDetailsPage.css";
import { useRef, useState } from "react";
import { AdminNav } from "./adminNav";

export const PartyVerificationApprovalPage = () => {
  const { id } = useParams();
    let [status,setStatus]=useState("")
  let review=useRef("");
  console.log(status);

  let data = [
    {
      party_id: "123",
      party_name: "Progressive Alliance",
      leader_name: "Alice Doe",
      submitted_at: "2024-12-10T14:00:00Z",
      status: "pending", // "approved", "rejected"
      remarks: "",
      Party_logo: "",
      Party_candidate: "",
    },
    {
      party_id: "1234",
      party_name: "Progressive Alliance",
      leader_name: "Alice Doe",
      submitted_at: "2024-12-10T14:00:00Z",
      status: "pending", // "approved", "rejected"
      remarks: "",
      Party_logo: "",
      Party_candidate: "",
    },
    {
      party_id: "12345",
      party_name: "Progressive Alliance",
      leader_name: "Alice Doe",
      submitted_at: "2024-12-10T14:00:00Z",
      status: "pending", // "approved", "rejected"
      remarks: "",
      Party_logo: "",
      Party_candidate: "",
    },
  ];
  function onClickStatus(statusData){
    setStatus(statusData)
  }

  let filterData = data.filter((ele) => ele.party_id === id);

  return (
    <>
    <AdminNav/>
      <div class="container">
        {filterData.map((ele) => {
          return (
            <>
              <h1>Party Details</h1>

              <div class="details">
                <div>
                  <strong>Party Name:</strong> {ele.party_name}
                </div>
                <div>
                  <strong>Leader Name:</strong> {ele.leader_name}
                </div>
                <div>
                  <strong>Submitted At:</strong> {ele.submitted_at}
                </div>
                <div>
                  <strong>Status:</strong> <span id="status">{
                  (status!=="")?status:"pending"
                  }
                  </span>
                </div>
                <div>
                  <strong>Remarks:</strong> <span id="remarks"></span>
                </div>
                <div>
                  <strong>Party Logo:</strong>{" "}
                  <span id="logo">{ele.Party_logo}</span>
                </div>
                <div>
                  <strong>Party Candidate:</strong>{" "}
                  <span id="candidate">{ele.Party_candidate}</span>
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

              <div class="review-section">
                <strong>Review:</strong>
                <input
                  type="text"
                  id="reviewInput"
                  ref={review}
                  placeholder="Write your review here"
                  required
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
