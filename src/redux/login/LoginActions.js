import {
    HANDLE_CHANGE,
    HANDLE_SUBMIT
} from "./LoginType";


export const handleValues = (values) => {
    return {
        type : HANDLE_CHANGE,
        payload:values
    }
}


export const submitValues = (errors) => {
    return {
        type : HANDLE_SUBMIT,
        payload:errors
    }
}

