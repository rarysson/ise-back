import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const IdebEscolaEMSchema = new mongoose.Schema({
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
  IDEB2017: {
    type: Number,
    required: false,
  },

}, {
  collection: 'idebescolaem'
})

IdebEscolaEMSchema.plugin(mongoosePaginate)

export const IdedEscolaEM = mongoose.model('IdebEscolaEM', IdebEscolaEMSchema)