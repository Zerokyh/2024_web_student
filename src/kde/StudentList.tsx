import React from 'react';
import { List } from '@mui/material';
import Student from './Student';
import { Student as StudentType } from './types';

interface StudentListProps {
  students: StudentType[];
  toggleAttendance: (id: number) => void;
}

const StudentList: React.FC<StudentListProps> = ({ students, toggleAttendance }) => {
  return (
    <List>
      {students.map(student => (
        <Student key={student.id} student={student} toggleAttendance={toggleAttendance} />
      ))}
    </List>
  );
};

export default StudentList;
