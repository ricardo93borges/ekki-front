import { STORE_TRANSACTION, STORE_TRANSACTIONS } from "../actions/actionsTypes";
import createReducer from "../../../redux/createReducer";

export const initialState = {
    transactions: []
};

const transactions = createReducer(initialState, {
    [STORE_TRANSACTIONS]: (state, action) => ({
        transactions: action.payload.transactions
    }),
    [STORE_TRANSACTION]: (state, action) => {
        const transactions = state.transactions.slice()
        transactions.push(action.payload.transaction)
        return { transactions }
    },
});

export default transactions;
