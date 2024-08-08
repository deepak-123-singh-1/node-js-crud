const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        age: { type: String },
        address: { type: String }
    },{
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model('students', studentSchema);