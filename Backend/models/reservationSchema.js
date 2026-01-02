import mongoose from "mongoose";
import validator from "validator";


const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, 'first name atleast contain 3 character'],
        maxLength: [30, 'first name cannot exceed 30 character']
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, 'last name atleast contain 3 character'],
        maxLength: [30, 'last name cannot exceed 30 character']
    },
    email: {
    type: String,
    required: true,
    validate: [validator.isEmail, 'provide a valid email']
    },
    phone: {
        type: String,
        required: true,     
        minLength: [10, 'Phone number atleast contain 11 digit'],
    },
    time: {
        type: String,
        required :  true,
    },
    date: {
        type: String,
        required :  true,
    },
})

export const reservation = mongoose.model('Reservation', reservationSchema);