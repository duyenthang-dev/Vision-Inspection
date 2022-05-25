const initialState = {
    image: null,
 }
 
 export const cameraReducer = (state = initialState, action) => {
    switch (action.type) {
       case 'TAKE_PICTURE':
          return {
             ...state,
             image: action.payload,
          }
 
       default:
          return state
    }
 }
 