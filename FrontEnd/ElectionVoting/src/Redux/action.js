export const DATA_FETCHING="DATA_FETCHING"
export const DATA_FETCHED_SUCCESSFULLY="DATA_FETCHED_SUCCESSFULLY"
export const DATA_FETCHING_ERROR="DATA_FETCHING_ERROR"

import axios from 'axios';

export const dataLoading=()=>{
    return{
        type:DATA_FETCHING
    }
}


export const dataFetchSuccessFully=(fetchedData)=>{
    return{
        type:DATA_FETCHED_SUCCESSFULLY,
        payload:fetchedData
    }
}

export const dataFetchingError=(error)=>{
    return{
        type:DATA_FETCHING_ERROR,
        payload:error
    }
}

export const fetchPartyVerificationList=()=>{
    return async (dispatch)=>{
        // dispatch(dataLoading)
        try{
        let PartyVerificationDataList=await axios.get("https://election-management-system-44zy.onrender.com/get-party-data")//add the endpoint of party verification
        console.log("hi")
        console.log(PartyVerificationDataList);
        // dispatch(dataFetchSuccessFully([]))//add PartyVerificationDataList
        }catch(e){
            dispatch()
        }
    }
} 