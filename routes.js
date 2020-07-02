const router = require("express").Router();
const Exercise = require("./models/workout.js");

// router.get("/api/stats", ({ body }, res) => {
//     Exercise.create(body)
//       .then(dbExercise => {
//         res.json(dbExercise);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });




router.post("/api/exercise", ({ body }, res) => {
  Exercise.create(body)
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  Exercise.insertMany(body)
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/stats", (req, res) => {
  Exercise.find({})
    .sort({ date: -1 })
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
