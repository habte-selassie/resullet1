import React from 'react'
import './Form.css'

function FormTextArea (props) {
    const { label, content, name, handleChange, error, required } = props;
    return (
        <div className="form-group">
            <label>{label}<span className='require'>{required ? '*' : ''}</span></label>
            <textarea
                type="text"
                name={name}
                value={content}
                onChange={handleChange}
            />
            {error && <span className="error">{error}</span>}
        </div>
    )
}

export default FormTextArea;