const Student = require('../models/student');


module.exports = {
    getAllStudent: async (req, res) => {
        try {
            const student = await Student.find();
            res.render('index', { student });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    createForm: async (req, res) => {
        
        // res.render('create', {message: flash('message')});
    },

    createFormStore: async (req, res) => {
        const student = new Student(req.body);
        try {
            const data = await student.save();
            res.flash("message", "Data save successfully...");
            res.redirect('/create');
        } catch (err) {
            res.status(400).json({ message: err.message });
        } 
    }


};
