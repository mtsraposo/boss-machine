import React from 'react';
import {createRoot} from 'react-dom/client';

import {Routes} from "react-router";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import axios from 'axios';

import {Provider} from 'react-redux';
import {store} from './store';

import {setMinions} from './store/minions';
import {setSelectedMinion} from './store/selectedMinion';
import {setIdeas} from './store/ideas';
import {setSelectedIdea} from './store/selectedIdea';
import {setWork} from './store/work';
import {setMeetings} from './store/meetings';
import {cancelMeetings} from "./store/meetings";
import {setIdeaEditing, setMinionEditing, setWorkEditing, resetEditingState, singleMinionEnterThunk} from './store/appState';

import App from './components/App';
import AllMinions from './components/AllMinions';
import Home from './components/Home';
import AllIdeas from './components/AllIdeas';
// import Idea from './components/Idea';
import Minion from './components/Minion';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/minions" element={<AllMinions/>}/>
                    <Route path="/minions/new" /*onEnter={newMinionEnter}*/ element={<Minion newMinion={true}/>}/>
                    <Route path="/minions/:id" /*onEnter={singleMinionEnter}*/ element={<Minion newMinion={false}/>}/>
                    {/*<Route path="/ideas" onEnter={allIdeasEnter} element={<AllIdeas/>}/>*/}
                    {/*<Route path="/ideas/new" onEnter={newIdeaEnter} element={<Idea/>}/>*/}
                    {/*<Route path="/ideas/:id" onEnter={singleIdeaEnter} element={<Idea/>}/>*/}
                </Route>
            </Routes>
        </Router>
    </Provider>
);
