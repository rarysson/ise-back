import mongoose from 'mongoose'
import { IdebBrasil } from '../models/idebBrasil'
import { Request, Response, NextFunction } from 'express'

class IdebController {

  public index = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const ideb = await IdebBrasil.find({Rede: 'Total'})

      console.log(ideb)

      res.send(ideb)

    } catch (error) {
      return next(error)
    }
  }

}

export const idebController = new IdebController()