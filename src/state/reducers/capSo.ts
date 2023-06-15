import { CapSoList,Action } from "../actions/capSoActions";
import { ActtionType } from "../constants/ActionsTypes";


const initialState: CapSoList={
    capSoList:[]
}

const capSoReducer = (state = initialState, action: Action) =>{
    switch (action.type){
        case ActtionType.ALL_CAPSO:
            return {...state, capSoList: action.payload}
        default: 
            return state;
    }
}

export default capSoReducer;