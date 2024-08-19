import React from 'react';
import './Form.css';

function FormInput({ label, name, type = 'text', content, handleChange, error }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={content}
        onChange={handleChange}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default FormInput;
