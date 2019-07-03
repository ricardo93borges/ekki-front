import { STORE_TRANSACTION, STORE_TRANSACTIONS } from "../actions/actionsTypes";

export const storeTransaction = (transaction) => ({
    type: STORE_TRANSACTION,
    payload: { transaction }
})

export const storeTransactions = (transactions) => ({
    type: STORE_TRANSACTIONS,
    payload: { transactions: transactions.transactions, total: transactions.total }
})