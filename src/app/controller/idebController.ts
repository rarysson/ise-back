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

      res.send(ideb)

    } catch (error) {
      return next(error)
    }
  }

  public regiao = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const ideb = await IdebRegiao.find({ Rede: 'Total', Regiao: {$regex: req.params.regiao } })

      res.send(ideb)

    } catch (error) {
      return next(error)
    }
  }

  public municipio = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const f1 = await IdebMunicipioF1.aggregate([{ $match: { CodigoMunicipio: Number(req.params.codigomunicipio) } }, {
        $group: {
          _id: null, soma2005: { $sum: '$IDEB2005' }, soma2007: { $sum: '$IDEB2007' }, soma2009: { $sum: '$IDEB2009' },
          soma2011: { $sum: '$IDEB2011' }, soma2013: { $sum: '$IDEB2013' }, soma2015: { $sum: '$IDEB2015' }, soma2017: { $sum: '$IDEB2017' }, soma: { $sum: 1},
        }
      }, {
        $project: {
          IDEB2005F1: { $divide: ['$soma2005', '$soma'] }, IDEB2007F1: { $divide: ['$soma2007', '$soma'] }, IDEB2009F1: { $divide: ['$soma2009', '$soma'] },
          IDEB2011F1: { $divide: ['$soma2011', '$soma'] }, IDEB2013F1: { $divide: ['$soma2013', '$soma'] }, IDEB2015F1: { $divide: ['$soma2015', '$soma'] }, IDEB2017F1: { $divide: ['$soma2017', '$soma'] }
        }
      }
      ])

      const f2 = await IdebMunicipioF2.aggregate([{ $match: { CodigoMunicipio: Number(req.params.codigomunicipio) } }, {
        $group: {
          _id: null, soma2005: { $sum: '$IDEB2005' }, soma2007: { $sum: '$IDEB2007' }, soma2009: { $sum: '$IDEB2009' },
          soma2011: { $sum: '$IDEB2011' }, soma2013: { $sum: '$IDEB2013' }, soma2015: { $sum: '$IDEB2015' }, soma2017: { $sum: '$IDEB2017' },soma: { $sum: 1},
        }
      }, {
        $project: {
          IDEB2005F2: { $divide: ['$soma2005', '$soma'] }, IDEB2007F2: { $divide: ['$soma2007', '$soma'] }, IDEB2009F2: { $divide: ['$soma2009', '$soma'] },
          IDEB2011F2: { $divide: ['$soma2011', '$soma'] }, IDEB2013F2: { $divide: ['$soma2013', '$soma'] }, IDEB2015F2: { $divide: ['$soma2015', '$soma'] }, IDEB2017F2: { $divide: ['$soma2017', '$soma'] }
        }
      }
      ])

      const em = await IdebMunicipioEM.aggregate([{ $match: { CodigoMunicipio: Number(req.params.codigomunicipio) } }, {
        $group: {
          _id: null, soma2017: { $sum: '$IDEB2017' }, soma: { $sum: 1},
        }
      }, {
        $project: {
          IDEB2017EM: { $divide: ['$soma2017', '$soma'] }
        }
      }
      ])

      const final = Object.assign(Object.assign(f1[0], f2[0]), em[0])

      res.send( final )

    } catch (error) {
      return next(error)
    }
  }

  public escolaMunicipio = async (req: Request, res: Response, next: NextFunction) => {
    try {
      
      const f1 = await IdebEscolaF1.find({CodigoMunicipio: Number(req.params.codigomunicipio) }, {_id: 0, CodigoEscola: 1, NomeEscola: 1})

      const f2 = await IdebEscolaF2.find({CodigoMunicipio: Number(req.params.codigomunicipio) }, {_id: 0, CodigoEscola: 1, NomeEscola: 1})

      const em = await IdebEscolaEM.find({CodigoMunicipio: Number(req.params.codigomunicipio) }, {_id: 0, CodigoEscola: 1, NomeEscola: 1})

      const final = Object.assign(Object.assign(f1, f2), em)

      res.send( final )

    } catch (error) {
      return next(error)
    }
  } 

  public escola = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const f1 = await IdebEscolaF1.aggregate([{ $match: { CodigoEscola: Number(req.params.codigoescola) } }, {
        $group: {
          _id: null, IDEB2005F1: { $sum: '$IDEB2005F1' }, IDEB2007F1: { $sum: '$IDEB2007F1' }, IDEB2009F1: { $sum: '$IDEB2009F1' },
          IDEB2011F1: { $sum: '$IDEB2011F1' }, IDEB2013F1: { $sum: '$IDEB2013F1' }, IDEB2015F1: { $sum: '$IDEB2015F1' }, IDEB2017F1: { $sum: '$IDEB2017F1' }
        }
      }])

      const f2 = await IdebEscolaF2.aggregate([{ $match: { CodigoEscola: Number(req.params.codigoescola) } }, {
        $group: {
          _id: null, IDEB2005F2: { $sum: '$IDEB2005F2' }, IDEB2007F2: { $sum: '$IDEB2007F2' }, IDEB2009F2: { $sum: '$IDEB2009F2' },
          IDEB2011F2: { $sum: '$IDEB2011F2' }, IDEB2013F2: { $sum: '$IDEB2013F2' }, IDEB2015F2: { $sum: '$IDEB2015F2' }, IDEB2017F2: { $sum: '$IDEB2017F2' }
        }
      }])

      const em = await IdebEscolaEM.aggregate([{ $match: { CodigoEscola: Number(req.params.codigoescola) } }, {
        $group: {
          _id: null, IDEB2017EM: { $sum: '$IDEB2017EM' },
        }
      }])

      const final = Object.assign(Object.assign(f1[0] || {}, f2[0] || {}), em[0] || {})

      res.send( final )

    } catch (error) {
      return next(error)
    }
  }

  public melhorescola = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const f1 = await IdebEscolaF1.find({ CodigoMunicipio: Number(req.params.codigomunicipio) }).sort({ IDEB2017F1: -1 }).limit(1)

      const f2 = await IdebEscolaF2.find({ CodigoMunicipio: Number(req.params.codigomunicipio) }).sort({ IDEB2017F2: -1 }).limit(1)

      const em = await IdebEscolaEM.find({ CodigoMunicipio: Number(req.params.codigomunicipio) }).sort({ IDEB2017EM: -1 }).limit(1)

      res.send( { 'Ensino Fundamental 1': f1, 'Ensino Fundamental 2': f2, 'Ensino Medio': em } )

    } catch (error) {
      return next(error)
    }
  }

}

export const idebController = new IdebController()