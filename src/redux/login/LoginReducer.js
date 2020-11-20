import {
    HANDLE_CHANGE,
    HANDLE_SUBMIT
} from "./LoginType";

const initialState = {
    values:{email :"", password:""},
    errors:{},
    isSubmitting : false
}

const LoginReducer = (state = initialState, action) => {
    switch(action.type){
        case HANDLE_CHANGE : return {
            ...state,
            values : action.payload,
            errors:{},
            isSubmitting : false
        }
        case HANDLE_SUBMIT : return{
            ...state,
            errors: action.payload,
            isSubmitting : true
        }
        default : return state
    }
}


export default LoginReducer;
