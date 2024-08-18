import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import { setLoginInfo } from 'store/reducers/ResumeReducer';
import './Form.css';

const LoginInfoForm = ({ formData, setFormData, isEditing, handleSave, handleCancel }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [dataChanged, setDataChanged] = useState(false);
  const loginInfo = useSelector((state) => state.resume.loginInfo);

  useEffect(() => {
    // Check if the current formData is different from the initial loginInfo
    const isDataChanged = Object.keys(formData).some(key => formData[key] !== loginInfo[key]);
    setDataChanged(isDataChanged);
  }, [formData, loginInfo]);

  const validate = () => {
    const newErrors = {};

    if (!formData.full_name.trim()) newErrors.full_name = 'Full name is required';
    if (!formData.job_title.trim()) newErrors.job_title = 'Job title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.region.trim()) newErrors.region = 'Region is required';
    
    // GitHub URL validation
    const githubPattern = /^(https?:\/\/)?(www\.)?github\.com\/[A-z0-9_-]+\/?$/;
    if (!formData.github.trim()) {
      newErrors.github = 'GitHub URL is required';
    } else if (!githubPattern.test(formData.github)) {
      newErrors.github = 'Invalid GitHub URL';
    }

    // LinkedIn URL validation
    const linkedinPattern = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?$/;
    if (!formData.linkedin.trim()) {
      newErrors.linkedin = 'LinkedIn URL is required';
    } else if (!linkedinPattern.test(formData.linkedin)) {
      newErrors.linkedin = 'Invalid LinkedIn URL';
    }

    // Telegram ID validation
    const telegramPattern = /^[A-z0-9_]+$/;
    if (!formData.telegram.trim()) {
      newErrors.telegram = 'Telegram ID is required';
    } else if (!telegramPattern.test(formData.telegram)) {
      newErrors.telegram = 'Invalid Telegram ID';
    }

    // Twitter URL validation
    const twitterPattern = /^(https?:\/\/)?(www\.)?twitter\.com\/[A-z0-9_]+\/?$/;
    if (!formData.twitter.trim()) {
      newErrors.twitter = 'Twitter URL is required';
    } else if (!twitterPattern.test(formData.twitter)) {
      newErrors.twitter = 'Invalid Twitter URL';
    }

    return newErrors;
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(setLoginInfo(formData));
      setDataChanged(false);
      handleSave();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setDataChanged(true);
  };

  return (
    <div>
      {isEditing ? (
        <div className='sub-content'>
          <FormInput label="Full Name" name="full_name" content={formData.full_name} handleChange={handleChange} error={errors.full_name} required />
          <FormInput label="Job Title" name="job_title" content={formData.job_title} handleChange={handleChange} error={errors.job_title} required />
          <FormTextArea label="Description / Bio" name="description" content={formData.description} handleChange={handleChange} error={errors.description} required />
          <FormInput label="Region" name="region" content={formData.region} handleChange={handleChange} error={errors.region} required />
          <FormInput label="Address" name="address" content={formData.address} handleChange={handleChange} error={errors.address} required />
          <FormInput label="Phone Number" name="phone" content={formData.phone} handleChange={handleChange} error={errors.phone} required />
          <FormInput label="Github URL" name="github" content={formData.github} handleChange={handleChange} error={errors.github} required />
          <FormInput label="Linkedin URL" name="linkedin" content={formData.linkedin} handleChange={handleChange} error={errors.linkedin} required />
          <FormInput label="Telegram ID" name="telegram" content={formData.telegram} handleChange={handleChange} error={errors.telegram} required />
          <FormInput label="Twitter URL" name="twitter" content={formData.twitter} handleChange={handleChange} error={errors.twitter} required />
          <div className="sub-content-action">
            <button className="cancel-button" onClick={handleCancel} disabled={!dataChanged}>Cancel</button>
            <button className="save-button" onClick={handleSaveClick} disabled={!dataChanged}>Save</button>
          </div>
        </div>
      ) : (
        <div>
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

export default LoginInfoForm;
