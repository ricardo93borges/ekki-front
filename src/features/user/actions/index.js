import { STORE_USER } from "../actions/actionsTypes";

export const storeUser = (user) => ({
    type: STORE_USER,
    payload: {user}
})