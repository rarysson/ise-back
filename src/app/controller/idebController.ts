import { IdebBrasil } from '../models/idebBrasil'
import { Request, Response, NextFunction } from 'express'
import { IdedRegiao } from '../models/idebRegiao'

class IdebController {

  public brasil = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const ideb = await IdebBrasil.find({Rede: 'Total'})

      console.log(ideb)

      res.send(ideb)

    } catch (error) {
      return next(error)
    }
  }

  public regiao = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const ideb = await IdedRegiao.find({Rede: 'Total', Regiao: req.params.regiao})

      res.send(ideb)
      
    } catch (error) {
      return next(error)
    }
  }

}

export const idebController = new IdebController()