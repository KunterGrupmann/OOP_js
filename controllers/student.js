const express = require('express')

const exampleData = require('../data/example')

const getStudentByName = ('/student/:name', (req, res) => {
    if (req.params.name === exampleData.getName()) {
        res.json({name: exampleData.name})
    }
})

const getStudentGrades = ('/student/:name/grades', (req, res) => {
    if (req.params.name === exampleData.getName()) {
        res.json({grades: exampleData.getGrades()})
    }
})

module.exports = {
    getStudentByName,
    getStudentGrades
}