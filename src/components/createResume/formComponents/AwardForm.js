import React, { useState, useEffect } from 'react';
import FormInput from './FormInput';
import './Form.css';

function AwardForm({ awardData, setAwardData, isEditing }) {
  const [formData, setFormData] = useState(awardData);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData(awardData);
  }, [awardData]);

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.date.trim()) newErrors.date = 'Date is required';
    if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = () => {
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setAwardData(formData);
    }
  };

  return (
    <div className="sub-content">
      {isEditing ? (
        <>
          <FormInput label="Title" name="title" value={formData.title} handleChange={handleChange} error={errors.title} />
          <FormInput label="Date" name="date" type="date" value={formData.date} handleChange={handleChange} error={errors.date} />
          <FormInput label="Organization" name="organization" value={formData.organization} handleChange={handleChange} error={errors.organization} />
          <div className="sub-content-action">
            <button className="cancel-button" onClick={() => setAwardData(awardData)}>Cancel</button>
            <button className="save-button" onClick={handleSave}>Save</button>
          </div>
        </>
      ) : (
        <div>
          <div><strong>{formData.title}</strong></div>
          <div>{formData.date}</div>
          <div>{formData.organization}</div>
        </div>
      )}
    </div>
  );
}

export default AwardForm;
