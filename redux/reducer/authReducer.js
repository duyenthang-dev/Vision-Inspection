const initialState = {
   isLogin: false,
}

export const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'LOGIN_SUCCESS':
         return {
            ...state,
            isLogin: true,
         }

      default:
         return state
   }
}
