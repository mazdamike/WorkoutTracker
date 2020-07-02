// Already mouinted on /api

const router = require('express').Router()
const Workout = require('./models')
//^^This may need to be tweaked




router.post('/api/workouts', (req, res) => {
   // const objectToCreate = req.body
   // Workout.create(objectToCreate)
   //take whatever is on the request object
})


// /exercise/workout/whatever --> serve html docs