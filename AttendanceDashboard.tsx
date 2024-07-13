import React, { useState } from 'react';
import { Container, CssBaseline, Grid, Box, Button } from '@mui/material';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { Student } from './types';

const AttendanceDashboard: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: '김도은', isPresent: false },
    { id: 2, name: '몰라', isPresent: false },
    { id: 3, name: '누구', isPresent: false },
  ]);

  const toggleAttendance = (id: number) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, isPresent: !student.isPresent } : student
    ));
  };

  return (
    <Container>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <MainContent students={students} toggleAttendance={toggleAttendance} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AttendanceDashboard;
