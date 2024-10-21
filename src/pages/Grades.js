// frontend/src/pages/Grades.js
import React from 'react';

const Grades = () => {
  const grades = [
    { subject: 'Math', grade: 'A' },
    { subject: 'Physics', grade: 'B+' },
    { subject: 'History', grade: 'A-' },
  ];

  return (
    <div>
      <h2>Your Grades</h2>
      <ul>
        {grades.map((item, index) => (
          <li key={index}>
            {item.subject}: {item.grade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grades;