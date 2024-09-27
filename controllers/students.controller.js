const studentsSercices = require('../services/students.service');
const responseHandlers = require('../helpers/responseHandler');

const allStudents = async (req, res, next) => {
    try {
        const students = await studentsSercices.allStudents()
        responseHandlers.sendJsonSuccess(res, 'success')(students)
    } catch (error) {
        next(error)
    }
}

const getStudentById = async (req, res, next) => {
    try {
        const student = await studentsSercices.getStudentById(req.params.id)
        responseHandlers.sendJsonSuccess(res, 'success')(student)
    } catch (error) {
        next(error)
    }
}

const createStudent = async (req, res, next) => {
    try {
        const student = await studentsSercices.createStudent(req.body)
        responseHandlers.sendJsonSuccess(res,'success', 201)(student)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    allStudents,
    getStudentById,
    createStudent
};