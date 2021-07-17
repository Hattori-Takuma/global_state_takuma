import { GET_DATA, FIVE_DATA, COMMENTS_DATA } from '../actions/index'

const reducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, user_data: action.data }
    default:
      return state

    case COMMENTS_DATA:
      return { ...state, comments_data: action.data }

    case FIVE_DATA:
      const five = action.data.filter(user => user.id <= 5);

      return { ...state, user_data: five }







  }
}

export default reducer