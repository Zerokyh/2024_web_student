import { useState } from "react";
import { LuAlarmClock } from "react-icons/lu";
import Moment from "react-moment";
import QRCode from "react-qr-code";
import { useInterval } from "react-use";

const Qrcode = () => {
  // qr출석체크 누른 순간의 시간
  // const checkTime = new Date();
  // const transTime = <Moment format="HH:mm:ss">{checkTime}</Moment>;
  // const qrcodeValue = transTime.props.children.toLocaleTimeString("it-IT");

  // 현재시간
  const [currentTime, setCurrentTime] = useState(new Date());

  useInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  const transTime = <Moment format="HH:mm:ss">{currentTime}</Moment>;
  const qrcodeValue = transTime.props.children.toLocaleTimeString("it-IT");
  return (
    <>
      <div className="w-full h-studentMaxHight flex flex-col justify-center items-center gap-5 text-nexon">
        <div className="flex text-xl justify-center items-center gap-4">
          <LuAlarmClock />
          현재 출석 시간 : {transTime}
        </div>
        <div>
          <QRCode value={qrcodeValue} />
        </div>
        <div>출석 하는거 까먹지 말고 꼭 해주세요!!! 🤔</div>
      </div>
    </>
  );
};

export default Qrcode;
