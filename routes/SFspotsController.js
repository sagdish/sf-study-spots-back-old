const router = require('express').Router();

const Spot = require('../database/SFspotsModel');

router.route('/')
  .get((req, res) => {
    Spot.find()
      .then(spots => {
        res.status(200).json(spots);
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  })
  .post((req, res) => {
    const newSpot = req.body;
    const spot = new Spot(newSpot);

    spot.save()
      .then(spot => {
        res.status(201).json(spot);
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  });

  module.exports = router;