// src/components/students/StudentList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // If you want to link to individual student details
import api from '../../services/api'; // Import the API service

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await api.get('/students'); 
        setStudents(response.data);
      } catch (err) {
        setError(err.message || 'Could not fetch students');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []); 

  if (loading) {
    return <div>Loading students...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h3>Student List</h3>
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <ul>
          {students.map(student => (
            <li key={student._id}>
              {student.name} - {student.email}
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;