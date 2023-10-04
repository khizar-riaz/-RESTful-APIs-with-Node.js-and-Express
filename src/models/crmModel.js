import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
     type: String,
     required: 'Enter first name'
    },
    lastName: {
        type: String,
        required: 'Enter last name'
       },
       company: {
        type: String
       },
       email: {
        type: String
       },
       email: {
        type: Number
       },
       created_date: {
        type: Date,
        default: Date.now
       }
})
