import { DichVuList,Action } from "../actions/dichVuActions";
import { ActtionType } from "../constants/ActionsTypes";


var initialState: DichVuList={
    dichVuList:[]
}

const dichVuReducer = (state = initialState, action: Action) =>{
    switch (action.type){
        case ActtionType.ALL_DICHVU:
            
            return {...state, dichVuList: action.payload}
        default: 
            return state;
    }
}
export default dichVuReducer;