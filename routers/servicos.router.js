import express from 'express'
import servicosController from '../controllers/servicos.controller.js'

const router = express.Router()

router.post('/', servicosController.newServico)
router.get('/', servicosController.getServicos)

export default router