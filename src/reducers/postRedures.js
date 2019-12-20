
export default (state = [], action) => {
    // //bad! mutations
    // state[0] = 'sam'
    // state.pop();
    // state.push();

    // state.name = 'name'
    // state.age = 30

    // // //pure reducers bad

    // // return document.querySelector('input')
    // // return Axios.get('/post');

    // // good
    // return state+action


    // //argument values send first value as undefined 
    // select (undefined, {type: 'dasghc'})

    //return statement always return some thing if forget to send somti gng  we will get 
    //undefined error

    ///Using if condition or Switch condition bellow see
    // if(action.type === 'FETCH_POSTS') {
    //     return action.payLoad;
    // }

    // return state;

    switch(action.type) {
        case 'FETCH_POST': 
            return action.payLoad;

        default: 
            return state;
    }
}