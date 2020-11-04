export default function Validate(values){
    let errors = {};
    if(!values.email){
        errors.email = "Email address is required";
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email address is invalid";
    }

    if(!values.password){
        errors.password = "password is required";
    }else if(values.password.length < 5){
        errors.password = "password length must be greater than 5";
    }
    return errors;
}


