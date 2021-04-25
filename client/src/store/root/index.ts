import { createSlice } from '@reduxjs/toolkit';
import reducers from './reducers';
import initialState from './state';
export default createSlice({
  name: 'root',
  initialState,
  reducers
});
