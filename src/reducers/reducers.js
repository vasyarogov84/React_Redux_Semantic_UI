export const addUser = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...action.payload];
        case 'UPDATE_USER':
            return state.map(user => {
                if (user.id === action.payload.id) {

                    let { best_time, attempts } = action.payload;
                    if (user.best_time !== 0 && user.best_time < best_time) {
                        best_time = user.best_time
                    }
                    return { ...user, best_time, attempts };

                } return user;
            });

        default:
            return state;
    }
}
























