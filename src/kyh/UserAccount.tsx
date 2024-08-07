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

const UserAccount = () => {
  const [userData, setUserData] = useState<any[]>([]);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [checkNewPassword, setCheckNewPassword] = useState("");
  const [isCheckOldPWD, setIsCheckOldPWD] = useState(false);
  const [isCheckNewPWD, setIsCheckNewPWD] = useState(false);
  const userId = sessionStorage.getItem("user_id");
  const userPw = sessionStorage.getItem("user_pw");

  const handleChangePWD = () => {
    if (isCheckOldPWD && isCheckNewPWD) {
      axios
        .post(`http://localhost:8001/account/changepwd`, {
          account: userId,
          newPassword,
        })
        .then((response) => {
          alert(response.data.message);
          sessionStorage.setItem("user_pw", newPassword);
          setOldPassword("");
          setNewPassword("");
          setCheckNewPassword("");
          setIsCheckOldPWD(false);
          setIsCheckNewPWD(false);
        })
        .catch((error) => {
          if (error.response) {
            alert(error.response.data.message);
          } else {
            alert("오류가 발생했습니다.");
          }
        });
    } else {
      alert("비밀번호를 다시 확인해보세요.");
    }
  };

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:8001/account?account=${userId}`)
        .then((response) => {
          setUserData(response.data);
          if (response.data.length > 0) {
            setIsCheckOldPWD(oldPassword === userPw);
          }
        })
        .catch((error) => {
          console.error(
            "헤당 user 데이터를 가져오는 중 오류가 발생했습니다!",
            error
          );
        });
    }
  }, [userId, oldPassword]);

  useEffect(() => {
    setIsCheckNewPWD(newPassword === checkNewPassword);
  }, [newPassword, checkNewPassword]);

  return (
    <div className="w-full h-studentMaxHight flex flex-col justify-center items-center mx-auto gap-10">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">계정</TableCell>
              <TableCell align="center">현재 비밀번호</TableCell>
              <TableCell align="center">변경할 비밀번호</TableCell>
              <TableCell align="center">변경할 비밀번호 재입력</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((item, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell align="center">{item.account}</TableCell>
                <TableCell align="center">
                  <input
                    className="border w-80 px-4 py-3 rounded-full"
                    type="password"
                    placeholder="현재 비밀번호를 입력해주세요"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                  {isCheckOldPWD && (
                    <span className="text-green-500 ml-2">✔️</span>
                  )}
                </TableCell>
                <TableCell align="center">
                  <input
                    className="border w-80 px-4 py-3 rounded-full"
                    type="password"
                    placeholder="변경할 비밀번호를 입력해주세요"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </TableCell>
                <TableCell align="center">
                  <input
                    className="border w-80 px-4 py-3 rounded-full"
                    type="password"
                    placeholder="변경할 비밀번호를 다시 입력해주세요"
                    value={checkNewPassword}
                    onChange={(e) => setCheckNewPassword(e.target.value)}
                  />
                  {isCheckNewPWD && (
                    <span className="text-green-500 ml-2">✔️</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <button
        className={`p-4 rounded-2xl shadow-md ${
          !oldPassword || !isCheckOldPWD || !isCheckNewPWD
            ? "bg-gray-300"
            : "bg-blue-500 text-white"
        }`}
        onClick={handleChangePWD}
        disabled={!oldPassword || !isCheckOldPWD || !isCheckNewPWD}
      >
        비밀번호 변경하기
      </button>
    </div>
  );
};

export default UserAccount;
