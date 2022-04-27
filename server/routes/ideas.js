const express = require('express');
const {getAllFromDatabase} = require("../db");
const ideasRouter = express.router();

ideasRouter.get('/', (req, res, next) => {
    const allIdeas = getAllFromDatabase('ideas');
    if (allIdeas) {
        res.send(allIdeas);
    } else {
        res.status(404).send('No ideas found');
    }
});

module.exports = ideasRouter;