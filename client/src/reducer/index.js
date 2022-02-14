const initialState = {
    test: ''
}

export default function rootReducer(state= initialState, action){
    switch (action.type){
        case 'TEST':
            return{
                ...state,
                test : action.payload
            }
        default:
            return state;
    }
}