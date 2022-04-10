const mongoose = require('mongoose');

const ProductDetailsSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        default: "Przedmiot"
    },
    category: {
        type: String,
        required: true,
        default: "Przedmiot"
    },
    description: {
        type: String,
        required: true,
        default: "Opis"
    },
    price:{
        type: Number,
        required: true,
        default: 0
    },
    matter:{
        type: String,
        required: true,
        default: "Materiał"
    },
    assay:{
        type: Number,
        require: true,
        default: 0
    },
    size:{
        type: Number,
        require: true,
        default: 0
    },
    brand:{
        type: String,
        require: true,
        default: "Marka"
    },
    sex:{
        type: String,
        require: true,
        default: "Płeć"
    },
    img:{
        type: String,
        required: true,
        default: "https://www.parfois.com/dw/image/v2/BBKR_PRD/on/demandware.static/-/Sites-parfois-master-catalog/default/dw80180089/images/hi-res/212/52/183050_DM_1yf.jpg?sw=679&q=90"
    },
    quantity:{
        type: Number,
        require: true,
        default: 0
    },
    rating:{
        type: Number,
        required: true,
        default: 4.0
    },
    ratingCount:{
      type: Number,
      required: true,
      default: 5
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('ProductDetails', ProductDetailsSchema);
