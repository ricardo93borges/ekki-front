
import { STORE_USER } from "../actions/actionsTypes";
import createReducer from '../../../redux/createReducer'

export const initialState = {
    user: {
        id:0,
        name:''
    }
}

const user = createReducer(initialState, {
    [STORE_USER]: (state, action) => ({...action.payload.user})
})

export default user