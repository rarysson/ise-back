import { Express } from 'express'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { routes } from '../../routes'

export class App {
  private app: Express

  public constructor() {
    this.app = express()
  }

  public initApp = async () => {
    try {

      this.app.use(cors())
      this.initRoutes()
      this.initMongo()

      const server = this.app.listen(process.env.PORT || 3000)
      console.log(server.address())

    } catch (error) {
      console.log(error)
    }
  }

  private initMongo = async () => {
    try {

      const options: mongoose.ConnectionOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }      
     
      await mongoose.connect('mongodb://infoedu:1324infoedu@ds263808.mlab.com:63808/infoedu', options)

      console.log('Connected to db')

    } catch (error) {
      throw error
    }
  }

  private initRoutes = () => {
    try {
      this.app.use(routes)

    } catch (error) {
      throw error
    }
  }
}
