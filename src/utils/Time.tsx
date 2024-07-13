import { useState } from "react";
import Moment from "react-moment";
import { useInterval } from "react-use";

const Time = () => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useInterval(() => {
    setCurrentTime(Date.now());
  }, 1000);

  return (
    <Moment format="HH:mm:ss" className="text-center">
      {currentTime}
    </Moment>
  );
};

export default Time;
