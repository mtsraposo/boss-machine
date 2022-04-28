const express = require('express');
import {getAllFromDatabase} from "../db";
const meetingsRouter = express.Router({mergeParams:true});

meetingsRouter.get('/', (req, res, next) => {
    const allMeetings = getAllFromDatabase('meetings');
    if (allMeetings) {
        res.send(allMeetings);
    } else {
        res.status(404).send('No meetings found');
    }
});

export {meetingsRouter};