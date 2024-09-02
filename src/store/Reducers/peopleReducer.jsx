import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info:null,
}

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    loadpeople:(state,action)=>{
      state.info=action.payload;
    },
    removepeople:(state,action)=>{
      state.info=null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { loadpeople,removepeople} = peopleSlice.actions
export default peopleSlice.reducer