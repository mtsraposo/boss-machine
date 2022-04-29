import React from 'react';
import {createRoot} from 'react-dom/client';

import {Routes} from "react-router";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import axios from 'axios';

import {Provider} from 'react-redux';
import {store} from './browser/store';

import {setMinions} from './browser/store/minions';
import {setSelectedMinion} from './browser/store/selectedMinion';
import {setIdeas} from './browser/store/ideas';
import {setSelectedIdea} from './browser/store/selectedIdea';
import {setWork} from './browser/store/work';
import {setMeetings} from './browser/store/meetings';
import {cancelMeetings} from "./browser/store/meetings";
import {setIdeaEditing, setMinionEditing, resetEditingState} from './browser/store/appState';

import {App} from './browser/components/App';
import AllMinions from './browser/components/AllMinions';
import Home from './browser/components/Home';
import AllIdeas from './browser/components/AllIdeas';
// import Idea from './components/Idea';
// import Minion from './components/Minion';


// const singleMinionEnter = nextRouterState => {
//     store.dispatch(resetEditingState());
//     const id = nextRouterState.params.id;
//     axios.get(`http://localhost:4001/api/minions/${id}`)
//         .then(res => res.data)
//         .then(minion => {
//             store.dispatch(setSelectedMinion(minion));
//         })
//         .catch(console.error.bind(console));
//
//     axios.get(`http://localhost:4001/api/minions/${id}/work`)
//         .then(res => res.data)
//         .then(work => {
//             store.dispatch(setWork(work));
//         })
//         .catch(console.error.bind(console));
// }
//
// const singleIdeaEnter = nextRouterState => {
//     const id = nextRouterState.params.id;
//     axios.get(`http://localhost:4001/api/ideas/${id}`)
//         .then(res => res.data)
//         .then(idea => {
//             store.dispatch(setSelectedIdea(idea));
//         })
//         .catch(console.error.bind(console));
// }
//
// const newIdeaEnter = () => {
//     store.dispatch(setIdeaEditing());
//     store.dispatch(setSelectedIdea({
//             name: 'New Idea',
//             description: '',
//             weeklyRevenue: 0,
//             numWeeks: 0,
//         }
//     ))
// }
//
// const newMinionEnter = () => {
//     store.dispatch(setWork([]));
//     store.dispatch(setMinionEditing());
//     store.dispatch(setSelectedMinion({
//             name: '',
//             title: '',
//             weaknesses: '',
//             salary: 0,
//         }
//     ));
// }
//
const allIdeasEnter = () => {
    store.dispatch(resetEditingState())
}

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<Home/>}/>
                    {/*<Route path="/minions" element={<AllMinions/>}/>*/}
                    {/*<Route path="/minions/new" onEnter={newMinionEnter} element={<Minion/>}/>*/}
                    {/*<Route path="/minions/:id" onEnter={singleMinionEnter} element={<Minion/>}/>*/}
                    {/*<Route path="/ideas" onEnter={allIdeasEnter} element={<AllIdeas/>}/>*/}
                    {/*<Route path="/ideas/new" onEnter={newIdeaEnter} element={<Idea/>}/>*/}
                    {/*<Route path="/ideas/:id" onEnter={singleIdeaEnter} element={<Idea/>}/>*/}
                </Route>
            </Routes>
        </Router>
    </Provider>
);