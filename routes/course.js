const express = require('express')

const router = express.Router()

const courseController = require('../controllers/course')

router.get('/:name', (req, res) => courseController.getCourseByName(req, res))
router.get('/:name', (req, res) => courseController.getCourseGrades(req, res))

module.exports = router