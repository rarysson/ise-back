import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const IdebBrasilSchema = new mongoose.Schema({
  Brasil: {
    type: String,
    required: true,
  },
  Rede: {
    type: String,
    required: true,
  },
  IDEB2005F1: {
    type: Number,
    required: true,
  },
  IDEB2007F1: {
    type: Number,
    required: true,
  },
  IDEB2009F1: {
    type: Number,
    required: true,
  },
  IDEB2011F1: {
    type: Number,
    required: true,
  },
  IDEB2013F1: {
    type: Number,
    required: true,
  },
  IDEB2015F1: {
    type: Number,
    required: true,
  },
  IDEB2017F1: {
    type: Number,
    required: true,
  },
  IDEB2005F2: {
    type: Number,
    required: true,
  },
  IDEB2007F2: {
    type: Number,
    required: true,
  },
  IDEB2009F2: {
    type: Number,
    required: true,
  },
  IDEB2011F2: {
    type: Number,
    required: true,
  },
  IDEB2013F2: {
    type: Number,
    required: true,
  },
  IDEB2015F2: {
    type: Number,
    required: true,
  },
  IDEB2017F2: {
    type: Number,
    required: true,
  },
  IDEB2005EM: {
    type: Number,
    required: true,
  },
  IDEB2007EM: {
    type: Number,
    required: true,
  },
  IDEB2009EM: {
    type: Number,
    required: true,
  },
  IDEB2011EM: {
    type: Number,
    required: true,
  },
  IDEB2013EM: {
    type: Number,
    required: true,
  },
  IDEB2015EM: {
    type: Number,
    required: true,
  },
  IDEB2017EM: {
    type: Number,
    required: true,
  },

}, {
  collection: 'IdebBrasil'
})

IdebBrasilSchema.plugin(mongoosePaginate)

export const IdebBrasil = mongoose.model('IdebBrasil', IdebBrasilSchema)