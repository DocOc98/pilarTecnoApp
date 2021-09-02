import { FETCH_POSTS, POST_POSTS, DEL_POSTS, UPDATE_POSTS } from '../constants';
import { fetchPosts, postPosts, deletePost, putPost } from '../../api';

const getPostsSucess = (data) => {
    return {
        type: FETCH_POSTS,
        data
    }
}
const createPostSuceess = (data) => {
    return {
        type: POST_POSTS,
        data
    }
}
const delPostSuceess = (data) => {
    return {
        type: DEL_POSTS,
        data
    }
}
const updatePostSuceess = (data) => {
    return {
        type: UPDATE_POSTS,
        data
    }
}
export const getPosts = () => (dispatch) => {
    return fetchPosts()
        .then(([response, json]) => {
            dispatch(getPostsSucess(json))
            return json
        })
        .catch((error) => console.log(error))
}
export const createPost = (data) => (dispatch) => {
    const { name, address, latitude, longitude, url } = data
    return postPosts(data)
        .then(([response, json]) => {
            if (response.ok === true) {
                dispatch(createPostSuceess({ name, address, latitude, longitude, url }))
            }
            return json
        })
        .catch((error) => console.log(error))
}
export const delPost = (data) => (dispatch) => {
    const { _id } = data
    return deletePost({ data })
        .then(([response, json]) => {
            if (response.ok === true) {
                dispatch(delPostSuceess(data))
            }
            return json
        })
        .catch((error) => console.log(error))
}
export const updatePost = (data) => (dispatch) => {
//    const { _id } = data
    return putPost(data)
        .then(([response, json]) => {
            if (response.ok === true) {
                dispatch(updatePostSuceess(data))
            }
            
            return json
        })
        .catch((error) => console.log(error))
}