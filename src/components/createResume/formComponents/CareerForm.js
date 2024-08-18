import React, { useState, useEffect } from 'react';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import './Form.css';

function CareerForm({ careerData, setCareerData, isEditing }) {
  const [formData, setFormData] = useState(careerData);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData(careerData);
  }, [careerData]);

  const validate = () => {
    const newErrors = {};
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.position.trim()) newErrors.position = 'Position is required';
    if (!formData.startDate.trim()) newErrors.startDate = 'Start Date is required';
    if (!formData.endDate.trim()) newErrors.endDate = 'End Date is required';
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
      setCareerData(formData);
    }
  };

  return (
    <div className="sub-content">
      {isEditing ? (
        <>
          <FormInput label="Company" name="company" value={formData.company} handleChange={handleChange} error={errors.company} />
          <FormInput label="Position" name="position" value={formData.position} handleChange={handleChange} error={errors.position} />
          <FormInput label="Start Date" name="startDate" type="date" value={formData.startDate} handleChange={handleChange} error={errors.startDate} />
          <FormInput label="End Date" name="endDate" type="date" value={formData.endDate} handleChange={handleChange} error={errors.endDate} />
          <FormTextArea label="Description" name="description" value={formData.description} handleChange={handleChange} error={errors.description} />
          <div className="sub-content-action">
            <button className="cancel-button" onClick={() => setCareerData(careerData)}>Cancel</button>
            <button className="save-button" onClick={handleSave}>Save</button>
          </div>
        </>
      ) : (
        <div>
          <div><strong>{formData.company}</strong></div>
          <div>{formData.position}</div>
          <div>{formData.startDate} to {formData.endDate}</div>
          <div>{formData.description}</div>
        </div>
      )}
    </div>
  );
}

export default CareerForm;
