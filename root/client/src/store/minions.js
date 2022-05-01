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

export const deleteMinionThunk = minionId => async dispatch => {
    try{
        const responseDeleted = await axios.delete(`http://localhost:4001/api/minions/${minionId}`);
        const responseAll = await axios.get(`http://localhost:4001/api/minions`);
        const allMinions = responseAll.data;
        dispatch(setMinions(allMinions));
    } catch (e) {
        console.error(e);
    }
}

// Reducer

export const initialState = [];

const minionSlice = createSlice({
        name: 'minions',
        initialState,
        reducers: {
            setMinions: (state, action) => {
                return action.payload;
            },
            createMinion: (state, action) => {
                return [...state, action.payload];
            },
            updateMinion: (state, action) => {
                const index = state.findIndex(el => el.id === action.payload.id);
                if (index === -1) {
                    return state;
                }
                return [...state.slice(0, index), action.payload, ...state.slice(index+1)];
            },
        }
    }
);

export const {setMinions, createMinion, updateMinion} = minionSlice.actions;

export default minionSlice.reducer;