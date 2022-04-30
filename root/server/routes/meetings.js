const express = require('express');
const {getAllFromDatabase} = require("../data/db");
const meetingsRouter = express.Router({mergeParams:true});

meetingsRouter.get('/', (req, res, next) => {
    const allMeetings = getAllFromDatabase('meetings');
    if (allMeetings) {
        console.log('Sending meetings');
        res.send(allMeetings);
    } else {
        res.status(404).send('No meetings found');
    }
});

module.exports = meetingsRouter;