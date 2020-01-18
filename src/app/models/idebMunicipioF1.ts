import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const IdebMunicipioF1Schema = new mongoose.Schema({
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
  collection: 'idebmunicipiof1'
})

IdebMunicipioF1Schema.plugin(mongoosePaginate)

export const IdedMunicipioF1 = mongoose.model('IdebMunicipioF1', IdebMunicipioF1Schema)