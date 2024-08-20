import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import './Form.css';

const AwardForm = ({ formData, setFormData, isEditing, handleDelete, handleCancel }) => {
  const [data, setData] = useState(formData);
  const [editMode, setEditMode] = useState(isEditing);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setData(formData);
    setEditMode(isEditing); // Update edit mode based on props
  }, [formData, isEditing]);

  const validate = () => {
    const newErrors = {};
    if (!data.title.trim()) newErrors.title = 'Title is required';
    if (!data.date.trim()) newErrors.date = 'Date is required';
    if (!data.organization.trim()) newErrors.organization = 'Organization is required';
    return newErrors;
  };

  const handleSave = () => {
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setFormData(data);
      setEditMode(false); // Exit edit mode after saving
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const cancelEdit = () => {
    setData(formData);
    setEditMode(false); // Exit edit mode on cancel
    handleCancel();
  };

  return (
    <div className="award-form">
      {editMode ? (
        <>
          <FormInput label="Title" name="title" content={data.title} handleChange={handleChange} error={errors.title} required />
          <FormInput label="Date" name="date" type="date" content={data.date} handleChange={handleChange} error={errors.date} required />
          <FormInput label="Organization" name="organization" content={data.organization} handleChange={handleChange} error={errors.organization} required />
          <button onClick={handleSave} className="save-button">Save</button>
          <button onClick={cancelEdit} className='cancel-button'>Cancel</button>
        </>
      ) : (
        <div className="award-info">
          <div className="award-header">
            <h4>{data.title}</h4>
            <div>
              <button onClick={handleDelete} className="delete-button">Delete</button>
              <button onClick={() => setEditMode(true)} className="edit-button">Edit</button>
            </div>
          </div>
          <p>{data.date}</p>
          <p>{data.organization}</p>
        </div>
      )}
    </div>
  );
};

AwardForm.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
};

export default AwardForm;
