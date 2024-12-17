import { DATA_FETCHED_SUCCESSFULLY, DATA_FETCHING, DATA_FETCHING_ERROR } from "./action"

let initeState={
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