import { useRef, useEffect } from "react";

import "./Input.sass";

const Input = ({
    placeholder,
    name,
    label,
    type,
    setRef,
    styleType,
    ...props
}) => {
    const inputRef = useRef();

    useEffect(() => {
        if (setRef) {
            setRef(inputRef);
        }
    }, [inputRef]);

    return (
        <div className="input" {...props}>
            {label && (
                <label htmlFor={name} className="input__label">
                    {label}
                </label>
            )}
            <input
                className={`input__main ${
                    styleType === "sign" ? "input__main_sign" : ""
                }`}
                name={name}
                placeholder={placeholder}
                type={type}
                ref={inputRef}
            />
        </div>
    );
};

export default Input;
