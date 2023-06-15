import { Dispatch } from "react";
import { Action, ThietBi, } from "../actions/thietBiActions";
import { ActtionType } from "../constants/ActionsTypes";
import firebase, { storeThietBi } from '../../firebase/config';
import { ThunkAction } from "redux-thunk";
import { State } from "../reducers";


export const setAllThietBi = (): ThunkAction<
    void,
    State,
    null,
    Action
> => {
    return async (dispatch) => {
        try {
            await storeThietBi.get().then(
                (
                    snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData | null>
                ) => {
                    const data = snapshot.docs.map((doc) => ({ ...doc.data() }));
                    const test = data.map((item) => ({
                        ...item
                    }));
                  
                    if (test.length > 0) {
                        const thietBiData = test as ThietBi[]
        
                        dispatch({
                            type:  ActtionType.ALL_THIETBI,
                            payload: thietBiData,
                        })
                    }
                }
            )
                .catch((err) => console.log(err));
        } catch (err) {
            console.log(err);
        }
    };
};

//xem chi tiết thiết bị 
export const layChiTiet = (id:any): ThunkAction<
void,
State,
null,
Action
> => {
    return async (dispatch) => {
        try { 
            dispatch({
                type: ActtionType.CHI_TIET_THIET_BI,
                payload: id,
            })
        }
        catch(e:any) { 
            console.log(e);
        }
    }
}