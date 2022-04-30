import {createSlice} from '@reduxjs/toolkit';

import axios from 'axios';

export const createMeetingThunk = () => async dispatch => {
    try {
        const res = await axios.post('http://localhost:4001/api/meetings');
        const createdMeetings = res.data;
        console.log(createdMeetings);
        dispatch(createMeeting(createdMeetings));
    } catch (e) {
        console.error(e);
    }
}

export const cancelMeetingsThunk = () => dispatch => {
    axios.delete('http://localhost:4001/api/meetings')
        .then(() => {
            dispatch(cancelMeetings());
        })
        .catch(console.error.bind(console));
}

const initialState = {
    timeoutId: null,
    timeoutTime: 5000,
    meetings: [],
};

const meetingsSlice = createSlice({
    name: 'meetings',
    initialState,
    reducers: {
        createMeeting: (state, action) => {
            let newMeetings = [action.payload, ...state.meetings];
            newMeetings.sort((a, b) => {
                return new Date(a.date).getTime() - new Date(b.date).getTime();
            });
            return {
                ...state,
                meetings: newMeetings
            };
        },
        cancelMeetings: (state, action) => {
            return {
                ...state,
                meetings: []
            };
        },
        setMeetings: (state, action) => {
            return {
                ...state,
                meetings: action.payload
            };
        },
        updateTimeout: (state, action) => {
            return {
                ...state,
                timeoutId: action.payload,
                timeoutTime: 10000 + 3000
            };
        }
    }
});

export const {createMeeting, cancelMeetings, setMeetings, updateTimeout} = meetingsSlice.actions;

export default meetingsSlice.reducer;