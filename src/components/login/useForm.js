import {useState, useEffect} from "react";
const useForm = (callback, Validate) => {

    const [values, setValues] = useState({email:"", password:""});  
    const [errors, setErrors] = useState({});  
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // handle change function
    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    // handle submit

    function handleSubmit(event){    
        event.preventDefault();
          
         setErrors(Validate(values));
         setIsSubmitting(true);
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