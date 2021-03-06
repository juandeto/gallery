import axios from 'axios'


const data_headers = {
            'Authorization': `Client-ID ${process.env.REACT_APP_CLIENT_ID_IMGUR}` ,
            'Accept': "application/json",
        }


export const getPosts = (url) => {
    return async dispatch => {
        dispatch({type: "SET_LOADING", payload: true})
        try {
           const response =  await axios.get(url, {headers:data_headers})

           const posts =  await response?.data?.data
           dispatch({type: "SET_POSTS", payload: posts})
           dispatch({type: "SET_LOADING", payload: false})
            return posts
        } catch (error) {
            dispatch({type: "SET_LOADING", payload: false})
            dispatch({type: 'SET_ERROR', payload: {status: error.status, description: `Error retrieving data in ${url} api` }})
            return console.log(error)
        } finally {
            dispatch({type: "SET_LOADING", payload: false})

        }
    }
}

export const handlePageNumber = (page) => {
    return {type: "SET_PAGE", payload: page}
}

export const isLoading = (state) => {
    return {type: "SET_LOADING", payload: state}
}
