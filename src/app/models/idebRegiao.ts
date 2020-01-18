import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const IdebRegiaoSchema = new mongoose.Schema({
  Regiao: {
    type: String,
    required: true,
  },
  Rede: {
    type: String,
    required: true,
  },
  IDEB2005F1: {
    type: Number,
    required: false,
  },
  IDEB2007F1: {
    type: Number,
    required: false,
  },
  IDEB2009F1: {
    type: Number,
    required: false,
  },
  IDEB2011F1: {
    type: Number,
    required: false,
  },
  IDEB2013F1: {
    type: Number,
    required: false,
  },
  IDEB2015F1: {
    type: Number,
    required: false,
  },
  IDEB2017F1: {
    type: Number,
    required: false,
  },
  IDEB2005F2: {
    type: Number,
    required: false,
  },
  IDEB2007F2: {
    type: Number,
    required: false,
  },
  IDEB2009F2: {
    type: Number,
    required: false,
  },
  IDEB2011F2: {
    type: Number,
    required: false,
  },
  IDEB2013F2: {
    type: Number,
    required: false,
  },
  IDEB2015F2: {
    type: Number,
    required: false,
  },
  IDEB2017F2: {
    type: Number,
    required: false,
  },
  IDEB2005EM: {
    type: Number,
    required: false,
  },
  IDEB2007EM: {
    type: Number,
    required: false,
  },
  IDEB2009EM: {
    type: Number,
    required: false,
  },
  IDEB2011EM: {
    type: Number,
    required: false,
  },
  IDEB2013EM: {
    type: Number,
    required: false,
  },
  IDEB2015EM: {
    type: Number,
    required: false,
  },
  IDEB2017EM: {
    type: Number,
    required: false,
  },

}, {
  collection: 'idebregiao'
})

IdebRegiaoSchema.plugin(mongoosePaginate)

export const IdebRegiao = mongoose.model('IdebRegiao', IdebRegiaoSchema)