import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    useEffect(() => {
        nameRef.current.focus();
    }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" name="name" />
        <br />
        <input ref={emailRef} type="email" name="email" id="" />
        <br />
        <input ref={passwordRef} type="password" name="password" />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RefForm;
