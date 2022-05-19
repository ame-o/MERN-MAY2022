// import model
const {Job} = require("./../models/job.model")


// get all
module.exports.allJobs = (req, res)=>{
    Job.find()
        .then(allJobs => res.json(allJobs))
        .catch(err=>res.status(400).json(err))
}

// get one
module.exports.oneJob = (req, res)=>{
    Job.findOne({_id: req.params.id})
        .then(job=> res.json(job))
        .catch(err=>res.status(400).json(err))
}

// create one
module.exports.createJob = (req, res)=>{
    Job.create(req.body)
        .then(job=>res.json(job))
        .catch(err=>res.status(400).json(err))
}

// update 
module.exports.updateJob = (req, res)=>{
    Job.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true}
        )
        .then(job=>res.json(job))
        .catch(err=>res.status(400).json(err))
}

// delete
module.exports.deleteJob = (req, res)=>{
    Job.findOneAndDelete({_id: req.params.id})
        .then(result=>res.json(result))
        .catch(err=>res.status(400).json(err))
}