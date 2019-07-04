
import { STORE_USER } from "../actions/actionsTypes";
import createReducer from '../../../redux/createReducer'

export const initialState = {
    user: {
        id: 0,
        name: "",
        email: "",
        password: "",
        cpf: "",
        phone: "",
        accountId: 0,
        createdAt: "",
        updatedAt: "",
        account: {
            id: 0,
            number: "",
            balance: "",
            limit: "",
            createdAt: "",
            updatedAt: ""
        }
    }
}

const user = createReducer(initialState, {
    [STORE_USER]: (state, action) => ({ ...action.payload.user })
})

export default user