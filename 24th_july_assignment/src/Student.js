import { useState } from 'react';

function Student() {
  function addStudent() {
    if (name && age) {
      const newStudent = { name, age: parseInt(age) };
      setStudents([...students, newStudent]);
      setName('');
      setAge('');
    }
  }

  function deleteStudent(index) {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  }

  function clearStudents() {
    setStudents([]);
  }

  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <div>

      <div>
        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter student age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} ({student.age} years old)
            <button onClick={() => deleteStudent(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={clearStudents}>Clear All Students</button>
    </div>
  );
}

export default Student;
