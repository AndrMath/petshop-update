import express from 'express'
import proprietariosController from '../controllers/proprietarios.controller.js'
const router = express.Router()

router.post('/', proprietariosController.newOwner)
router.put('/:id', proprietariosController.editOwner)
router.delete('/:id', proprietariosController.deleteOwner)
router.get('/', proprietariosController.getOwners)
router.get('/:id', proprietariosController.getOwner)

export default router