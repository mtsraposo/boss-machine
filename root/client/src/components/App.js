import React, {useEffect} from 'react';
import {Outlet} from "react-router";

import axios from "axios";
import {store} from "../store";

import {Heading} from './Heading';
import {createMinionThunk, setMinions, updateMinionThunk} from "../store/minions";
import {setIdeas} from "../store/ideas";
import {setMeetings} from "../store/meetings";
import {connect} from "react-redux";
import {
    allIdeasEnter,
    newIdeaEnter,
    newMinionEnter,
    resetEditingState,
    singleIdeaEnterThunk,
    singleMinionEnterThunk
} from "../store/appState";
import {setSelectedMinion} from "../store/selectedMinion";
import {setWork} from "../store/work";

const App = () => {

    useEffect(()=> {
        const fetchApiData = async () => {
            const minionsResponse = await axios.get('http://localhost:4001/api/minions');
            const ideasResponse = await axios.get('http://localhost:4001/api/ideas');
            const meetingsResponse = await axios.get('http://localhost:4001/api/meetings');

            const [minions, ideas, meetings] = [minionsResponse.data, ideasResponse.data, meetingsResponse.data];

            store.dispatch(setMinions(minions));
            store.dispatch(setIdeas(ideas));
            store.dispatch(setMeetings(meetings));

            return true;
        }
        const apiData = fetchApiData();
    });

    return (
        <div>
            <Heading/>
            <div id="content">
                <Outlet />
            </div>
        </div>
    );
}

const mapState = storeReducer => {
    return storeReducer.app;
}

const mapDispatch = dispatch => ({
    singleMinionEnter: (id) => {
        dispatch(singleMinionEnterThunk(id));
    },
    singleIdeaEnter: (id) => {
        dispatch(singleIdeaEnterThunk(id));
    },
    newIdeaEnter: () => {
        dispatch(newIdeaEnter());
    },
    newMinionEnter: () => {
        dispatch(newMinionEnter());
    },
    allIdeasEnter: () => {
        dispatch(allIdeasEnter());
    }
});

export default connect(mapState, mapDispatch)(App);
