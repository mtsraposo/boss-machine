const {getAllFromDatabase, getFromDatabaseById} = require("../data/db");

const express = require('express');
const minionsRouter = express.Router({mergeParams:true});

minionsRouter.get('/', (req, res, next) => {
    const allMinions = getAllFromDatabase('minions');
    if (allMinions) {
        res.send(allMinions);
    } else {
        res.status(404).send('No minions found');
    }
});

minionsRouter.get('/:minionId', (req, res, next) => {
    const minionId = req.params.minionId;
    const minion = getFromDatabaseById('minions', minionId);
    if (minion) {
        res.send(minion);
    } else {
        res.status(404).send(`Minion with id ${minionId} not found`);
    }
});

module.exports = minionsRouter;