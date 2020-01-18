import express from 'express'
import { idebController } from './app/controller/idebController'

const routes = express.Router()

routes.get('/brasil', idebController.brasil)

routes.get('/regiao/:regiao', idebController.regiao)

export { routes } 