import api from '../../../services/Api'
import * as actions from "../actions/index"

export const getUser = async (id, dispatch) => {
    const user = await api.get(`/users/${id}`).then((res) => res.data)
    dispatch(actions.storeUser(user))
    return user
}