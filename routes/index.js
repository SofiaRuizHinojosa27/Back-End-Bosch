const express = require('express')
const ProjectCtrl = require('../controllers/project')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

app.get('/api/project', ProjectCtrl.getProjects)
app.get('/api/project/:projectId', ProjectCtrl.getProject)
app.post('/api/project', ProjectCtrl.saveProject)
app.put('/api/project/:projectId', ProjectCtrl.updateProject)
app.delete('/api/project/:projectId', ProjectCtrl.deleteProject)
// app.get('/api/private', )
// // api.post('/signup', userCtrl.)
// api.get('/api/private', auth, (req,res) => {
//     res.status(200).send({ message: 'Tienes acceso '})
// })

module.exports = api