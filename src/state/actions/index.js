export const createPost = (payload) => async (dispatch) => {
    const action = {type: "create", payload : payload}
    dispatch(action)
}