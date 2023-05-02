import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsArrowLeftCircleFill, BsFillCameraVideoFill } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "flatpickr/dist/themes/material_blue.css";
import "../assets/calendar.css";
import profile from "../assets/images/profile.jpg";
import "react-calendar/dist/Calendar.css";
import {
  setdate,
  setday,
  setmonth,
  settimecountry,
  settimezone,
  setcountryhour,
} from "../redux/slice/calSlice";
import { twentyFourHrFormat } from "../utils/Timeformat";
import { twelveHrFormat } from "../utils/Timeformat";
import { settimebtn } from "../redux/slice/timehandlerSlice";

const Calmain = () => {
  const dispatch = useDispatch();

  const { path } = useParams();

  const [timeToggle, settimeToggle] = useState(false);

  const [timeStamp, setTimestamp] = useState(false);
  const countryhour = useSelector((state) => state.CalendarSlice.countryhour);

  const displayright = () => {
    setTimestamp(true);
  };
  const dates = useSelector((state) => state.CalendarSlice.date);
  console.log(dates);
  const calendardate = new Date(dates);

  //   const dateString = dates.toLocaleDateString();
  const [newDimensionArray, setnewDimensionArray] = useState(null);
  const currentDate = new Date();
  useEffect(() => {
    const calendardate = new Date(dates);
    const val = calendardate.getDay();
    const month = calendardate.getMonth();
    console.log(val, month);
    console.log(currentDate.getDate(), currentDate.getMonth());
    // function convertTo12HrFormat(times) {
    //   const result = [];
    //   for (let i = 0; i < times.length; i++) {
    //     const time = times[i];
    //     const [hour, minute] = time.split(":");
    //     let formattedHour = hour % 12 || 12;
    //     const formattedTime = `${formattedHour}:${minute} ${
    //       hour >= 12 ? "PM" : "AM"
    //     }`;
    //     result.push(formattedTime);
    //   }
    //   return result;
    // }
    if (
      dates !== "" &&
      currentDate.getDay() === val &&
      currentDate.getMonth() === month
    ) {
      setnewDimensionArray(
        twentyFourHrFormat.thirty.filter((item) => {
          console.log(countryhour);
          return parseInt(item) > countryhour + 1;
        })
      );
      // path=== "15minutes"&&setnewDimensionArray(
      //   twentyFourHrFormat.fifteen.filter((item) => {
      //     console.log(countryhour);
      //     return parseInt(item) > countryhour + 1;
      //   })
      // );
    } else {
      setnewDimensionArray(null);
    }
    console.log(newDimensionArray);

    // eslint-disable-next-line
  }, [dates]);
  console.log(newDimensionArray);

  const current = new Date();
  console.log(current.getHours());
  const holiday = ({ date }) => {
    if (date.getDay() === 0) {
      return true;
    }
  };

  const onChange = (arg) => {
    dispatch(setdate(arg));
  };
  const navigate = useNavigate();

  const handleinfopage = (item) => {
    console.log(item);
    dispatch(settimebtn(item));
    dispatch(settimecountry(item));
    path === "30minutes" && navigate("/info/30minutes");
    path === "15minutes" && navigate("/info/15minutes");
  };
  const [timez, setTimez] = useState("");
  const timezonehandler = (e) => {
    console.log(e.target.value);
    dispatch(settimezone(e.target.value));
    setTimez(e.target.value);
  };

  const [time, setTime] = useState([]);
  useEffect(() => {
    axios
      .get("http://worldtimeapi.org/api/timezone")

      .then((res) => setTime(res.data));
  }, []);
  // dispatch(setday(day))
  // dispatch(setmonth(month))
  // dispatch(settime(time))
  const month = calendardate.toLocaleDateString("en-US", { month: "long" });
  const day = calendardate.toLocaleDateString("en-US", { weekday: "long" });

  useEffect(() => {
    axios.get(`http://worldtimeapi.org/api/timezone/${timez}`).then((res) => {
      console.log(res.data.datetime);
      const isoString = res.data.datetime;
      const hours = parseInt(isoString.substring(11, 13), 10);
      console.log(hours);
      dispatch(setday(day));
      dispatch(setmonth(month));
      dispatch(setcountryhour(hours));
      console.log(day, month);
    });
    // eslint-disable-next-line
  }, [timez]);
  return (
    <div className="containers">
      <div className="b_1">
        <img src={profile} alt="profile" />
        <h2>Anahat Basnet</h2>
        {path === "30minutes" ? "30 Minutes Meeting" : "15 Minutes Meeting"}
        <p>
          {" "}
          <BsFillCameraVideoFill /> Call Video
        </p>
        <p>
          <AiFillClockCircle />
          {path === "30minutes" ? "30 Minutes" : "15 Minutes"}
        </p>
        <BiWorld />
        <select name="TimeZone" onChange={timezonehandler}>
          {time.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <div className="back">
          <Link to="/">
            <BsArrowLeftCircleFill />
          </Link>
        </div>
      </div>
      <div className="b_2">
        <Calendar
          onChange={onChange}
          onClickDay={displayright}
          minDate={current}
          tileDisabled={holiday}
        />
      </div>
      <div className="b_3">
        {timeStamp &&
          (path === "30minutes" ? (
            <div className="btn-time">
              <div className="btn-hr">
                <div className="fulldate">
                  <span>
                    {day}-{month}-{calendardate.getFullYear()}
                  </span>
                </div>
                <div className="toggle">
                  <button
                    onClick={() => {
                      settimeToggle(true);
                    }}
                  >
                    24
                  </button>
                  <button
                    onClick={() => {
                      settimeToggle(false);
                    }}
                  >
                    12
                  </button>
                </div>
              </div>
              {newDimensionArray === null &&
                (!timeToggle ? twelveHrFormat : twentyFourHrFormat).thirty.map(
                  (items) => (
                    <button
                      onClick={() => {
                        handleinfopage(items);
                      }}
                    >
                      {items}
                    </button>
                  )
                )}
              {newDimensionArray !== null &&
                newDimensionArray.map((items) => (
                  <button
                    onClick={() => {
                      handleinfopage(items);
                    }}
                  >
                    {items}
                  </button>
                ))}
            </div>
          ) : (
            <div className="btn-time">
              <div className="btn-hr">
                <div className="fulldate">
                  <span>
                    {day}-{month}-{calendardate.getFullYear()}
                  </span>
                </div>
                <div className="toggle">
                  <button
                    onClick={() => {
                      settimeToggle(true);
                    }}
                  >
                    24
                  </button>
                  <button
                    onClick={() => {
                      settimeToggle(false);
                    }}
                  >
                    12
                  </button>
                </div>
              </div>
              {(!timeToggle ? twelveHrFormat : twentyFourHrFormat).fifteen.map(
                (items) => (
                  <button
                    onClick={() => {
                      handleinfopage(items);
                    }}
                  >
                    {items}
                  </button>
                )
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Calmain;
