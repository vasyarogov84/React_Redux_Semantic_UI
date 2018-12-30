import axios from 'axios';

export default axios.create({
    baseURL: 'https://circle-users.herokuapp.com/users'
});