import express from 'express'
import { getAll, create } from '../controllers/customerControllers.js'




const router = express.Router()


router.get('/', getAll)

router.post('/customers/new', create )

export default router;