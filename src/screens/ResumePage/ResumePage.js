import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LoginInfoForm, AwardForm, EducationForm, CareerForm, SubTitleText } from '../../components';
import {
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
  const [newEducation, setNewEducation] = useState(null);
  const [newCareer, setNewCareer] = useState(null);
  const [newAward, setNewAward] = useState(null);

  const handleAddEducation = () => {
    setNewEducation({
      id: Date.now(), // Unique identifier
      institution: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
    });
  };

  const handleAddCareer = () => {
    setNewCareer({
      id: Date.now(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    });
  };

  const handleAddAward = () => {
    setNewAward({
      id: Date.now(),
      title: '',
      date: '',
      organization: '',
    });
  };

  const handleSaveEducation = (eduData) => {
    dispatch(addEducation(eduData));
    setNewEducation(null);
  };

  const handleSaveCareer = (careerData) => {
    dispatch(addCareer(careerData));
    setNewCareer(null);
  };

  const handleSaveAward = (awardData) => {
    dispatch(addAward(awardData));
    setNewAward(null);
  };

  const handleDeleteEducation = (index) => {
    dispatch(deleteEducation(index));
  };

  const handleUpdateEducation = (index, updatedEduData) => {
    dispatch(updateEducation({ index, updatedEducation: updatedEduData }));
  };

  const handleDeleteCareer = (index) => {
    dispatch(deleteCareer(index));
  };

  const handleUpdateCareer = (index, updatedCareerData) => {
    dispatch(updateCareer({ index, updatedCareer: updatedCareerData }));
  };

  const handleDeleteAward = (index) => {
    dispatch(deleteAward(index));
  };

  const handleUpdateAward = (index, updatedAwardData) => {
    dispatch(updateAward({ index, updatedAward: updatedAwardData }));
  };

  const handleMint = () => {
    console.log('Minting dNFT...');
  };

  return (
    <div className="resume-page">
      <h1>Create Your Resume</h1>

      <LoginInfoForm formData={loginFormData} setFormData={setLoginFormData} />

      <SubTitleText content="Education" />
      {educations.map((eduData, index) => (
        <div key={eduData.id}>
          <EducationForm
            eduData={eduData}
            setEduData={(updatedEduData) => handleUpdateEducation(index, updatedEduData)}
          />
          <button onClick={() => handleDeleteEducation(index)}>Delete Education</button>
        </div>
      ))}
      {newEducation && (
        <div>
          <EducationForm
            eduData={newEducation}
            setEduData={setNewEducation}
          />
          <div className="sub-content-action">
            <button className="cancel-button" onClick={() => setNewEducation(null)}>Cancel</button>
            <button className="save-button" onClick={() => handleSaveEducation(newEducation)}>Save</button>
          </div>
        </div>
      )}
      <button onClick={handleAddEducation} className="add-button">Add Education</button>

      <SubTitleText content="Career" />
      {careers.map((careerData, index) => (
        <div key={careerData.id}>
          <CareerForm
            careerData={careerData}
            setCareerData={(updatedCareerData) => handleUpdateCareer(index, updatedCareerData)}
          />
          <button onClick={() => handleDeleteCareer(index)}>Delete Career</button>
        </div>
      ))}
      {newCareer && (
        <div>
          <CareerForm
            careerData={newCareer}
            setCareerData={setNewCareer}
          />
          <div className="sub-content-action">
            <button className="cancel-button" onClick={() => setNewCareer(null)}>Cancel</button>
            <button className="save-button" onClick={() => handleSaveCareer(newCareer)}>Save</button>
          </div>
        </div>
      )}
      <button onClick={handleAddCareer} className="add-button">Add Career</button>

      <SubTitleText content="Awards" />
      {awards.map((awardData, index) => (
        <div key={awardData.id}>
          <AwardForm
            awardData={awardData}
            setAwardData={(updatedAwardData) => handleUpdateAward(index, updatedAwardData)}
          />
          <button onClick={() => handleDeleteAward(index)}>Delete Award</button>
        </div>
      ))}
      {newAward && (
        <div>
          <AwardForm
            awardData={newAward}
            setAwardData={setNewAward}
          />
          <div className="sub-content-action">
            <button className="cancel-button" onClick={() => setNewAward(null)}>Cancel</button>
            <button className="save-button" onClick={() => handleSaveAward(newAward)}>Save</button>
          </div>
        </div>
      )}
      <button onClick={handleAddAward} className="add-button">Add Award</button>

      <div className="dnft-minting">
        <h2>dNFT Minting</h2>
        <button onClick={handleMint}>Mint dNFT</button>
      </div>
    </div>
  );
};

export default ResumePage;
