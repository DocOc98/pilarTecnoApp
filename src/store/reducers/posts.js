import { FETCH_POSTS, POST_POSTS, DEL_POSTS, UPDATE_POSTS } from '../constants';

const initialState = {
    posts: null,
};

export default (state = initialState, action) => {
    if (action.type === FETCH_POSTS) {
        return {
            ...state,
            posts: action.data,
        };
    }
    if (action.type === POST_POSTS) {
        return {
            ...state,
            posts: [...state.posts, {
                name: action.data.name,
                address: action.data.address,
                latitude: action.data.latitude,
                longitude: action.data.longitude,
                url: action.data.url
            }],
        };
    }
    if (action.type === UPDATE_POSTS) {
        update = state.posts.map((post) => {
            if (post._id === action.data._id) {                
                return action.data                               
            }
            return post
        })
        return {
           
            posts: update.reverse()
        }
    }
    if (action.type === DEL_POSTS) {
        update = state.posts.filter(post =>  post._id !== action.data._id);
                return {
                    posts: update.reverse()
                };
    }     
    return { ...state };
};