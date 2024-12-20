import { DATA_FETCHED_SUCCESSFULLY, DATA_FETCHING, DATA_FETCHING_ERROR } from "./action"

let initeState={
    // _id": "6764fe9189c80c39c6705e7f",
    // "name": "New United Progress Party",
    // "leader": "Alice Johnson",
    // "symbol": "UPP1234",
    // "establishedYear": 1998,
    // "address": "123 Unity Street, Capital City",
    // "status": "Pending",
    // "createdAt": "2024-12-20T05:20:17.245Z",
    // "updatedAt": "2024-12-20T05:20:17.245Z",
    party_id: "",
   	party_name: "",
   	leader_name: "",
   	submitted_at: "",
   	status: "", 
   	remarks: "",
    ajenda:"",
    banner:"",
    
    //General purpose
    loading: false,
    errorFlag:false,
    error:""
    

}

export const AdminReducer=(state=initeState,data)=>{

    switch(data.type){
        case DATA_FETCHING:
            return{
                ...state,
                loading:true
            }
        case DATA_FETCHED_SUCCESSFULLY:
            return{
                ...state,
                loading:false,
                ...data.payload
            }
        case DATA_FETCHING_ERROR:
            return{
                ...state,
                errorFlag:true,
                error:data.payload,
                loading:false
            }
        default:
            return state
    }
}