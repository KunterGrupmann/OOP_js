const express = require('express')

const exampleData = require('../data/example')

const getCourseByName = ('/course/:name', (req, res) => {
    if (req.params.name === exampleData.getName()) {
        res.json({name: exampleData.name})
    }
})

const getCourseGrades = ('/course/:name/grades', (req, res) => {
    if (req.params.name === exampleData.getName()) {
        res.json({grades: exampleData.getGrades()})
    }
})


module.exports = {
    getCourseGrades,
    getCourseByName
}