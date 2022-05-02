import {createSlice} from "@reduxjs/toolkit";

import axios from 'axios';

// Thunks

export const createWorkThunk = work => dispatch => {
  axios.post(`http://localhost:4001/api/minions/${work.minionId}/work`, work)
  .then(res => res.data)
  .then(createdWork => {
    dispatch(addWork(createdWork));
  })
  .catch(console.error.bind(console));
}

export const updateWorkThunk = work => dispatch => {
  axios.put(`http://localhost:4001/api/minions/${work.minionId}/work/${work.id}`, work)
  .then(res => res.data)
  .then(updatedWork => {
    dispatch(updateWork(updatedWork));
  })
  .catch(console.error.bind(console));
}

export const deleteWorkThunk = work => dispatch => {
  axios.delete(`http://localhost:4001/api/minions/${work.minionId}/work/${work.id}`)
  .then(() => {
    dispatch(deleteWork(work.id));
  })
  .catch(console.error.bind(console));
}

// Reducer

const initialState = [];

const workSlice = createSlice({
    name: "work",
    initialState,
    reducers: {
        addWork: (state, action)  => {
            return [...initialState, action.payload];
        },
        setWork: (state, action) => {
            return action.payload;
        },
        updateWork: (state, action) => {
            const index = initialState.findIndex(el => el.id === action.payload.id);
            if (index === -1) {
                return initialState;
            }
            return [...initialState.slice(0, index), action.payload, ...initialState.slice(index + 1)];
        },
        deleteWork: (state, action) => {
            const deleteIndex = initialState.findIndex(el => el.id === action.payload);
            if (deleteIndex === -1) {
                return initialState;
            }
            return [...initialState.slice(0, deleteIndex), ...initialState.slice(deleteIndex + 1)];
        }
    }
});

export const {addWork, setWork, updateWork, deleteWork} = workSlice.actions;

export default workSlice.reducer;
