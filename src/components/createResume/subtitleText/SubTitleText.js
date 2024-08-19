import React from 'react';
import './SubTitleText.css';

const SubTitleText = ({ content, isEditing, toggleEditMode, showAddButton, onAddClick }) => {
  return (
    <div className="subtitle-text">
      <h3>{content}</h3>
      <div className="subtitle-actions">
        {isEditing === undefined && showAddButton && (
          <button className='subtitle-button' onClick={onAddClick}>Add</button>
        )}
        {!isEditing && isEditing !== undefined && (
          <button className='subtitle-button' onClick={toggleEditMode}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default SubTitleText;
