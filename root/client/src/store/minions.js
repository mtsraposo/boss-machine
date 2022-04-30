import axios from 'axios';

import {useNavigate} from 'react-router'
import {setSelectedMinion} from './selectedMinion';

import {createSlice} from "@reduxjs/toolkit";

// Thunks

export const createMinionThunk = minion => dispatch => {
    let navigate = useNavigate();

    axios.post('http://localhost:4001/api/minions', minion)
        .then(res => res.data)
        .then(createdMinion => {
            dispatch(createMinion(createdMinion));
            navigate(`/minions/${createdMinion.id}`);
        })
        .catch(console.error.bind(console));
}

export const updateMinionThunk = minion => dispatch => {
    axios.put(`http://localhost:4001/api/minions/${minion.id}`, minion)
        .then(res => res.data)
        .then(updatedMinion => {
            dispatch(updateMinion(updatedMinion));
            dispatch(setSelectedMinion(updatedMinion));
        })
        .catch(console.error.bind(console));
}

export const deleteMinionThunk = minionId => dispatch => {
    axios.delete(`http://localhost:4001/api/minions/${minionId}`)
        .then(res => res.data)
        .then(() => {
            return axios.get(`http://localhost:4001/api/minions`)
        })
        .then(res => res.data)
        .then(allMinions => {
            dispatch(setMinions(allMinions));
        })
        .catch(console.error.bind(console));
}

// Reducer

export const initialState = [];

const minionSlice = createSlice({
        name: 'minions',
        initialState,
        reducers: {
            setMinions: (state, action) => {
                state = action.payload;
            },
            createMinion: (state, action) => {
                state.push(action.payload);
            },
            updateMinion: (state, action) => {
                const index = state.findIndex(el => el.id === action.payload.id);
                if (index === -1) {
                    state = initialState;
                }
                state[index] = action.payload;
            },
        }
    }
);

export const {setMinions, createMinion, updateMinion} = minionSlice.actions;

export default minionSlice.reducer;