import { combineReducers } from "redux";
import balance from "../features/balance/reducers/index";
import contacts from "../features/contacts/reducers/index";
import transactions from "../features/transactions/reducers/index";
import user from "../features/user/reducers/index";

const reducers = combineReducers({
    balance,
    contacts,
    transactions,
    user
});

const rootReducer = (state, action) => {
    return reducers(state, action);
};

export default rootReducer;
