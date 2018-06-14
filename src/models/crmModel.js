import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName:{
        type: String,
        require: true,
    },
    email:{
        type: String
    },
    company:{
        type: String
    },
    phone:{
        type: Number
    },
    created_date:{
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Contact', ContactSchema);


