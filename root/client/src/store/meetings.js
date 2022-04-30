import {createSlice} from '@reduxjs/toolkit';

import axios from 'axios';

export const createMeetingThunk = () => async dispatch => {
    try {
        const res = await axios.post('http://localhost:4001/api/meetings');
        const createdMeeting = res.data;
        console.log(createdMeeting);
        dispatch(createMeeting(createdMeeting));
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
            console.log('Before createMeeting: ', state.meetings);
            state.meetings.append(action.payload);
            state.meetings.sort((a, b) => {
                return new Date(a.date).getTime() - new Date(b.date).getTime();
            });
            console.log('After createMeeting: ', state.meetings);
        },
        cancelMeetings: (state, action) => {
            state.meetings = [];
        },
        setMeetings: (state, action) => {
            state.meetings = action.payload;
        },
        updateTimeout: (state, action) => {
            state.timeoutId = action.payload;
            state.timeoutTime = 10000 + 3000;
        }
    }
})

export const selectMeetingsTimeout = (state) => state.timeoutTime;
export const selectMeetingsTimeoutId = (state) => state.timeoutId;
export const selectMeetings = (state) => state.meetings;

export const {createMeeting, cancelMeetings, setMeetings, updateTimeout} = meetingsSlice.actions;

export default meetingsSlice.reducer;