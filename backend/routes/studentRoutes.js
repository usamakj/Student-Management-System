//
const expess = require('express');
const router = expess.Router();
const { getStudents, getStudentsByID, createStudent, updateStudent, deleteStudent } = require('../controllers/studentController');

// yahaan par student ke routes define karte hain
router.get('/', getStudents);  // Esa route hai jo sabhi students ki list ko return karega
router.get('/:id', getStudentsByID);  // Yahaan par specific student ka data milega ID ke through
router.post('/', createStudent); // Yahaan par naya student create karne ka route hai
router.put('/:id', updateStudent);  // Yahaan par specific student ko update karne ka route hai ID ke through
router.delete('/:id', deleteStudent); // Yahaan par specific student ko delete karne ka route hai ID ke through


module.exports = router;  // Yahaan par humne student ke routes ko define kiya hai jo controller functions ko call karte hain
// Aur ab hum is file ko export kar rahe hain taaki baaki application mein use kiya ja sake