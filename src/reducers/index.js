import { GET_DATA } from '../actions/index'

const reducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      console.log(action.data)
      return { ...state, user_data: action.data }
    default:
      console.log(action)
      return state

  }
}

export default reducer
