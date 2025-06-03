const Student = require('../models/Student');


const getStudents = async (req, res) => {  // sabhi students ke record ko laane ke liye controller function 
    try {
        const students = await Student.find();  // ya sabhi students ke record la raha hai
        res.json(students);  // sabhi students ke record ko json format me bhej raha hai

    } catch (error) {
        console.log('student ke recoard nahi mile', error);
        res.status(500).send('Server Error');  // ya error aane par server error ka response bhej raha hai

    }
};



// is controller function ka use karke hum ek student ke record ko id ke through la sakte hain
const getStudentsByID = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);  // ya student ke id ka hasab  se uska record hama daa ga

        if (!student) {
            return res.status(404).json({ msg: 'Student not found' }); // agar student nahi mila to 404 ka response bhej raha hai
        }
        res.json(student); // agar student mila to uska record json format me bhej raha hai
    }
    catch (error) {
        console.log('student ke recoard nahi mile', error);


        res.status(404).json({ msg: 'Student not found' })

        if (error.kind === 'ObjectId') {
            return console.log('Invalid student ID'); // agar id invalid hai to console me error message de ga
        }
        res.status(404).send('Server ma error a gaya hai'); // agar server me error aaya to 404 ka response bhej raha hai
    }
};



// is controller function ka use karke hum ek student ke record ko update kar sakte hain
const createStudent = async (req, res) => {
    try {
        const newStudent = new Student(req.body);  // ya naya student ka record ko create kar raha hai jo ki request  body se aata hai
        await newStudent.save();    // naya student ka record save kar raha hai
        res.status(201).json(newStudent); // ya naya student ka record create hone par 201 ka response bhej raha hai

    } catch (error) {
        console.log('student ka record create nahi hua hai');
        res.status(500).send('Server ma error a gaya hai'); // agar server me error aaya to 500 ka response bhej raha hai

    }
};


const updateStudent = async (req, res) => {  // is controller function ka use karke hum ek student ke record ko update kar sakte hain
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true,  // ya student ke record ko update kar raha hai aur naya record return kar raha hai
            runValidators: true  // ya student ke record ko update karte waqt validation check kar raha hai
        })

        if (!student) {
            return res.status(404).json({ msg: 'Student ka record nahi mila' }); // agar student ka record nahi mila to 404 ka response bhej raha hai
        }
        res.json(student); // agar student ka record mila to uska record json format me bhej raha hai

    } catch (error) {
        console.log('Student ka record update nahi hua hai', error);  // agar student ka record update nahi hua to console me error message de raha hai
        res.status(500).send('Server ma error a gaya hai');           // agar server me error aaya to 500 ka response bhej raha hai

    }
}


const deleteStudent = async (reg, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);  // ya student ke record ko delete kar raha hai

        if (!student) {
            return res.status(404).json({ msg: 'Student ka record nahi mila hai' })
        }
        res.json({ msg: 'Student ka record delete ho gaya hai' }); // agar student ka record delete ho gaya to success ka message bhej raha hai

    } catch (error) {
        console.log('Student ka record delete nahi hua hai ', error);  // agar student ka record delete nahi hua to console me error message de raha hai
        res.status(500).send('Server ma error a gaya hai'); // agar server me error aaya to 500 ka response bhej raha hai
    }

}


module.exports = {  // is file me sabhi controller functions ko export kar raha hai taaki dusre files me use kiya ja sake
    getStudents,
    getStudentsByID,
    createStudent,
    updateStudent,
    deleteStudent,
};