const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const partnerSchema = new Schema({
    name: {
        type: String,
        min: 1,
        max: 25,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;