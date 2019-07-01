import { STORE_TRANSACTION, STORE_TRANSACTIONS } from "../actions/actionsTypes";
import createReducer from "../../../redux/createReducer";

export const initialState = {};

const transactions = createReducer(initialState, {
    [STORE_TRANSACTION]: (state, action) => ({ ...action.payload.transaction }),
    [STORE_TRANSACTIONS]: (state, action) => ({
        ...action.payload.transactions
    })
});

export default transactions;
