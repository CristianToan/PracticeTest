const express = require('express');
const studentsController = require('../../controllers/students.controller')
const router = express.Router();

//1. Get All Students
//http://localhost:8080/api/v1/students/
router.get('',studentsController.allStudents);

//2. Get One Student
//http://localhost:8080/api/v1/students/id
router.get('/:id', studentsController.getStudentById)

//3. Create a new Student
//http://localhost:8080/api/v1/students/
router.post('', studentsController.createStudent)

module.exports = router; 
