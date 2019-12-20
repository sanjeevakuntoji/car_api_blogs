import _ from 'lodash';
import jsonPlaceholder from '../api/jsonPlaceholder';


export const fetchPostAndUser = () => async (dispatch, getState) => {
    await dispatch(fetchPost()); 
    // console.log(    _.uniq(_.map(getState().posts,'userId')))
    // const userIds =  _.uniq(_.map(getState().posts,'userId'));
    // userIds.forEach(id => dispatch(fetchUser(id)));
    _.chain(getState().posts)
        .map('userId')
         .uniq()
          .forEach(id => dispatch (fetchUser(id)))
           .value()
}

/// checking object and funcion (dispatch->modify or changeing values,getastate-> use for displaying the value)//
export const fetchPost =  () => {

    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts')

        dispatch({
            type: 'FETCH_POST',
            payLoad: response.data
        })
    }


//old code
    // const response = await jsonPlaceholder.get('/posts')
    // return{
    //     type:'FETCH_POST',
    //     payLoad: response
    // }
}

export const fetchUser = id => async dispatch =>{
        const response = await jsonPlaceholder.get(`/users/${id}`);

        dispatch({
            type:'FETCH_USER',
            payLoad: response.data
        })
    }



// //////using lodash function return one's in original function using _.memorize version
// export const fetchUser = function (id) {

//     return  async function(dispatch) {
//         _fetchuser(id,dispatch);
//         // const response = await jsonPlaceholder.get(`/users/${id}`);

//         // dispatch({
//         //     type:'FETCH_USER',
//         //     payLoad: response.data
//         // })
//     }
// }

// const _fetchuser =_.memoize(async(id,dispatch) =>{
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({
//         type:'FETCH_USER',
//         payLoad: response.data
//     })
// })