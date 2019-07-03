import { expect } from 'chai'
import { STORE_TRANSACTION, STORE_TRANSACTIONS } from "../actions/actionsTypes";
import transactions, { initialState } from './index'

describe('Transactions reducer tests', () => {

    const transaction = {
        "id": 0,
        "amount": "",
        "statusId": 0,
        "fromAccountId": 0,
        "toAccountId": 0,
        "createdAt": "",
        "updatedAt": "",
        "from_account_id": 0,
        "to_account_id": 0,
        "status": {
            "id": 0,
            "name": ""
        },
        "to_account": {
            "id": 0,
            "number": "",
            "balance": "",
            "limit": "",
            "createdAt": "",
            "updatedAt": "",
            "account": {
                "id": 0,
                "name": "",
                "email": "",
                "password": "",
                "cpf": "",
                "phone": "",
                "accountId": 0,
                "createdAt": "",
                "updatedAt": ""
            }
        }
    }

    it('Reducer should be a function', () => {
        expect(transactions).to.be.a('function')
    })

    it('should return inital state when state before is undefined', () => {
        const before = undefined
        const action = { type: 'UNKNOWN' }
        const after = initialState
        expect(transactions(before, action)).to.be.deep.equal(after)
    })

    it('should store a transaction', () => {
        const payload = { transaction }

        const before = { ...initialState, transactions: [transaction] }
        const action = { type: STORE_TRANSACTION, payload }
        const state = transactions(before, action)
        const after = { ...initialState, transactions: [transaction, transaction] }

        expect(state).to.be.deep.equal(after)
    })

    it('should store transactions', () => {
        const payload = { transactions: [transaction, transaction] }

        const before = initialState
        const action = { type: STORE_TRANSACTIONS, payload }
        const state = transactions(before, action)
        const after = { ...initialState, transactions: [transaction, transaction] }

        expect(state).to.be.deep.equal(after)
    })

})