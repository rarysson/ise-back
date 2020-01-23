import express from 'express'
import { idebController } from './app/controller/idebController'

const routes = express.Router()

routes.get('/brasil', idebController.brasil)

routes.get('/regiao/:regiao', idebController.regiao)

routes.get('/municipio/:codigomunicipio', idebController.municipio)

routes.get('/escola/:codigoescola', idebController.escola)

routes.get('/escola/melhor/ideb/:codigomunicipio', idebController.melhorescola)

routes.get('/escola/municipio/:codigomunicipio', idebController.escolaMunicipio)

export { routes } 