
import { useEffect, useRef } from "react";
import UseInputState from "../../hooks/useInputState";
import InputField from "../inputField/inputField";


const HookForm = () => {
    const nameRef = useRef(null);
    const {error, handleCount, handleSubmit} = UseInputState();
    

    useEffect(()=>{
        nameRef.current.focus();
    }, [])


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

export default HookForm;