import React, { useState, useEffect, ChangeEvent } from 'react';
import './PassiveCheck.css';
import { format, addDays } from 'date-fns';

type Time = {
  attendanceHour: string;
  attendanceMinute: string;
  leaveHour: string;
  leaveMinute: string;
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
  { id: 1, name: "김인성", school: "반포초등학교", time: { attendanceHour: "", attendanceMinute: "", leaveHour: "", leaveMinute: "" }, status: { present: false, late: false, absent: false, leave: false, earlyLeave: false, runaway: false }, memo: "" },
  { id: 2, name: "이지선", school: "대명초등학교", time: { attendanceHour: "", attendanceMinute: "", leaveHour: "", leaveMinute: "" }, status: { present: false, late: false, absent: false, leave: false, earlyLeave: false, runaway: false }, memo: "" },
  { id: 3, name: "이한명", school: "대유초등학교", time: { attendanceHour: "", attendanceMinute: "", leaveHour: "", leaveMinute: "" }, status: { present: false, late: false, absent: false, leave: false, earlyLeave: false, runaway: false }, memo: "" },
  { id: 4, name: "정보해", school: "양원초등학교", time: { attendanceHour: "", attendanceMinute: "", leaveHour: "", leaveMinute: "" }, status: { present: false, late: false, absent: false, leave: false, earlyLeave: false, runaway: false }, memo: "" },
  { id: 5, name: "홍길동", school: "상일초등학교", time: { attendanceHour: "", attendanceMinute: "", leaveHour: "", leaveMinute: "" }, status: { present: false, late: false, absent: false, leave: false, earlyLeave: false, runaway: false }, memo: "" },
];

const classes = ["초등학교대비", "중학교대비", "고등학교대비", "수능대비"];

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [classType, setClassType] = useState<string>(classes[0]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [attendanceData, setAttendanceData] = useState<{ [key: string]: Student[] }>({});

  useEffect(() => {
    const formattedDate = format(currentDate, 'yyyy-MM-dd');
    if (attendanceData[formattedDate]) {
      setStudents(attendanceData[formattedDate]);
    } else {
      setStudents(initialStudents);
    }
  }, [currentDate, attendanceData]);

  const handleClassChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setClassType(event.target.value);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    const filteredStudents = initialStudents.filter(student => student.name.includes(searchQuery));
    setStudents(filteredStudents);
  };

  const handleDateChange = (days: number) => {
    setCurrentDate(addDays(currentDate, days));
  };

  const handleChange = (id: number, field: keyof Student, value: any) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, [field]: value } : student
    ));
  };

  const handleStatusChange = (id: number, statusField: StatusField) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, status: { ...student.status, [statusField]: !student.status[statusField] } } : student
    ));
  };

  const handleSave = () => {
    const formattedDate = format(currentDate, 'yyyy-MM-dd');
    setAttendanceData({ ...attendanceData, [formattedDate]: students });
    console.log(students);  // You can replace this with actual save logic
  };

  const handleReset = () => {
    setStudents(initialStudents);
  };

  const total = students.length;
  const presentCount = students.filter(student => student.status.present).length;
  const lateCount = students.filter(student => student.status.late).length;
  const absentCount = students.filter(student => student.status.absent).length;

  return (
    <div className="App">
      <h1>학생 출석체크</h1>
      <div className="controls">
        <select value={classType} onChange={handleClassChange}>
          {classes.map((cls, index) => (
            <option key={index} value={cls}>{cls}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="학생 이름을 입력해주세요"
          value={searchQuery}
          onChange={handleSearchChange}
          className="student-search"
        />
        <button onClick={handleSearch}>검색</button>
        <div className="date-controls">
          <button onClick={() => handleDateChange(-1)}>◀</button>
          <span>{format(currentDate, 'yyyy-MM-dd')}</span>
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
            <th>학생 (학교)</th>
            <th>출석시간</th>
            <th>귀가시간</th>
            <th>출결현황</th>
            <th>사유 (메모)</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name} ({student.school})</td>
              <td>
                <input
                  type="text"
                  value={student.time.attendanceHour}
                  onChange={e => handleChange(student.id, 'time', { ...student.time, attendanceHour: e.target.value })}
                  className="time-input"
                />
                :
                <input
                  type="text"
                  value={student.time.attendanceMinute}
                  onChange={e => handleChange(student.id, 'time', { ...student.time, attendanceMinute: e.target.value })}
                  className="time-input"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={student.time.leaveHour}
                  onChange={e => handleChange(student.id, 'time', { ...student.time, leaveHour: e.target.value })}
                  className="time-input"
                />
                :
                <input
                  type="text"
                  value={student.time.leaveMinute}
                  onChange={e => handleChange(student.id, 'time', { ...student.time, leaveMinute: e.target.value })}
                  className="time-input"
                />
              </td>
              <td className="status-buttons">
                {(['present', 'late', 'absent', 'leave', 'earlyLeave', 'runaway'] as StatusField[]).map(statusField => (
                  <button
                    key={statusField}
                    className={student.status[statusField] ? 'active' : ''}
                    onClick={() => handleStatusChange(student.id, statusField)}
                  >
                    {statusField === 'present' ? '출석' :
                     statusField === 'late' ? '지각' :
                     statusField === 'absent' ? '결석' :
                     statusField === 'leave' ? '귀가' :
                     statusField === 'earlyLeave' ? '조퇴' :
                     '도망'}
                  </button>
                ))}
              </td>
              <td>
                <input
                  type="text"
                  value={student.memo}
                  onChange={e => handleChange(student.id, 'memo', e.target.value)}
                />
              </td>
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