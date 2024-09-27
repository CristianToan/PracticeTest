const Students = require('../models/students.model');

const allStudents = async () => {
    const all_student = await Students.find()
    return all_student
}

const getStudentById = async (id) => {
    const student = await Students.findById(id);
    return student;
}

const createStudent = async (payload) => {
    const student = await Students.create(payload)
    return student
}

module.exports = {
    allStudents,
    getStudentById,
    createStudent
};
