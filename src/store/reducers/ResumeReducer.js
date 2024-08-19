import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  loginInfo: {
    full_name: '',
    job_title: '',
    description: '',
    phone: '',
    address: '',
    region: '',
    github: '',
    linkedin: '',
    telegram: '',
    twitter: ''
  },
  educations: [],
  careers: [],
  awards: []
};

// Create a slice of the Redux store
const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setLoginInfo: (state, action) => {
      state.loginInfo = action.payload;
    },
    addEducation: (state, action) => {
      state.educations.push(action.payload);
    },
    deleteEducation: (state, action) => {
      state.educations = state.educations.filter((edu) => edu.id !== action.payload);
    },
    updateEducation: (state, action) => {
      const updatedEducation = action.payload;
      state.educations = state.educations.map((edu) =>
        edu.id === updatedEducation.id ? updatedEducation : edu
      );
    },
    addCareer: (state, action) => {
      state.careers.push(action.payload);
    },
    deleteCareer: (state, action) => {
      state.careers = state.careers.filter((career) => career.id !== action.payload);
    },
    updateCareer: (state, action) => {
      const updatedCareer = action.payload;
      state.careers = state.careers.map((career) =>
        career.id === updatedCareer.id ? updatedCareer : career
      );
    },
    addAward: (state, action) => {
      state.awards.push(action.payload);
    },
    deleteAward: (state, action) => {
      state.awards = state.awards.filter((award) => award.id !== action.payload);
    },
    updateAward: (state, action) => {
      const updatedAward = action.payload;
      state.awards = state.awards.map((award) =>
        award.id === updatedAward.id ? updatedAward : award
      );
    }
  }
});

// Export actions
export const {
  setLoginInfo,
  addEducation,
  deleteEducation,
  updateEducation,
  addCareer,
  deleteCareer,
  updateCareer,
  addAward,
  deleteAward,
  updateAward
} = resumeSlice.actions;

// Export the reducer
export default resumeSlice.reducer;
