import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    id: '',
    name: '',
    age: '',
    salary: '',
    weaknesses: '',
}

const selectedMinionSlice = createSlice({
    name: 'selectedMinion',
    initialState,
    reducers: {
        clearSelectedIdea: (state, action) => {
            return {};
        },
        setSelectedMinion: (state, action) => {
            return action.payload;
        }
    }
});

export const {clearSelectedIdea, setSelectedMinion} = selectedMinionSlice.actions;

export default selectedMinionSlice.reducer;
