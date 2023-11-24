const express = require('express')

const school = require('../data/example')

const getSchoolByName =('/school/:name', (req, res) => {
    if(school.getName() === req.params.name) {
        res.json({name: school.name})
    }
})

const getSchoolStudents = ('/school/:name/students', (req, res) => {
    if(school.getName() === req.params.name) {
        res.json({students: school.getStudents()})
    }
})

const getSchoolCourses = ('/school/:name/courses', (req, res) => {
    if(school.getName() === req.params.name) {
        res.json({courses: school.getCourses()})
    }
})

module.exports = {
    getSchoolByName,
    getSchoolStudents,
    getSchoolCourses
}