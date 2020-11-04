import React from 'react'
import './Login.css';
import useForm from './useForm';
import Validate from "./Validate";


function Login() {
    const {handleChange, handleSubmit, values,errors} = useForm(submit,Validate);
   
    function submit(){
        console.log("submitted succesfully");
    }

    return (
        <div className="row">        
            <div className="container d-flex justify-content-around">
                <div className="col"></div>
                <div className="col-sm-6 loginForm p-5 bg-white shadow">
                    
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="form-group">
                            <label>Email:</label>
                            <input name="email" type="email" className={`form-control ${errors.email && "inputError"}`} value={values.email} onChange={handleChange} placeholder="Enter Email" />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                        <div className="form-group">
                            <label >Password:</label>
                            <input name="password" type="password" className= {`form-control ${errors.password && "inputError"}`} value={values.password} onChange={handleChange}  placeholder="Enter Password" />
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>
                        <button type="submit"  className="form-control btn btn-primary">Login</button>  
                    </form>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Login
