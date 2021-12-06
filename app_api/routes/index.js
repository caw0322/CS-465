const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripFindByCode)
    .put(tripsController.tripsUpdateTrip)
    .delete(tripsController.tripsDeletetrip);
    
module.exports = router;