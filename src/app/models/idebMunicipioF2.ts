import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const IdebMunicipioF2Schema = new mongoose.Schema({
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
  collection: 'idebmunicipiof2'
})

IdebMunicipioF2Schema.plugin(mongoosePaginate)

export const IdebMunicipioF2 = mongoose.model('IdebMunicipioF2', IdebMunicipioF2Schema)