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
  const [data, setData] = useState<any[]>([]);
  const [Course, setCourse] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCourse(event.target.value as string);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8001/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center gap-10">
      <div className="border w-80 h-studentMaxHight">
        <div className="w-full h-full flex flex-col list-none justify-center items-center">
          <div>학생을 선택하세요 😐</div>
          <div className="w-full flex justify-evenly text-xs">
            <li>수업</li>
            <li>강사</li>
            <li>수강기간</li>
            <li>수업시간</li>
            <li>상태</li>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-studentMaxWidthRight h-studentMaxHight">
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
              <MenuItem value={10}>Python 반</MenuItem>
              <MenuItem value={20}>Java 반</MenuItem>
              <MenuItem value={30}>웹 개발반</MenuItem>
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
            <li className="w-20">상담일자</li>
          </div>
          <div className="w-full flex list-none justify-around">
            <ul className="w-full">
              {data.map((item, index) => (
                <li
                  key={index}
                  className="w-full flex justify-around text-center"
                >
                  <span className="w-20">{item.id}</span>
                  <span className="w-20">{item.name}</span>
                  <span className="w-20">{item.phone}</span>
                  <span className="w-20">{item.address}</span>
                  <span className="w-20">{item.address}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border h-studentLowHight px-2 py-2 flex flex-col gap-2">
          <div>담당 선생님 : 홍길동</div>
          <div>이 학생은 집중력이 몹시 떨어짐</div>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
