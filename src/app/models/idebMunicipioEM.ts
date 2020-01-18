import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const IdebMunicipioEMSchema = new mongoose.Schema({
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
  IDEB2017: {
    type: Number,
    required: false,
  },

}, {
  collection: 'idebmunicipioem'
})

IdebMunicipioEMSchema.plugin(mongoosePaginate)

export const IdedMunicipioEM = mongoose.model('IdebMunicipioEM', IdebMunicipioEMSchema)