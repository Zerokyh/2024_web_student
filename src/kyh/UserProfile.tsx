import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import axios from "axios";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const [UserData, setUserData] = useState<any[]>([]);
  const userId = sessionStorage.getItem("user_id");
  console.log(userId);
  useEffect(() => {
    axios
      .get(
        `http://studentdb.mysql.database.azure.com:8001/profile?account=${userId}`
      )
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("user 데이터를 가져오는 중 오류가 발생했습니다!", error);
      });
  }, [userId]);
  return (
    <div className="w-full h-studentMaxHight flex justify-center items-center">
      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: 650,
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">계정</TableCell>
              <TableCell align="center">이름</TableCell>
              <TableCell align="center">전화번호</TableCell>
              <TableCell align="center">나이</TableCell>
              <TableCell align="center">주소</TableCell>
              <TableCell align="center">E-mail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {UserData.map((item, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{item.account}</TableCell>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">{item.phone}</TableCell>
                <TableCell align="center">{item.age}</TableCell>
                <TableCell align="center">{item.address}</TableCell>
                <TableCell align="center">{item.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserProfile;
