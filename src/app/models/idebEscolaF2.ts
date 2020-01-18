import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const IdebEscolaF2Schema = new mongoose.Schema({
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
    required: true,
  },
  IDEB2007: {
    type: Number,
    required: true,
  },
  IDEB2009: {
    type: Number,
    required: true,
  },
  IDEB2011: {
    type: Number,
    required: true,
  },
  IDEB2013: {
    type: Number,
    required: true,
  },
  IDEB2015: {
    type: Number,
    required: true,
  },
  IDEB2017: {
    type: Number,
    required: true,
  },

}, {
  collection: 'idebescolaf2'
})

IdebEscolaF2Schema.plugin(mongoosePaginate)

export const IdedEscolaF2 = mongoose.model('IdebEscolaF2', IdebEscolaF2Schema)