import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {handleValues, submitValues} from "../../redux/index";

const useForm = (callback, Validate) => {

    const values = useSelector(state => state.login.values);
    const errors = useSelector(state => state.login.errors);
    const isSubmitting = useSelector(state => state.login.isSubmitting);
    const dispatch = useDispatch();
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        dispatch(handleValues({...values, [name]:value}))
    }

    // handle submit

    function handleSubmit(event){    
        event.preventDefault();
        dispatch(submitValues(Validate(values)));
    
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback();
        }
    }, [errors])

    return{
        handleChange,
        handleSubmit,
        values,
        errors
    }

}

export default useForm;