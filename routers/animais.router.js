import express from 'express'
import animaisController from '../controllers/animais.controller.js'
const router = express.Router()

router.post('/', animaisController.newAnimal)
router.put('/', animaisController.editAnimal)
router.delete('/:id', animaisController.deleteAnimal)
router.get('/', animaisController.getAnimals)
router.get('/:id', animaisController.getanimal)

export default router