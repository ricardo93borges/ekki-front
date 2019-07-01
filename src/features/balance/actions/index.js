import { STORE_BALANCE } from "../actions/actionsTypes";

export const storeBalance = (balance) => ({
    type: STORE_BALANCE,
    payload: {balance}
})