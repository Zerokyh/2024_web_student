import React, { useState, useEffect, ChangeEvent } from "react";
import "./PassiveCheck.css";
import { format, addDays } from "date-fns";
import axios from "axios";

type Time = {
  attendance: string; 
  leave: string; 
}

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
    name: "김인성",
    school: "반포초등학교",
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

const classes = ["초등학교대비", "중학교대비", "고등학교대비", "수능대비"];







const App: React.FC = () => {
  const [course, setCourse] = useState<string>("");
  const [courseData, setCourseData] = useState<any[]>([]);
  const [students, setStudents] = useState<Student[]>(initialStudents);
  // const [classType, setClassType] = useState<string>(classes[0]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [studentData, setStudentData] = useState<any[]>([]);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [scheduleData, setScheduleData] = useState<any[]>([]);
  const [studentName, setStudentName] = useState<string>("");
  const [attendanceData, setAttendanceData] = useState<{
    [key: string]: Student[];
  }>({});

  // useEffect(() => {
  //   const formattedDate = format(currentDate, "yyyy-MM-dd");
  //   if (attendanceData[formattedDate]) {
  //     setStudents(attendanceData[formattedDate]);
  //   } else {
  //     setStudents(initialStudents);
  //   }
  // }, [currentDate, attendanceData]);
  

  const handleCourse =(event: ChangeEvent<HTMLSelectElement>)=>{
    const selectedCourseId = event.target.value as string;
      setCourse(selectedCourseId);
      axios
        .get(
          `http://localhost:8001/passivecheck_students_list?course_id=${selectedCourseId}`
        )
        .then((response) => {
          sessionStorage.setItem("course_id", selectedCourseId);
          setStudentData(response.data);
          // setScheduleData([]);
        })
        .catch((error) => {
          console.error("수업 데이터를 가져오는 중 오류가 발생했습니다!", error);
        });
    };
  
  //   const findStudent = (student_id: string) => {
  //     setScheduleData([]);
  //     axios
  //       .get(`http://localhost:8001/student_schedule?student_id=${student_id}`)
  //       .then((response) => {
  //         sessionStorage.setItem("student_id", student_id);
  //         setScheduleData(response.data);
  //       })
  //       .catch((error) => {
  //         console.error("학생 데이터를 가져오는 중 오류가 발생했습니다!", error);
  //       });
  //   };
  
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


  // const handleClassChange = (event: ChangeEvent<HTMLSelectElement>) => {
  //   setClassType(event.target.value);
  // };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {

        axios
          .post(
            `http://localhost:8001/passivecheck_search_studentname?student_name=${studentName}`
          )
          .then((response) => {
            sessionStorage.setItem("student_name", studentName);
            setStudentData(response.data);
            // setScheduleData([]);
          })
          .catch((error) => {
            console.error("학생 데이터를 가져오는 중 오류가 발생했습니다!", error);
          });
      };
  //   {
  //   const filteredStudents = initialStudents.filter((student) =>
  //     student.name.includes(searchQuery)
  //   );
  //   setStudents(filteredStudents);
  // };


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
          onChange={(e)=>{setStudentName(e.target.value)}}
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

          {studentData.map((student) => (
            <tr key={student.student_id}>
              <td>{student.student_id}</td>
              <td>
                {student.student_name}
              </td>
              {/* <td>
                <input
                  type="text"
                  value={student.time.attendance}
                  onChange={(e) =>
                    handleChange(student.id, "time", {
                      ...student.time,
                      attendance: e.target.value,
                    })
                  }
                  className="time-input"
                />
              </td>
              <td className="status-buttons">
                {(
                  [
                    "present",
                    "late",
                    "absent",
                    "leave",
                    "earlyLeave",
                    "runaway",
                  ] as StatusField[]
                ).map((statusField) => (
                  <button
                    key={statusField}

                    className={student.status[statusField] ? `active ${statusField}` : ""}

                    onClick={() => handleStatusChange(student.id, statusField)}
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
                ))}
              </td>
              <td>
                <input
                  type="text"
                  value={student.memo}
                  onChange={(e) =>
                    handleChange(student.id, "memo", e.target.value)
                  }
                />
              </td> */}
            </tr>
          ))}
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