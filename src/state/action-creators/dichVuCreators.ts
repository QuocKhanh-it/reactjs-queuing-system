import { Dispatch } from "react";
import {Action,DichVu} from "../actions/dichVuActions"
import { ThunkAction } from 'redux-thunk';
import {State} from "../reducers"
import { ActtionType } from "../constants/ActionsTypes";
import firebase,{ storeDichVu } from "../../firebase/config";




export const setAllDichVu = (): ThunkAction<
    void,
    State,
    null,
    Action
> => {
    return async (dispatch) => {
        try {
            await storeDichVu.get().then(
                (
                    snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData | null>
                ) => {
                    const data = snapshot.docs.map((doc) => ({ ...doc.data() }));
                    const test = data.map((item) => ({
                        ...item
                    }));
                  
                    if (test.length > 0) {
                        const dichVuData = test as DichVu[]
                        console.log(dichVuData);
                        dispatch({
                            type:  ActtionType.ALL_DICHVU,
                            payload: dichVuData,
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