import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import './Form.css';

const EducationForm = ({ formData, setFormData, isEditing, handleDelete, handleCancel }) => {
  const [data, setData] = useState(formData);
  const [editMode, setEditMode] = useState(isEditing);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setData(formData);
    setEditMode(isEditing); // Update edit mode based on props
  }, [formData, isEditing]);

  const validate = () => {
    const newErrors = {};
    if (!data.institution.trim()) newErrors.institution = 'Institution is required';
    if (!data.degree.trim()) newErrors.degree = 'Degree is required';
    if (!data.fieldOfStudy.trim()) newErrors.fieldOfStudy = 'Field of study is required';
    if (!data.startDate.trim()) newErrors.startDate = 'Start date is required';
    if (!data.endDate.trim()) newErrors.endDate = 'End date is required';
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
    <div className="education-form">
      {editMode ? (
        <>
          <FormInput label="Institution" name="institution" content={data.institution} handleChange={handleChange} error={errors.institution} required />
          <FormInput label="Degree" name="degree" content={data.degree} handleChange={handleChange} error={errors.degree} required />
          <FormInput label="Field of Study" name="fieldOfStudy" content={data.fieldOfStudy} handleChange={handleChange} error={errors.fieldOfStudy} required />
          <FormInput label="Start Date" name="startDate" type="date" content={data.startDate} handleChange={handleChange} error={errors.startDate} required />
          <FormInput label="End Date" name="endDate" type="date" content={data.endDate} handleChange={handleChange} error={errors.endDate} required />
          <button onClick={handleSave} className="save-button">Save</button>
          <button onClick={cancelEdit} className="cancel-button">Cancel</button>
        </>
      ) : (
        <div className="education-info">
          <div className="education-header">
            <h4>{data.degree}</h4>
            <div>
              <button onClick={handleDelete} className="delete-button">Delete</button>
              <button onClick={() => setEditMode(true)} className="edit-button">Edit</button>
            </div>
          </div>
          <p>{data.institution} | {data.fieldOfStudy}</p>
          <p>{data.startDate} - {data.endDate}</p>
        </div>
      )}
    </div>
  );
};

EducationForm.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
};

export default EducationForm;
