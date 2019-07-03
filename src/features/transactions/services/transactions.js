import api from '../../../services/Api'
import * as actions from "../actions/index"

export const getTransactions = async (accountId, dispatch) => {
    api.get(`/transactions/${accountId}/1`).then(res => {
        dispatch(actions.storeTransactions(res.data))
    })
}

export const addTransaction = async (fromAccountId, toAccountId, amount, dispatch) => {
    api.post(`/transactions`, { fromAccountId, toAccountId, amount }).then(res => {
        dispatch(actions.storeTransaction(res.data))
    })
}

export const checkFunds = async (accountId, amount) => {
    const funds = await api.get(`/accounts/check-funds/${accountId}/${amount}`).then(res => res.data)
    return funds
}