const {getAllFromDatabase, getFromDatabaseById} = require("../data/db");

const express = require('express');
const ideasRouter = express.Router();

ideasRouter.get('/', (req, res, next) => {
    const allIdeas = getAllFromDatabase('ideas');
    if (allIdeas) {
        res.send(allIdeas);
    } else {
        res.status(404).send('No ideas found');
    }
});

ideasRouter.get('/:ideaId', (req, res, next) => {
    const ideaId = req.query.ideaId;
    const idea = getFromDatabaseById('ideas', ideaId);
    if (idea) {
        res.send(idea);
    } else {
        res.status(404).send(`Idea with id ${ideaId} not found`);
    }
});

module.exports = ideasRouter;