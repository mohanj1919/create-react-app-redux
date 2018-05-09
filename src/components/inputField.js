import React from 'react';

const InputField = ({ label, text, type, id, value, handleChange, className, isRequired = true }) => (
    <div className="form-group">
        <label htmlFor={label}>{text}</label>
        <input
        type={type}
        className={className ? className : "form-control"}
        id={id}
        value={value}
        onChange={handleChange}
        required={isRequired}
        />
    </div>
);

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default InputField;
