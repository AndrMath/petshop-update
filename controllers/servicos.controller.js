import servicosServices from "../services/servicos.services.js";

async function newServico(req, res, next){
  try{
    const servico = req.body
    if(!servico.descricao || !servico.valor || !servico.animalId){
      throw new Error('Insira todas as informações')
    }
    res.status(200).send(await servicosServices.newServico(servico))
  }catch(err){
    next(err)
  }
}

async function getServicos(req, res, next){
  try{
    res.status(200).send(await servicosServices.getServicos())
  }catch(err){
    next(err)
  }
}

export default {newServico, getServicos}