export const login = (data) => {
   return {
      type: 'LOGIN',
      payload: data,
   }
}

export const signIn = (data) => {
    return dispatch => {
        // xử lý logic login, authentication tại đây
        let fakeRequest = new Promise(function (resolve, reject){
            setTimeout(() => resolve('login successfully'), 1000);
        })
        fakeRequest.then(res => {
            console.log(res)
            console.log(data)
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: data,
            })
        }).catch(err => {
            console.log(err)
        })
    }
}