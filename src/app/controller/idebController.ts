import { IdebBrasil } from '../models/idebBrasil'
import { Request, Response, NextFunction } from 'express'
import { IdebRegiao } from '../models/idebRegiao'
import { IdebMunicipioF1 } from '../models/idebMunicipioF1'
import { IdebMunicipioF2 } from '../models/idebMunicipioF2'
import { IdebMunicipioEM } from '../models/idebMunicipioEM'
import { IdebEscolaF2 } from '../models/idebEscolaF2'
import { IdebEscolaF1 } from '../models/idebEscolaF1'
import { IdebEscolaEM } from '../models/idebEscolaEM'

class IdebController {

  public brasil = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const ideb = await IdebBrasil.find({ Rede: 'Total' })

      console.log(ideb)

      res.send(ideb)

    } catch (error) {
      return next(error)
    }
  }

  public regiao = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const ideb = await IdebRegiao.find({ Rede: 'Total', Regiao: req.params.regiao })

      res.send(ideb)

    } catch (error) {
      return next(error)
    }
  }

  public municipio = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const tam = await IdebMunicipioF1.count({ CodigoMunicipio: req.params.codigomunicipio })

      const f1 = await IdebMunicipioF1.aggregate([{ $match: { CodigoMunicipio: req.params.codigomunicipio } }, {
        $group: {
          _id: null, soma2005: { $sum: '$IDEB2005' }, soma2007: { $sum: '$IDEB2007' }, soma2009: { $sum: '$IDEB2009' },
          soma2011: { $sum: '$IDEB2011' }, soma2013: { $sum: '$IDEB2013' }, soma2015: { $sum: '$IDEB2015' }, soma2017: { $sum: '$IDEB2017' },
        }
      }, {
        $project: {
          IDEB2005: { $divide: ['$soma2005', tam] }, IDEB2007: { $divide: ['$soma2007', tam] }, IDEB2009: { $divide: ['$soma2009', tam] },
          IDEB2011: { $divide: ['$soma2011', tam] }, IDEB2013: { $divide: ['$soma2013', tam] }, IDEB2015: { $divide: ['$soma2015', tam] }, IDEB2017: { $divide: ['$soma2017', tam] }
        }
      }
      ])

      const f2 = await IdebMunicipioF2.aggregate([{ $match: { CodigoMunicipio: req.params.codigomunicipio } }, {
        $group: {
          _id: null, soma2005: { $sum: '$IDEB2005' }, soma2007: { $sum: '$IDEB2007' }, soma2009: { $sum: '$IDEB2009' },
          soma2011: { $sum: '$IDEB2011' }, soma2013: { $sum: '$IDEB2013' }, soma2015: { $sum: '$IDEB2015' }, soma2017: { $sum: '$IDEB2017' },
        }
      }, {
        $project: {
          IDEB2005: { $divide: ['$soma2005', tam] }, IDEB2007: { $divide: ['$soma2007', tam] }, IDEB2009: { $divide: ['$soma2009', tam] },
          IDEB2011: { $divide: ['$soma2011', tam] }, IDEB2013: { $divide: ['$soma2013', tam] }, IDEB2015: { $divide: ['$soma2015', tam] }, IDEB2017: { $divide: ['$soma2017', tam] }
        }
      }
      ])

      const em = await IdebMunicipioEM.aggregate([{ $match: { CodigoMunicipio: req.params.codigomunicipio } }, {
        $group: {
          _id: null, soma2017: { $sum: '$IDEB2017' },
        }
      }, {
        $project: {
          IDEB2017: { $divide: ['$soma2017', tam] }
        }
      }
      ])

      res.send({ 'Ensinofundamental1': f1, 'EnsinoFundamental2': f2, 'EnsinoMedio': em })

    } catch (error) {
      return next(error)
    }
  }

  public escola = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const f1 = await IdebEscolaF1.find({ CodigoEscola: req.params.codigoescola })

      const f2 = await IdebEscolaF2.find({ CodigoEscola: req.params.codigoescola })

      const em = await IdebEscolaEM.find({ CodigoEscola: req.params.codigoescola })

      res.send({ 'Ensinofundamental1': f1, 'EnsinoFundamental2': f2, 'EnsinoMedio': em })

    } catch (error) {
      return next(error)
    }
  }

  public melhorescola = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const f1 = await IdebEscolaF1.find({ NomeMunicipio: req.params.municipio }).sort({ IDEB2017: -1 }).limit(1)

      const f2 = await IdebEscolaF2.find({ NomeMunicipio: req.params.municipio }).sort({ IDEB2017: -1 }).limit(1)

      const em = await IdebEscolaEM.find({ NomeMunicipio: req.params.municipio }).sort({ IDEB2017: -1 }).limit(1)

      res.send({ 'Ensinofundamental1': f1, 'EnsinoFundamental2': f2, 'EnsinoMedio': em })

    } catch (error) {
      return next(error)
    }
  }

}

export const idebController = new IdebController()