const initialState = {
    user: {}
}

//Action Descriptors
const UPDATE_USER = 'UPDATE_USER';

//Reducer

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER: 
            return {...state, ...action.payload};

        default:
            return state;
    }
}

export function updateUser (value) {
    return {
        type: UPDATE_USER,
        payload: value
    }
}