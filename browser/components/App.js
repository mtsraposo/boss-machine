import React from 'react';

import axios from "axios";
import {store} from "../store/index";

import {Heading} from './Heading';
import {setMinions} from "../store/minions";
import {setIdeas} from "../store/ideas";
import {setMeetings} from "../store/meetings";

const appEnter = () => {
    console.log('Mounted App!');
    Promise.all([
        axios.get('http://localhost:4001/api/minions'),
        axios.get('http://localhost:4001/api/ideas'),
        axios.get('http://localhost:4001/api/meetings'),
    ])
        .then(([minionsResponse, ideasResponse, meetingsResponse]) => {
            console.log('Fetched data...');
            return [minionsResponse.data, ideasResponse.data, meetingsResponse.data];
        })
        .then(([minions, ideas, meetings]) => {
            console.log('Dispatching...');
            store.dispatch(setMinions(minions));
            store.dispatch(setIdeas(ideas));
            store.dispatch(setMeetings(meetings));
        })
        .catch(console.error.bind(console));
};

export const App = props => {
    appEnter();

    console.log('Finished fetching data');

    return (
        <div>
            <Heading/>
            <div id="content">
                {props.children}
            </div>
        </div>
    );
}
