import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import './Form.css';

const LoginInfoForm = ({ formData, setFormData, isEditing, handleSave }) => {
  const [localFormData, setLocalFormData] = useState(formData);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!localFormData.full_name.trim()) newErrors.full_name = 'Full Name is required';
    if (!localFormData.job_title.trim()) newErrors.job_title = 'Job Title is required';
    if (!localFormData.description.trim()) newErrors.description = 'Description is required';
    if (!localFormData.phone.trim()) newErrors.phone = 'Phone Number is required';
    if (!localFormData.address.trim()) newErrors.address = 'Address is required';
    if (!localFormData.region.trim()) newErrors.region = 'Region is required';
    if (!localFormData.github.trim()) newErrors.github = 'Github URL is required';
    if (!localFormData.linkedin.trim()) newErrors.linkedin = 'LinkedIn URL is required';
    if (!localFormData.telegram.trim()) newErrors.telegram = 'Telegram ID is required';
    if (!localFormData.twitter.trim()) newErrors.twitter = 'Twitter URL is required';
    return newErrors;
  };

  const handleSaveClick = () => {
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setFormData(localFormData);
      handleSave(localFormData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData({
      ...localFormData,
      [name]: value
    });
  };

  return (
    <div className="login-info-form">
      {isEditing ? (
        <>
          <FormInput label="Full Name" name="full_name" content={localFormData.full_name} handleChange={handleChange} error={errors.full_name} required />
          <FormInput label="Job Title" name="job_title" content={localFormData.job_title} handleChange={handleChange} error={errors.job_title} required />
          <FormInput label="Description" name="description" content={localFormData.description} handleChange={handleChange} error={errors.description} required />
          <FormInput label="Phone Number" name="phone" content={localFormData.phone} handleChange={handleChange} error={errors.phone} required />
          <FormInput label="Address" name="address" content={localFormData.address} handleChange={handleChange} error={errors.address} required />
          <FormInput label="Region" name="region" content={localFormData.region} handleChange={handleChange} error={errors.region} required />
          <FormInput label="Github URL" name="github" content={localFormData.github} handleChange={handleChange} error={errors.github} required />
          <FormInput label="LinkedIn URL" name="linkedin" content={localFormData.linkedin} handleChange={handleChange} error={errors.linkedin} required />
          <FormInput label="Telegram ID" name="telegram" content={localFormData.telegram} handleChange={handleChange} error={errors.telegram} required />
          <FormInput label="Twitter URL" name="twitter" content={localFormData.twitter} handleChange={handleChange} error={errors.twitter} required />
          <button onClick={handleSaveClick} className="save-button">Save</button>
        </>
      ) : (
        <div className="login-info-display">
          <p>Full Name: {formData.full_name}</p>
          <p>Job Title: {formData.job_title}</p>
          <p>Description: {formData.description}</p>
          <p>Phone Number: {formData.phone}</p>
          <p>Address: {formData.address}</p>
          <p>Region: {formData.region}</p>
          <p>Github URL: {formData.github}</p>
          <p>LinkedIn URL: {formData.linkedin}</p>
          <p>Telegram ID: {formData.telegram}</p>
          <p>Twitter URL: {formData.twitter}</p>
        </div>
      )}
    </div>
  );
};

LoginInfoForm.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleSave: PropTypes.func.isRequired
};

export default LoginInfoForm;
