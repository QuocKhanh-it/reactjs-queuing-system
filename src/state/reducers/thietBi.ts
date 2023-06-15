
import { Action, All_ThietBi, ThietBiList } from "../actions/thietBiActions"
import { ActtionType } from "../constants/ActionsTypes"
var initialState: ThietBiList = {
    //danh sách thiết bị
    thietBiList: [], 
    //xem chi tiết thiết bị
    chiTietThietBi:{}
}
export const thietBiReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActtionType.ALL_THIETBI: {
            return { ...state, thietBiList: action.payload };
        }
        case ActtionType.CHI_TIET_THIET_BI: {
            // console.log('thiet bi', state.thietBiList);
            const realData = state.thietBiList.filter((item:any)=> item.maTB === action.payload);
            // console.log(realData);
            state.chiTietThietBi = realData[0];
            // console.log('stateChiTiet', state.chiTietThietBi);
            return {...state};
        }
        default:
            return state;
    }
}


