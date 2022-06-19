const initialState = {
    image: null,
    object: 'Bức tường phẳng',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget libero lacinia, feugiat nisl suscipit, egestas ante. Cras commodo est quis vulputate ultrices.'
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
 