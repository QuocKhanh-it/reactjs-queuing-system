// import {type} from "os"

import { combineReducers } from 'redux'
import capSoReducer from './capSo';

// import thietBiReducer from './thietBi';
import dichVuReducer from './dichVu';
import { thietBiReducer } from './thietBi';




const reducer = combineReducers({
    thietBi: thietBiReducer,
    dichVu : dichVuReducer,
    capSo: capSoReducer
 
})

export default reducer
export type State = ReturnType<typeof reducer>