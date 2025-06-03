import { useState, useEffect } from "react";
import api from "../../services/api";

function StudentForm({ onStudentAdded, studentToEdit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [grade, setGrade] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (studentToEdit) {
      setName(studentToEdit.name);
      setEmail(studentToEdit.email);
      setDateOfBirth(studentToEdit.dateOfBirth);
      setGrade(studentToEdit.grade || "");
    } else {
      setName("");
      setEmail("");
      setDateOfBirth("");
      setGrade("");
    }
  }, [studentToEdit]);

  const handleSubmit = async (e) => {
    e.preventDeefault();
    const studentData = { name, email, dateOfBirth, grade };
    try {
      if (studentToEdit) {
        await api.put(`/students${studentToEdit._id}`, studentData);
        onStudentAdded();
        alert("Student Successfully Updated");
      } else {
        await api.post("/students", studentData);
        onStudentAdded();
        alert("Student Added Successfully");
      }
      setName("");
      setEmail("");
      setDateOfBirth("");
      setGrade("");
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || "Cpunt not save Student");
    }
  };
  return (
    <div>
      <h3>{studentToEdit ? "Edit Student" : "Add New Student"}</h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Date of Birth:</label>
          <input
            type="text"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div>
          <label>Grade:</label>
          <input
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">
            {studentToEdit ? "Update Student" : "Add Student"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
