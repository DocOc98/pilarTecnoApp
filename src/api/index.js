const BASE_URL = 'https://vaccination-larioja.herokuapp.com/'

///LIST PLACES
export const fetchPosts = () => {
    return fetch(BASE_URL+'/places')
        .then(Response =>{
            return Promise.all([Response, Response.json()])
        })
}

///CREATE POST
export const postPosts = ({id, name, address, latitude, longitude, url}) => {
    return fetch(BASE_URL+'/places', {
    method: 'POST',
    body: JSON.stringify({
        id,
        name,
        address,
        latitude,
        longitude,
        url,    
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then(Response =>{
    console.log('json create: '+JSON.stringify(Response))
    return Promise.all([Response, Response.json()])
    })
}

///EDIT POST
export const putPost = ({_id, name, address, latitude, longitude, url}) => {
    const id = _id
    return fetch(`${BASE_URL}/places/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
        name,
        address,
        latitude,
        longitude,
        url,
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then(Response =>{
    console.log('json create: '+JSON.stringify(Response))
    return Promise.all([Response, Response.json()])
    })
}

///DELETE POST
export const deletePost = ({data}) => {
    const {_id} = data
    return fetch(`${BASE_URL}/places/${_id}`, {
    method: 'DELETE'
    })
    .then(Response =>{
    console.log('json create: '+JSON.stringify(Response))
    return Promise.all([Response, Response.json()])
    })
}

///SHOW POST
export const showPost = ({id, name, address, latitude, longitude, url}) => {
    return fetch(`${BASE_URL}/places/${id}${id}`, {
    method: 'PUT',
    body: JSON.stringify({
        id,
        name,
        address,
        latitude,
        longitude,
        url,
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then(Response =>{
    console.log('json create: '+JSON.stringify(Response))
    return Promise.all([Response, Response.json()])
    })
}