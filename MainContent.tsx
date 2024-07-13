
import React from 'react';
import { Box, Typography } from '@mui/material';
import StudentList from './StudentList';
import { Student } from './types';

interface MainContentProps {
  students: Student[];
  toggleAttendance: (id: number) => void;
}

const MainContent: React.FC<MainContentProps> = ({ students, toggleAttendance }) => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        출결 관리
      </Typography>
      <StudentList students={students} toggleAttendance={toggleAttendance} />
    </Box>
  );
};

export default MainContent;
