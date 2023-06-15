
import { ThunkAction } from 'redux-thunk';
import { Action } from '../actions/capSoActions';
import { State } from '../reducers';
import firebase,{storeCapSo} from '../../firebase/config';
import { CapSo } from './../actions/capSoActions';
import { ActtionType } from '../constants/ActionsTypes';

export const setALLCapSo = () : ThunkAction< 
void, State, null, Action> =>{return async (dispatch) => {
    try {
        await storeCapSo.get().then(
            (
                snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData | null>
            ) => {
                const data = snapshot.docs.map((doc) => ({ ...doc.data() }));
                const test = data.map((item) => ({
                    ...item
                }));
              
                if (test.length > 0) {
                    const capSoData = test as CapSo[]
                    console.log(capSoData);
                    dispatch({
                        type:  ActtionType.ALL_CAPSO,
                        payload: capSoData,
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