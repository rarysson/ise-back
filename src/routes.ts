import express from 'express'
import { idebController } from './app/controller/idebController'

const routes = express.Router()

routes.get('/', idebController.index)

export { routes } 