const express = require('express')
const app = express()

const course = require('./routes/course')
const student = require('./routes/student')
const school = require('./routes/school')

app.use('/student', student)
app.use('/course', course)
app.use('/school', school)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})