
import { STORE_BALANCE } from "../actions/actionsTypes";
import createReducer from '../../../redux/createReducer'

export const initialState = {}

const balance = createReducer(initialState, {
    [STORE_BALANCE]: (state, action) => ({...action.payload.balance}),
})

export default balance