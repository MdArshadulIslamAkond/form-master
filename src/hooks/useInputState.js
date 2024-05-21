import { useState } from "react";


const initvalue ={
        email: '',
        password: '',
        name: ''
    }
const UseInputState = () => {
    const [count, setCount] = useState(initvalue);
    const [error, setError] = useState({})
    


 
    
    const handleCount = (e) => {
        setCount({...count, [e.target.name]: e.target.value})
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const {isValid, error} = validate()
        if(!isValid){
            setError(error)
            console.log(error);
        
        }else{
            setError({})
            console.log(count);
        }
        
       
    };
    const validate = ()=> {
        const err={}
        if(!count.name){
            err.name = 'Name is required'
        }
        if(!count.email){
            err.email = 'Email is required'
        }
        if(!count.password){
            err.password = 'Password  is required'
        }
        
        return {
            error : err,
            isValid: Object.keys(err).length === 0
        }
    }

    return{
        count,
        error,
        handleCount,
        handleSubmit
       
    };
};

export default UseInputState;