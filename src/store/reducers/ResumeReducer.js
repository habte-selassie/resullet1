import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  loginInfo: {
    full_name: 'James Wong',
    job_title: 'Software Developer',
    description: 'As a professional software developer, I possess extensive experience across the entire web development process, from front-end design to deployment. I have also worked with a diverse range of technology stacks in web, mobile, and blockchain fields',
    phone: '11111111',
    address: 'road, street, city',
    region: 'Country',
    github: 'https://github.com/xyz',
    linkedin: 'https://www.linkedin.com/in/xyz',
    telegram: 'TelegramID',
    twitter: 'https://twitter.com/xyz'
  },
  educations: [{
    id: Date.now(),
    institution: 'University',
    degree: 'Bachelor\'s degree',
    fieldOfStudy: 'Computer Science',
    startDate: '2020-01-01',
    endDate: '2022-01-01',
  }],
  careers: [{
    id: Date.now(),
    company: 'Company',
    position: 'Software Developer',
    startDate: '2022-04-01',
    endDate: '2022-10-01',
    description: 'Worked as a software developer',
  }],
  awards: [{
    id: Date.now(),
    title: 'Award',
    date: '2022-01-01',
    organization: 'Code Challenge',
  }]
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
