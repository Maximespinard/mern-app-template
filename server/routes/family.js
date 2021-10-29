import express from 'express';

import { getFamily } from '../controllers/family.js';

const familyRouter = express.Router();

familyRouter.get('/', getFamily);

export default familyRouter;
