import users from '../api/users';

export const addUser = user => async (dispatch) => {
    
    if (Object.keys(user).length === 2) {
        const findUser = await users.get('/');
        const cameBackUserId = await findUser.data.find(({ first_name, last_name}) => {
            return first_name === user.first_name && last_name === user.last_name
        });
       
        await users.delete(`/${cameBackUserId.id}`);
        await users.post('/', cameBackUserId);
        const getUsers = await users.get('/');
        
        dispatch({
            type: 'ADD_USER',
            payload: getUsers.data
        });

    } else {
        await users.post('/', user);
        const allUsers = await users.get('/');
        const currentUsers = await allUsers.data.filter((el) => {

            if (el.attempts === 0 && el.id !== user.id) {
                users.delete(`/${el.id}`);
            }
            return el.attempts !== 0 || el.id === user.id;
        })
        dispatch({
            type: 'ADD_USER',
            payload: currentUsers
        });
    }


}



export const updateUser = ({ id, first_name, last_name, results, attempts, best_time
}) => async dispatch => {

    const checkPrevResult = await users.get(`/${id}`);
    if (best_time > checkPrevResult.data['best_time'] && checkPrevResult.data['best_time'] !== 0) {
        best_time = checkPrevResult.data['best_time'];
    }

    const response = await users.patch(`/${id}`, {
        first_name,
        last_name,
        results,
        attempts,
        best_time
    });

    dispatch({
        type: 'UPDATE_USER',
        payload: response.data
    })
}