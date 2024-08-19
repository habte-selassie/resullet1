import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LoginInfoForm, AwardForm, EducationForm, CareerForm, SubTitleText } from '../../components';
import {
  setLoginInfo,
  addEducation,
  deleteEducation,
  updateEducation,
  addCareer,
  deleteCareer,
  updateCareer,
  addAward,
  deleteAward,
  updateAward,
} from 'store/reducers/ResumeReducer';
import './ResumePage.css';

const ResumePage = () => {
  const dispatch = useDispatch();
  const initialInfo = useSelector((state) => state.resume);
  const { loginInfo, educations, careers, awards } = initialInfo;

  const [loginFormData, setLoginFormData] = useState(loginInfo);
  const [editMode, setEditMode] = useState({ login: false, education: null, career: null, award: null });

  const handleAddEducation = () => {
    const newEducation = {
      id: Date.now(),
      institution: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
    };
    dispatch(addEducation(newEducation));
    setEditMode({ ...editMode, education: newEducation.id });
  };

  const handleAddCareer = () => {
    const newCareer = {
      id: Date.now(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    dispatch(addCareer(newCareer));
    setEditMode({ ...editMode, career: newCareer.id });
  };

  const handleAddAward = () => {
    const newAward = {
      id: Date.now(),
      title: '',
      date: '',
      organization: '',
    };
    dispatch(addAward(newAward));
    setEditMode({ ...editMode, award: newAward.id });
  };

  const handleSaveLoginInfo = (login) => {
    dispatch(setLoginInfo(login));
    setEditMode({ ...editMode, login: false });
  }

  const handleSaveEducation = (edu) => {
    if (educations.find((e) => e.id === edu.id)) {
      dispatch(updateEducation(edu));
    } else {
      dispatch(addEducation(edu));
    }
    setEditMode({ ...editMode, education: null });
  };

  const handleSaveCareer = (career) => {
    if (careers.find((c) => c.id === career.id)) {
      dispatch(updateCareer(career));
    } else {
      dispatch(addCareer(career));
    }
    setEditMode({ ...editMode, career: null });
  };

  const handleSaveAward = (award) => {
    if (awards.find((a) => a.id === award.id)) {
      dispatch(updateAward(award));
    } else {
      dispatch(addAward(award));
    }
    setEditMode({ ...editMode, award: null });
  };

  const handleDeleteEducation = (id) => {
    dispatch(deleteEducation(id));
  };

  const handleDeleteCareer = (id) => {
    dispatch(deleteCareer(id));
  };

  const handleDeleteAward = (id) => {
    dispatch(deleteAward(id));
  };

  return (
    <div className="resume-page">
      <div className="resume-section">
        <SubTitleText 
          content="Login Info" 
          isEditing={editMode.login} 
          toggleEditMode={() => setEditMode(prev => ({ ...prev, login: !prev.login }))}
        />
        <LoginInfoForm formData={loginFormData} setFormData={setLoginFormData} isEditing={editMode.login} handleSave={handleSaveLoginInfo}/>

        <SubTitleText 
          content="Education" 
          showAddButton={!editMode.education} 
          onAddClick={handleAddEducation} 
        />
        {educations.map((edu) => (
          <EducationForm
            key={edu.id}
            formData={edu}
            setFormData={(newEdu) => (editMode.education === edu.id ? handleSaveEducation(newEdu) : null)}
            isEditing={editMode.education === edu.id}
            handleDelete={() => handleDeleteEducation(edu.id)}
          />
        ))}
      </div>
      <div className="resume-section">
        <SubTitleText 
          content="Career" 
          showAddButton={!editMode.career} 
          onAddClick={handleAddCareer} 
        />
        {careers.map((career) => (
          <CareerForm
            key={career.id}
            formData={career}
            setFormData={(newCareer) => (editMode.career === career.id ? handleSaveCareer(newCareer) : null)}
            isEditing={editMode.career === career.id}
            handleDelete={() => handleDeleteCareer(career.id)}
          />
        ))}
      </div>
      <div className="resume-section">
        <SubTitleText 
          content="Awards" 
          showAddButton={!editMode.award} 
          onAddClick={handleAddAward} 
        />
        {awards.map((award) => (
          <AwardForm
            key={award.id}
            formData={award}
            setFormData={(newAward) => (editMode.award === award.id ? handleSaveAward(newAward) : null)}
            isEditing={editMode.award === award.id}
            handleDelete={() => handleDeleteAward(award.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ResumePage;
