import { useEffect, useRef, useState } from "react";
import InputField from "../inputField/inputField";


const initvalue ={
        email: '',
        password: '',
        name: ''
    }
const StateFullForm = () => {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [name, setName] = useState('')
    const [count, setCount] = useState(initvalue);
    const [error, setError] = useState({})
    const nameRef = useRef(null);

    useEffect(()=>{
        nameRef.current.focus();
    }, [])
 
    // const handleNameChange = (e) => {
    //     setName(e.target.value)
    // };
    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value)
    // };
    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value)
    // };
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


    return (
        <div>
             <form action="" onSubmit={handleSubmit}>
                <InputField ref={nameRef} onChange={handleCount} error={error} type="text" name="name" />
                {/* <input onChange={handleNameChange} type="text" name="name" id="" /> */}

                <br />
                <InputField onChange={handleCount} error={error} type="email" name="email" />
                {/* <input onChange={handleEmailChange} type="email" name="email" id="" /> */}
                <br />
                <InputField onChange={handleCount} error={error} type="password" name="password" />
                {/* <input onChange={handlePasswordChange} type="password" name="password" /> */}
                <br /><br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default StateFullForm;