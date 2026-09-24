const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        studentId: {
            type: String,
            required: true,
            unique: true
        },

        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        phone: {
            type: String,
            required: true
        },

        dateOfBirth: {
            type: Date,
            required: true
        },

        gender: {
            type: String,
            required: true
        },

        department: {
            type: String,
            required: true
        },

        course: {
            type: String,
            required: true
        },

        year: {
            type: Number,
            required: true
        },

        address: {
            type: String,
            required: true
        },

        admissionDate: {
            type: Date,
            required: true
        },

        status: {
            type: String,
            required: true,
            default: "Active"
        }
    },
    {
        timestamps: true
    }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;