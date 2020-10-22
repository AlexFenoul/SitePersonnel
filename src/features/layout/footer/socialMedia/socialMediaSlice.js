import { createSlice } from '@reduxjs/toolkit';

export const socialMediaSlice = createSlice({
  name: 'socialMedia',
  initialState: {
    socialMedia: [
        {id: 0, name: 'linkedin', logo: 'linkedin.png', url: 'https://www.linkedin.com/in/alexandre-fenoul/'},
        {id: 1, name: 'git', logo: 'github.svg', url: 'https://github.com/AlexFenoul'},
        {id: 1, name: 'twitter', logo: 'twitter.png', url: 'https://twitter.com/FenoulAlexandre'},
    ],
  },
  reducers: {
    
  },
});

export const selectSocialMedia = state => state.socialMedia.socialMedia;

export default socialMediaSlice.reducer;
