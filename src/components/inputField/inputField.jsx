import React from 'react';

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const InputField = ({onChange, type, name,error}, ref) => {
    return (
        <div>
             <input ref={ref} onChange={onChange} type={type} name={name} />
             {error && <p>{error[name]}</p>}
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default React.forwardRef(InputField);