const mongoose = require("mongoose");

const vector = 'VectorBrand';
const nivia = 'NiviaBrand';
const yonex = 'YonexBrand';
const hundred = 'HundredBrand';
const mrf = 'MRFBrand';

const volleyball = 'Volleyball';
const basketball = 'Basketball';
const football = 'Football';
const bat = 'Bat';
const badminton = 'Badminton';

const productSchema = new mongoose. Schema({

name:{
    type: String,
    required: true,
},
price:{
    type: Number,
    required: [true,"price must need"],
},
rating:{
    type: Number,
    default:4.8,
},
featured:{
    type: Boolean,
    default:false,
},
description:{
    type: String,
    required: true,
},

image:{
    type:String,
    default:'demo.jpg',
},
company:{
    type:String,
    enum:{
        values:['vector','nivia','yonex','hundred','mrf'],
        message:`{VALUE} is not support`
    },
},
category:{
    type:String,
    enum:{
        values:['volleyball','basketball','football','bat','badminton'],
        message:`{VALUE} is not support`
    }
}
});

module.exports = mongoose.model('Product',productSchema);