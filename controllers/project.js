const Project = require('../models/project')

function getProject(req,res){
    let projectId = req.params.projectId

    Project.findById(projectId, (err,project) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}`})
        if (!project) return res.status(404).send({ message: `El projecto no existe`})

        res.status(200).send({ project })
    })
}

function getProjects(req,res){
    Project.find({},(err, projects) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}`})
        if (!projects) return res.status(404).send({ message: `No existe projectos`})

        res.send(200, { projects })
    })
}

function saveProject(req, res){
    console.log('POST/api/project')
    console.log(req.body)

    let project = new Project()
    project.nameProject = req.body.nameProject
    project.date = req.body.date 
    project.committee = req.body.committee
    project.typeProject = req.body.typeProject
    project.benefited = req.body.benefited
    project.content = req.body.content
    project.picture = req.body.picture
    project.tags = req.body.tags

    project.save((err, projectStored) => {
        if (err) res.status(500).send({message:'error'})
        res.status(200).send({project: projectStored})
    })
}

function updateProject(req, res){
    let projectId = req.params.projecttId
    let update = req.body

    Project.findByIdAndUpdate(projectId, update, (err, projectUpdated) => {
        if (err) res.status(500).send({message:`Error al actualizar projecto: ${err}`})

        res.status(200).send({ project: projectUpdated})
    })
}

function deleteProject(req, res){
    let projectId = req.params.projectId

    Project.findById(projectId,(err, project) => {
        if (err) res.status(500).send({message:`Error al borrar projecto: ${err}`})

        project.remove(err => {
            if (err) res.status(500).send({message:`Error al borrar projecto: ${err}`})
            res.status(200).send( {message: `El projecto ha sido borrado`})
        })
    })
}

module.exports = {
    getProject,
    getProjects,
    saveProject,
    updateProject,
    deleteProject
}