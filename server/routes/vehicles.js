const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');

router.get('/:id', async (req, res) => {
  try
  {
    const vehicle = await Vehicle.findById(req.params.id);
    res.status(200)
       .json(vehicle);
  }
  catch (err)
  {
    res.json({ message: err });
  }
});

router.get('/', async (req, res) => {
  try
  {
    const vehicles = await Vehicle.find();
    res.status(200)
       .json(vehicles);
  }
  catch (err)
  {
    res.json({ message: err });
  }
});

router.post('/', async (req, res) => {

  const vehicle = new Vehicle({
    make: req.body.make,
    model: req.body.model,
    year: req.body.year
  });

  try
  {
    const data = await vehicle.save();
    res.status(201)
       .json(data);
  }
  catch (err)
  {
    res.json({ message: err });
  }
});

router.patch('/:id', async (req, res) => {
  try
  {
    res.status(200)
      .json({ message: `id ${req.params.id} patched!` });
  }
  catch (err)
  {
    res.json({ message: err });
  }
});

router.delete('/:id', async (req, res) => {
  try
  {
    const vehicle = await Vehicle.deleteOne({
      _id: req.params.id
    });
    res.status(200)
       .json(vehicle);
  }
  catch (err)
  {
    res.json({ message: err });
  }
});

module.exports = router;