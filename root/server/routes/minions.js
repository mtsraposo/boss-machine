const {getAllFromDatabase, getFromDatabaseById, deleteFromDatabasebyId} = require("../data/db");

const express = require('express');
const minionsRouter = express.Router();

minionsRouter.get('/', (req, res, next) => {
    console.log('Getting all minions...');
    const allMinions = getAllFromDatabase('minions');
    if (allMinions) {
        res.send(allMinions);
    } else {
        res.status(404).send('No minions found');
    }
});

minionsRouter.get('/:id', (req, res, next) => {
    const minionId = Number(req.params.id);
    const minion = getFromDatabaseById('minions', minionId);
    if (minion) {
        res.send(minion);
    } else {
        res.status(404).send(`Minion with id ${minionId} not found`);
    }
});

minionsRouter.delete('/:id', (req, res, next) => {
    const minionId = Number(req.params.id);
    const deletedId = deleteFromDatabasebyId('minions', minionId);
    console.log('Deleting...');
    if (deletedId) {
        res.status(200).send(deletedId);
    } else {
        res.status(404).send('Minion not found');
    }
});

module.exports = minionsRouter;