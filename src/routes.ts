import express from 'express'
import { idebController } from './app/controller/idebController'

const routes = express.Router()

routes.get('/brasil', idebController.brasil)

routes.get('/regiao/:regiao', idebController.regiao)

routes.get('/municipio/:codigomunicipio', idebController.municipio)

routes.get('/escola/:escola', idebController.escola)

routes.get('/escola/melhor/ideb/:municipio', idebController.melhorescola)

export { routes } 