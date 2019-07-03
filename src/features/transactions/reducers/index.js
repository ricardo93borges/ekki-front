import { STORE_TRANSACTION, STORE_TRANSACTIONS } from "../actions/actionsTypes";
import createReducer from "../../../redux/createReducer";

export const initialState = {
    transactions: [],
    total: 0
};

const transactions = createReducer(initialState, {
    [STORE_TRANSACTIONS]: (state, action) => ({
        transactions: action.payload.transactions,
        total: action.payload.total
    }),
    [STORE_TRANSACTION]: (state, action) => {
        const transactions = state.transactions.slice()
        transactions.push(action.payload.transaction)
        return { transactions, total: state.total + 1 }
    },
});

export default transactions;
