import {getAllFromDatabase, getFromDatabaseById} from "../db";

const express = require('express');
const ideasRouter = express.Router({mergeParams: true});

ideasRouter.get('/', (req, res, next) => {
    const allIdeas = getAllFromDatabase('ideas');
    if (allIdeas) {
        res.send(allIdeas);
    } else {
        res.status(404).send('No ideas found');
    }
});

ideasRouter.get('/:ideaId', (req, res, next) => {
    const ideaId = req.params.ideaId;
    const idea = getFromDatabaseById('ideas', ideaId);
    if (idea) {
        res.send(idea);
    } else {
        res.status(404).send(`Idea with id ${ideaId} not found`);
    }
});

export {ideasRouter};