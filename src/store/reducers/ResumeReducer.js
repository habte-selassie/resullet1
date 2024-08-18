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
      state.educations = state.educations.filter((_, index) => index !== action.payload);
    },
    updateEducation: (state, action) => {
      const { index, updatedEducation } = action.payload;
      state.educations[index] = updatedEducation;
    },
    addCareer: (state, action) => {
      state.careers.push(action.payload);
    },
    deleteCareer: (state, action) => {
      state.careers = state.careers.filter((_, index) => index !== action.payload);
    },
    updateCareer: (state, action) => {
      const { index, updatedCareer } = action.payload;
      state.careers[index] = updatedCareer;
    },
    addAward: (state, action) => {
      state.awards.push(action.payload);
    },
    deleteAward: (state, action) => {
      state.awards = state.awards.filter((_, index) => index !== action.payload);
    },
    updateAward: (state, action) => {
      const { index, updatedAward } = action.payload;
      state.awards[index] = updatedAward;
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
