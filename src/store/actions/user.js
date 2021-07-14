import { LOG_IN } from '../constants';
const initialState = {
    user:null
};


export default setUser = (data) => {
    return {
        type: LOG_IN,
        data
    }
}