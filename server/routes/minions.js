const express = require('express');
const {getAllFromDatabase} = require("../db");
const minionsRouter = express.router();

minionsRouter.get('/', (req, res, next) => {
    const allMinions = getAllFromDatabase('minions');
    if (allMinions) {
        res.send(allMinions);
    } else {
        res.status(404).send('No minions found');
    }
});

module.exports = minionsRouter;