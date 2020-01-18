import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const IdebEscolaF1Schema = new mongoose.Schema({
  UF: {
    type: String,
    required: true,
  },
  CodigoMunicipio: {
    type: Number,
    required: true,
  },
  NomeMunicipio: {
    type: String,
    required: true,
  },
  CodigoEscola: {
    type: Number,
    required: true,
  },
  NomeEscola: {
    type: String,
    required: true,
  },
  Rede: {
    type: String,
    required: true,
  },
  IDEB2005: {
    type: Number,
    required: false,
  },
  IDEB2007: {
    type: Number,
    required: false,
  },
  IDEB2009: {
    type: Number,
    required: false,
  },
  IDEB2011: {
    type: Number,
    required: false,
  },
  IDEB2013: {
    type: Number,
    required: false,
  },
  IDEB2015: {
    type: Number,
    required: false,
  },
  IDEB2017: {
    type: Number,
    required: false,
  },

}, {
  collection: 'idebescolaf1'
})

IdebEscolaF1Schema.plugin(mongoosePaginate)

export const IdebEscolaF1 = mongoose.model('IdebEscolaF1', IdebEscolaF1Schema)