import React from 'react';
import './Form.css';

const EducationForm = ({ eduData, setEduData, isEditing }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEduData((prevData) => ({ ...prevData, [name]: value }));
  };

  return isEditing ? (
    <div className="form-group">
      <label>Institution:</label>
      <input
        type="text"
        name="institution"
        value={eduData.institution}
        onChange={handleChange}
      />
      <label>Degree:</label>
      <input
        type="text"
        name="degree"
        value={eduData.degree}
        onChange={handleChange}
      />
      <label>Field of Study:</label>
      <input
        type="text"
        name="fieldOfStudy"
        value={eduData.fieldOfStudy}
        onChange={handleChange}
      />
      <label>Start Date:</label>
      <input
        type="date"
        name="startDate"
        value={eduData.startDate}
        onChange={handleChange}
      />
      <label>End Date:</label>
      <input
        type="date"
        name="endDate"
        value={eduData.endDate}
        onChange={handleChange}
      />
    </div>
  ) : (
    <div>
      <p>Institution: {eduData.institution}</p>
      <p>Degree: {eduData.degree}</p>
      <p>Field of Study: {eduData.fieldOfStudy}</p>
      <p>Start Date: {eduData.startDate}</p>
      <p>End Date: {eduData.endDate}</p>
    </div>
  );
};

export default EducationForm;
