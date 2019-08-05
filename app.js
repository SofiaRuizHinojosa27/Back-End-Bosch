const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const ProjectCtrl = require('./controllers/project')

app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

app.get('/api/project', ProjectCtrl.getProjects)
app.get('/api/project/:projectId', ProjectCtrl.getProject)
app.post('/api/project', ProjectCtrl.saveProject)
app.put('/api/project/:projectId', ProjectCtrl.updateProject)
app.delete('/api/project/:projectId', ProjectCtrl.deleteProject)

module.exports = app