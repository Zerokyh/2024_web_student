import React from 'react';
import { ListItem, ListItemText, Button } from '@mui/material';
import { Student as StudentType } from './types';

interface StudentProps {
  student: StudentType;
  toggleAttendance: (id: number) => void;
}

const Student: React.FC<StudentProps> = ({ student, toggleAttendance }) => {
  return (
    <ListItem>
      <ListItemText primary={student.name} />
      <Button variant="contained" color={student.isPresent ? "primary" : "secondary"} onClick={() => toggleAttendance(student.id)}>
        {student.isPresent ? '출석' : '결석'}
      </Button>
    </ListItem>
  );
};

export default Student;
