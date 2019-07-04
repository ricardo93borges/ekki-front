import api from '../../../services/Api'
import * as actions from "../actions/index"
import * as userService from '../../user/services/user'

export const getTransactions = async (accountId, page = 1, dispatch) => {
    const transactions = await api.get(`/transactions/${accountId}/${page}`).then(res => res.data)
    dispatch(actions.storeTransactions(transactions))
    return transactions
}

export const addTransaction = async (fromAccountId, toAccountId, amount, dispatch) => {
    api.post(`/transactions`, { fromAccountId, toAccountId, amount }).then(async (res) => {
        getTransactions(fromAccountId, 1, dispatch)
        userService.getUser(1, dispatch)
    })
}

export const checkFunds = async (accountId, amount) => {
    const funds = await api.get(`/accounts/check-funds/${accountId}/${amount}`).then(res => res.data)
    return funds
}