import { ActionTypes } from "../constants/action-types";

const initialState={
    products:[]
    //
        //{

        // id:1,
        // title:'Parul',
        // category:'programmer'//demo obj value passed initially
    //}]
}
//destructured action in type and payload
export const productReducer=(state=initialState,{type,payload})=>{
     switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};//updateing state with the payload
     
        default:
            return state;
     }
}

export const selectedProductReducer=(state={},{type,payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state,...payload}  
            case ActionTypes.REMOVE_SELECTED_PRODUCT:
                return {}   
                //removing the selected product by returning the empty object
        default:
            return state;
    }
}