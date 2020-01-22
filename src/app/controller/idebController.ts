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
          IDEB2005: { $divide: ['$soma2005', '$soma'] }, IDEB2007: { $divide: ['$soma2007', '$soma'] }, IDEB2009: { $divide: ['$soma2009', '$soma'] },
          IDEB2011: { $divide: ['$soma2011', '$soma'] }, IDEB2013: { $divide: ['$soma2013', '$soma'] }, IDEB2015: { $divide: ['$soma2015', '$soma'] }, IDEB2017: { $divide: ['$soma2017', '$soma'] }
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
          IDEB2005: { $divide: ['$soma2005', '$soma'] }, IDEB2007: { $divide: ['$soma2007', '$soma'] }, IDEB2009: { $divide: ['$soma2009', '$soma'] },
          IDEB2011: { $divide: ['$soma2011', '$soma'] }, IDEB2013: { $divide: ['$soma2013', '$soma'] }, IDEB2015: { $divide: ['$soma2015', '$soma'] }, IDEB2017: { $divide: ['$soma2017', '$soma'] }
        }
      }
      ])

      const em = await IdebMunicipioEM.aggregate([{ $match: { CodigoMunicipio: Number(req.params.codigomunicipio) } }, {
        $group: {
          _id: null, soma2017: { $sum: '$IDEB2017' }, soma: { $sum: 1},
        }
      }, {
        $project: {
          IDEB2017: { $divide: ['$soma2017', '$soma'] }
        }
      }
      ])

      console.log(em)

      res.send({ 'Ensinofundamental1': f1, 'EnsinoFundamental2': f2, 'EnsinoMedio': em })

    } catch (error) {
      return next(error)
    }
  }

  public municipioNome = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const f1 = await IdebMunicipioF1.aggregate([{ $match: { NomeMunicipio: {$regex: req.params.municipio } } }, {
        $group: {
          _id: null, soma2005: { $sum: '$IDEB2005' }, soma2007: { $sum: '$IDEB2007' }, soma2009: { $sum: '$IDEB2009' },
          soma2011: { $sum: '$IDEB2011' }, soma2013: { $sum: '$IDEB2013' }, soma2015: { $sum: '$IDEB2015' }, soma2017: { $sum: '$IDEB2017' }, soma: { $sum: 1}
        }
      }, {
        $project: {
          IDEB2005: { $divide: ['$soma2005', '$soma'] }, IDEB2007: { $divide: ['$soma2007', '$soma'] }, IDEB2009: { $divide: ['$soma2009', '$soma'] },
          IDEB2011: { $divide: ['$soma2011', '$soma'] }, IDEB2013: { $divide: ['$soma2013', '$soma'] }, IDEB2015: { $divide: ['$soma2015', '$soma'] }, IDEB2017: { $divide: ['$soma2017', '$soma'] }
        }
      }
      ])

      const f2 = await IdebMunicipioF2.aggregate([{ $match: { NomeMunicipio: {$regex: req.params.municipio } } }, {
        $group: {
          _id: null, soma2005: { $sum: '$IDEB2005' }, soma2007: { $sum: '$IDEB2007' }, soma2009: { $sum: '$IDEB2009' },
          soma2011: { $sum: '$IDEB2011' }, soma2013: { $sum: '$IDEB2013' }, soma2015: { $sum: '$IDEB2015' }, soma2017: { $sum: '$IDEB2017' }, soma: { $sum: 1}
        }
      }, {
        $project: {
          IDEB2005: { $divide: ['$soma2005', '$soma'] }, IDEB2007: { $divide: ['$soma2007', '$soma'] }, IDEB2009: { $divide: ['$soma2009', '$soma'] },
          IDEB2011: { $divide: ['$soma2011', '$soma'] }, IDEB2013: { $divide: ['$soma2013', '$soma'] }, IDEB2015: { $divide: ['$soma2015', '$soma'] }, IDEB2017: { $divide: ['$soma2017', '$soma'] }
        }
      }
      ])

      const em = await IdebMunicipioEM.aggregate([{ $match: { NomeMunicipio: {$regex: req.params.municipio } } }, {
        $group: {
          _id: null, soma2017: { $sum: '$IDEB2017' }, soma: { $sum: 1}
        }
      }, {
        $project: {
          IDEB2017: { $divide: ['$soma2017', '$soma'] }
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

      const f1 = await IdebEscolaF1.find({ NomeEscola: {$regex: req.params.escola } })

      const f2 = await IdebEscolaF2.find({ NomeEscola: {$regex: req.params.escola } })

      const em = await IdebEscolaEM.find({ NomeEscola: {$regex: req.params.escola } })

      res.send({ 'Ensinofundamental1': f1, 'EnsinoFundamental2': f2, 'EnsinoMedio': em })

    } catch (error) {
      return next(error)
    }
  }

  public melhorescola = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const f1 = await IdebEscolaF1.find({ NomeMunicipio: {$regex: req.params.municipio } }).sort({ IDEB2017: -1 }).limit(1)

      const f2 = await IdebEscolaF2.find({ NomeMunicipio: {$regex: req.params.municipio } }).sort({ IDEB2017: -1 }).limit(1)

      const em = await IdebEscolaEM.find({ NomeMunicipio: {$regex: req.params.municipio } }).sort({ IDEB2017: -1 }).limit(1)

      res.send({ 'Ensinofundamental1': f1, 'EnsinoFundamental2': f2, 'EnsinoMedio': em })

    } catch (error) {
      return next(error)
    }
  }

}

export const idebController = new IdebController()