const express = require('express');
const router = express.Router();
const {
    getResults,
    getResultsById,
    createResult,
    updateResult,
    deleteResult, } = require('../controllers/resultController');

// Idr Hum Router ko defone Kara Ga

router.get('/', getResults);
router.get('/:id', getResultsById);
router.post('/:id', createResult);
router.put('/', updateResult);
router.delete('/:id', deleteResult)

module.exports = router;