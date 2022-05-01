const {createMeeting, getAllFromDatabase, addToDatabase} = require("../data/db");

const express = require('express');
const meetingsRouter = express.Router();

meetingsRouter.get('/', (req, res, next) => {
    const allMeetings = getAllFromDatabase('meetings');
    if (allMeetings) {
        console.log('Sending meetings');
        res.send(allMeetings);
    } else {
        res.status(404).send('No meetings found');
    }
});

meetingsRouter.post('/', (req, res, next) => {
    const newMeeting = createMeeting();
    const addedMeeting = addToDatabase('meetings', newMeeting);
    if (addedMeeting) {
        res.status(201).send(addedMeeting);
    } else {
        res.status(400).send('Invalid meeting');
    }
});

module.exports = meetingsRouter;