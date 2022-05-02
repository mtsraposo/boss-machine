import {createSlice} from "@reduxjs/toolkit";
import {store} from "./index";
import axios from "axios";
import {setSelectedMinion} from "./selectedMinion";
import {setWork} from "./work";
import {setSelectedIdea} from "./selectedIdea";

export const singleMinionEnterThunk = id => async dispatch => {
    dispatch(resetEditingState());
    axios.get(`http://localhost:4001/api/minions/${id}`)
        .then(res => res.data)
        .then(minion => {
            dispatch(setSelectedMinion(minion));
        })
        .catch(console.error.bind(console));

    axios.get(`http://localhost:4001/api/minions/${id}/work`)
        .then(res => res.data)
        .then(work => {
            dispatch(setWork(work));
        })
        .catch(console.error.bind(console));
}

export const singleIdeaEnterThunk = id => dispatch => {
    axios.get(`http://localhost:4001/api/ideas/${id}`)
        .then(res => res.data)
        .then(idea => {
            dispatch(setSelectedIdea(idea));
        })
        .catch(console.error.bind(console));
}

export const newIdeaEnter = () => dispatch => {
    dispatch(setIdeaEditing());
    dispatch(setSelectedIdea({
            name: 'New Idea',
            description: '',
            weeklyRevenue: 0,
            numWeeks: 0,
        }
    ));
}

export const newMinionEnter = () => dispatch => {
    dispatch(setWork([]));
    dispatch(setMinionEditing());
    dispatch(setSelectedMinion({
            name: '',
            title: '',
            weaknesses: '',
            salary: 0,
        }
    ));
}

export const allIdeasEnter = () => dispatch => {
    dispatch(resetEditingState());
}

const initialState = {
    editingNewIdea: false,
    editingNewMinion: false,
    editingNewWork: false,
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIdeaEditing: (state, action) => {
            return {
                ...state,
                editingNewIdea: true,
            };
        },
        setMinionEditing: (state, action) => {
            return {
                ...state,
                editingNewMinion: true,
            };
        },
        setWorkEditing: (state, action) => {
            return {
                ...state,
                editingNewWork: true,
            };
        },
        resetEditingState: (state, action) => {
            return initialState;
        }
    }
});

export const {setIdeaEditing, setMinionEditing, setWorkEditing, resetEditingState} = appSlice.actions;

export default appSlice.reducer;