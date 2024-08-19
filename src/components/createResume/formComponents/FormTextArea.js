import React from 'react';
import './Form.css';

function FormTextArea({ label, name, value, handleChange, error }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={handleChange}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default FormTextArea;
