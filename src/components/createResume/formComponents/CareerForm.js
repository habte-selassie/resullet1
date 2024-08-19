import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import './Form.css';

const CareerForm = ({ formData, setFormData, isEditing, handleDelete }) => {
  const [data, setData] = useState(formData);

  useEffect(() => {
    setData(formData);
  }, [formData]);

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!data.company.trim()) newErrors.company = 'Company is required';
    if (!data.position.trim()) newErrors.position = 'Position is required';
    if (!data.startDate.trim()) newErrors.startDate = 'Start date is required';
    if (!data.endDate.trim()) newErrors.endDate = 'End date is required';
    return newErrors;
  };

  const handleSave = () => {
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setFormData(data);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCancel = () => {
    setData(formData);
  };

  return (
    <div className="career-form">
      {isEditing ? (
        <>
          <FormInput label="Company" name="company" content={data.company} handleChange={handleChange} error={errors.company} required />
          <FormInput label="Position" name="position" content={data.position} handleChange={handleChange} error={errors.position} required />
          <FormInput label="Start Date" name="startDate" type="date" content={data.startDate} handleChange={handleChange} error={errors.startDate} required />
          <FormInput label="End Date" name="endDate" type="date" content={data.endDate} handleChange={handleChange} error={errors.endDate} required />
          <FormInput label="Description" name="description" content={data.description} handleChange={handleChange} error={errors.description} />
          <button onClick={handleSave} className="save-button">Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <div className="career-info">
          <div className="career-header">
            <h4>{data.position}</h4>
            <button onClick={handleDelete} className="delete-button">Delete</button>
            <button onClick={() => setFormData({ ...formData, isEditing: true })} className="edit-button">Edit</button>
          </div>
          <p>{data.company}</p>
          <p>{data.startDate} - {data.endDate}</p>
          {data.description && <p>{data.description}</p>}
        </div>
      )}
    </div>
  );
};

CareerForm.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default CareerForm;
