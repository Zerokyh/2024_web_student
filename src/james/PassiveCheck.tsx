import React, { useState, useEffect, ChangeEvent } from "react";
import "./PassiveCheck.css";
import { format, addDays } from "date-fns";
import axios from "axios";

type Time = {
  attendance: string;
  leave: string;
};

type Status = {
  present: boolean;
  late: boolean;
  absent: boolean;
  leave: boolean;
  earlyLeave: boolean;
  runaway: boolean;
};

interface Student {
  id: number;
  name: string;
  school: string;
  time: Time;
  status: Status;
  memo: string;
}

type StatusField = keyof Status;

const initialStudents: Student[] = [
  {
    id: 1,
    name: "",
    school: "",
    time: {
      attendance: "",
      leave: "",
    },
    status: {
      present: false,
      late: false,
      absent: false,
      leave: false,
      earlyLeave: false,
      runaway: false,
    },
    memo: "",
  },
];

const App: React.FC = () => {
  const [course, setCourse] = useState<string>("");
  const [courseData, setCourseData] = useState<any[]>([]);
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [studentData, setStudentData] = useState<any[]>([]);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [studentName, setStudentName] = useState<string>("");
  const [attendanceData, setAttendanceData] = useState<{
    [key: string]: Student[];
  }>({});

  useEffect(() => {
    axios
      .get("http://localhost:8001/course")
      .then((response) => {
        setCourseData(response.data);
      })
      .catch((error) => {
        console.error("course 데이터를 가져오는 중 오류가 발생했습니다!", error);
      });
  }, []);

  const handleCourse = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCourseId = event.target.value as string;
    setCourse(selectedCourseId);
    axios
      .get(
        `http://localhost:8001/passivecheck_students_list?course_id=${selectedCourseId}`
      )
      .then((response) => {
        sessionStorage.setItem("course_id", selectedCourseId);
        const studentsWithTime = response.data.map((student: any) => ({
          ...student,
          time: student.time || { attendance: "", leave: "" }, // time 필드가 없을 경우 기본값 설정
          status: student.status || {
            present: false,
            late: false,
            absent: false,
            leave: false,
            earlyLeave: false,
            runaway: false,
          }, // status 필드가 없을 경우 기본값 설정
        }));
        setStudentData(studentsWithTime);
      })
      .catch((error) => {
        console.error("수업 데이터를 가져오는 중 오류가 발생했습니다!", error);
      });
  };

  const handleSearch = () => {
    axios
      .post(
        `http://localhost:8001/passivecheck_search_studentname?student_name=${studentName}`
      )
      .then((response) => {
        sessionStorage.setItem("student_name", studentName);
        const studentsWithTime = response.data.map((student: any) => ({
          ...student,
          time: student.time || { attendance: "", leave: "" }, // time 필드가 없을 경우 기본값 설정
          status: student.status || {
            present: false,
            late: false,
            absent: false,
            leave: false,
            earlyLeave: false,
            runaway: false,
          }, // status 필드가 없을 경우 기본값 설정
        }));
        setStudentData(studentsWithTime);
      })
      .catch((error) => {
        console.error("학생 데이터를 가져오는 중 오류가 발생했습니다!", error);
      });
  };

  const handleDateChange = (days: number) => {
    setCurrentDate(addDays(currentDate, days));
  };

  const handleChange = (id: number, field: keyof Student, value: any) => {
    setStudents(
      studentData.map((student) =>
        student.id === id ? { ...student, [field]: value } : student
      )
    );
  };

  const handleStatusChange = (id: number, statusField: StatusField) => {
    setStudents(
      studentData.map((student) =>
        student.id === id
          ? {
              ...student,
              status: {
                ...student.status,
                [statusField]: !student.status[statusField],
              },
            }
          : student
      )
    );
  };

  const handleSave = () => {
    const formattedDate = format(currentDate, "yyyy-MM-dd");
    setAttendanceData({ ...attendanceData, [formattedDate]: students });

    console.log(students);
  };

  const handleReset = () => {
    setStudents(initialStudents);
  };

  const total = students.length;
  const presentCount = students.filter(
    (student) => student.status.present
  ).length;
  const lateCount = students.filter((student) => student.status.late).length;
  const absentCount = students.filter(
    (student) => student.status.absent
  ).length;

  return (
    <div className="App">
      <h1>학생 출석체크</h1>
      <div className="controls">
        <select value={course} onChange={handleCourse}>
          {courseData.map((cls) => (
            <option key={cls.course_id} value={cls.course_id}>
              {cls.course_name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="학생 이름을 입력해주세요"
          value={studentName}
          onChange={(e) => {
            setStudentName(e.target.value);
          }}
        />
        <button onClick={handleSearch}>검색</button>
        <div className="date-controls">
          <button onClick={() => handleDateChange(-1)}>◀</button>
          <span>{format(currentDate, "yyyy-MM-dd")}</span>
          <button onClick={() => handleDateChange(1)}>▶</button>
        </div>
      </div>
      <div className="statistics">
        <p className="total">전체: {total}명</p>
        <p className="present">출석: {presentCount}명</p>
        <p className="late">지각: {lateCount}명</p>
        <p className="absent">결석: {absentCount}명</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>학생</th>
            <th>출석시간</th>
            <th>귀가시간</th>
            <th>출결현황</th>
            <th>사유 (메모)</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => {
            const time = student.time || { attendance: "", leave: "" }; // time 필드가 없을 경우 기본값 설정
            return (
              <tr key={student.student_id}>
                <td>{student.student_id}</td>
                <td>{student.student_name}</td>
                <td>
                  <input
                    type="text"
                    value={time.attendance}
                    onChange={(e) =>
                      handleChange(student.student_id, "time", {
                        ...time,
                        attendance: e.target.value,
                      })
                    }
                    className="time-input"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={time.leave}
                    onChange={(e) =>
                      handleChange(student.student_id, "time", {
                        ...time,
                        leave: e.target.value,
                      })
                    }
                    className="time-input"
                  />
                </td>
                <td className="status-buttons">
                  {(["present", "late", "absent", "leave", "earlyLeave", "runaway"] as StatusField[]).map(
                    (statusField) => (
                      <button
                        key={statusField}
                        className={
                          student.status[statusField]
                            ? `active ${statusField}`
                            : ""
                        }
                        onClick={() =>
                          handleStatusChange(student.student_id, statusField)
                        }
                      >
                        {statusField === "present"
                          ? "출석"
                          : statusField === "late"
                          ? "지각"
                          : statusField === "absent"
                          ? "결석"
                          : statusField === "leave"
                          ? "귀가"
                          : statusField === "earlyLeave"
                          ? "조퇴"
                          : "도망"}
                      </button>
                    )
                  )}
                </td>
                <td>
                  <input
                    type="text"
                    value={student.memo}
                    onChange={(e) =>
                      handleChange(student.student_id, "memo", e.target.value)
                    }
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="actions">
        <button onClick={handleSave}>저장</button>
        <button onClick={handleReset}>새로고침</button>
      </div>
    </div>
  );
};

export default App;
