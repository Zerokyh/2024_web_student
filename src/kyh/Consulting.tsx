import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Consulting = () => {
  const [StudentData, setStudentData] = useState<any[]>([]);
  const [Course, setCourse] = useState<string>("");
  const [CourseData, setCourseData] = useState<any[]>([]);
  const [scheduleData, setScheduleData] = useState<any[]>([]);

  const handleChange = (event: SelectChangeEvent) => {
    const selectedCourseId = event.target.value as string;
    setCourse(selectedCourseId);
    sessionStorage.removeItem("student_id");
    axios
      .get(
        `http://localhost:8001/consulting_students_list?course_id=${selectedCourseId}`
      )
      .then((response) => {
        sessionStorage.setItem("course_id", selectedCourseId);
        setStudentData(response.data);
        setScheduleData([]);
      })
      .catch((error) => {
        console.error("수업 데이터를 가져오는 중 오류가 발생했습니다!", error);
      });
  };

  const findStudent = (student_id: string) => {
    setScheduleData([]);
    axios
      .get(`http://localhost:8001/student_schedule?student_id=${student_id}`)
      .then((response) => {
        sessionStorage.setItem("student_id", student_id);
        setScheduleData(response.data);
      })
      .catch((error) => {
        console.error("학생 데이터를 가져오는 중 오류가 발생했습니다!", error);
      });
  };

  // 반 선택시 해당 course 데이터 받기
  useEffect(() => {
    axios
      .get("http://localhost:8001/course")
      .then((response) => {
        setCourseData(response.data);
      })
      .catch((error) => {
        console.error(
          "course 데이터를 가져오는 중 오류가 발생했습니다!",
          error
        );
      });
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center gap-10">
      <div className="border w-80 h-studentMaxHight">
        <div className="w-full h-full flex flex-col list-none justify-center items-center gap-3">
          <div className="w-full flex justify-around text-xs items-center">
            <li className="w-16 text-center">수업</li>
            <li className="w-10 text-center">강사</li>
            <li className="w-14 text-center">수강기간</li>
            <li className="w-14 text-center">수업시간</li>
          </div>
          <div className="w-full flex list-none justify-around">
            <ul className="w-full flex flex-col gap-2">
              {scheduleData.length > 0 ? (
                scheduleData.map((item) => (
                  <li
                    key={item.student_id}
                    className="w-full flex justify-around items-center text-center cursor-pointer hover:bg-slate-100 text-xs"
                  >
                    <span className="w-16 text-center">{item.course_name}</span>
                    <span className="w-10 text-center">{item.name}</span>
                    <span className="w-14 text-center">
                      {item.course_duration}일
                    </span>
                    <span className="w-14 text-center">{item.course_time}</span>
                  </li>
                ))
              ) : (
                <li className="w-full text-center">학생을 선택하세요 😐</li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-studentMaxWidthRight h-studentMaxHight gap-2">
        <div className="w-60">
          <FormControl fullWidth>
            <InputLabel id="select-course-label">Course</InputLabel>
            <Select
              labelId="select-course-label"
              id="select_Course"
              value={Course}
              label="Course"
              onChange={handleChange}
            >
              {CourseData.map((item) => (
                <MenuItem key={item.course_id} value={item.course_id}>
                  {item.course_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="border h-studentMediumHight px-2 py-2 overflow-y-scroll">
          <span>학생 리스트</span>
          <div className="flex list-none justify-around text-center">
            <li className="w-20">학생ID</li>
            <li className="w-20">이름</li>
            <li className="w-20">성적</li>
            <li className="w-20">출석률</li>
            <li className="w-20">상담여부</li>
          </div>
          <div className="w-full flex list-none justify-around">
            <ul className="w-full">
              {StudentData.map((item, index) => (
                <li
                  key={index}
                  onClick={() => findStudent(item.student_id)}
                  className="w-full flex justify-around text-center cursor-pointer hover:bg-slate-100"
                >
                  <span className="w-20">{item.student_id}</span>
                  <span className="w-20">{item.student_name}</span>
                  <span className="w-20">{item.grade}</span>
                  <span className="w-20">{item.attendance_rate}%</span>
                  <span className="w-20">
                    {!item.counselingstatus ? "상담완료" : "상담필요"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border h-studentLowHight px-2 py-2 flex flex-col gap-2 overflow-y-scroll">
          {scheduleData.map((item) => (
            <div className="flex flex-col border-b-2">
              <div>수업 : {item.course_name}</div>
              <div>담당 선생님 : {item.name}</div>
              <div>평가 : {item.student_assessment}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Consulting;
