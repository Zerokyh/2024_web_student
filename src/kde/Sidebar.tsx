import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // 기본 CSS를 포함해야 합니다.

const timetable = [
  { day: "Monday", time: "9:00 AM - 10:00 AM", subject: "Python" },
  { day: "Monday", time: "10:00 AM - 11:00 AM", subject: "JavaScript" },
  { day: "Tuesday", time: "9:00 AM - 10:00 AM", subject: "React" },
  { day: "Monday", time: "9:00 AM - 10:00 AM", subject: "Spring-Boot" },
  { day: "Monday", time: "10:00 AM - 11:00 AM", subject: "Java" },
  { day: "Tuesday", time: "9:00 AM - 10:00 AM", subject: "HTML" },
  // 더 많은 시간표 데이터를 추가하세요
];

const Sidebar: React.FC = () => {
  return (
    <List component="nav">
      <ListItem>
        <Calendar />
      </ListItem>
      <Divider />
      <ListItem>
        <Typography variant="h6">시간표</Typography>
      </ListItem>
      {timetable.map((item, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={`${item.day} - ${item.time}`}
            secondary={item.subject}
          />
        </ListItem>
      ))}
      <Divider />
      <ListItem button component={Link} to="/another">
        <ListItemText primary="다른 링크" />
      </ListItem>
      <Divider />
    </List>
  );
};

export default Sidebar;
