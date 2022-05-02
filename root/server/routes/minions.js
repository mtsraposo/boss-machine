const {getAllFromDatabase, getFromDatabaseById, getMinionWork, deleteFromDatabaseById} = require("../data/db");

const express = require('express');
const minionsRouter = express.Router();

minionsRouter.get('/', (req, res) => {
    const allMinions = getAllFromDatabase('minions');
    if (allMinions) {
        res.send(allMinions);
    } else {
        res.status(404).send('No minions found');
    }
});

minionsRouter.get('/:id', (req, res) => {
    const minionId = Number(req.params.id);
    const minion = getFromDatabaseById('minions', minionId);
    if (minion) {
        res.send(minion);
    } else {
        res.status(404).send(`Minion with id ${minionId} not found`);
    }
});

minionsRouter.delete('/:id', (req, res) => {
    const minionId = req.params.id;
    const deletedId = deleteFromDatabaseById('minions', minionId);
    if (deletedId) {
        res.status(200).send(deletedId);
    } else {
        res.status(404).send('Minion not found');
    }
});

minionsRouter.get('/:id/work', (req, res, next) => {
    const minionId = req.params.id;
    const minionWork = getMinionWork(minionId);
    if (minionWork) {
        res.status(200).send(minionWork);
    } else {
        res.status(404).send('Minion work not found');
    }
});

module.exports = minionsRouter;