const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectSchema = Schema({
    nameProject:String,
    date:String,
    committee:String,
    typeProject:String,
    benefited:String,
    content:String,
    picture:String,
    tags:String 
})

module.exports = mongoose.model('Project', ProjectSchema)