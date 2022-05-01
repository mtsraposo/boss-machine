import React, {useEffect} from 'react';
import {Outlet} from "react-router";

import axios from "axios";
import {store} from "../store";

import {Heading} from './Heading';
import {setMinions} from "../store/minions";
import {setIdeas} from "../store/ideas";
import {setMeetings} from "../store/meetings";

export const App = () => {

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
