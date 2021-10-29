import express from 'express';

import Family from '../models/family.js';

const router = express.Router();

export const getFamily = async (req, res) => {
  try {
    const data = await Family.find({});
    res.status(200).json(data)
  } catch (err) {
    res.status(400).send({ message: "Une erreur s'est produite" });
    console.log('err', err);
  }
};

export default router;
