import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsArrowLeftCircleFill, BsFillCameraVideoFill } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
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
  setdaymonth,
  setyear,
} from "../redux/slice/calSlice";
import { twentyFourHrFormat } from "../utils/Timeformat";
import { twelveHrFormat } from "../utils/Timeformat";
import { settimebtn } from "../redux/slice/timehandlerSlice";

const Calmain = () => {
  const dispatch = useDispatch();
  const [timez, setTimez] = useState("");
  const { path } = useParams();
  const timezonehandler = (e) => {
   
    dispatch(settimezone(e.target.value));
    setTimez(e.target.value);
  };
  const dates = useSelector((state) => state.CalendarSlice.date);
 
  const calendardate = new Date(dates);
    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://worldtimeapi.org/api/timezone"
          );
          setTime(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, []);
    
    const month = calendardate.toLocaleDateString("en-US", { month: "long" });
    const day = calendardate.toLocaleDateString("en-US", { weekday: "long" });
    const dayOfMonth = calendardate.toLocaleDateString("en-US", {
      day: "numeric",
      
    });
    const year = calendardate.toLocaleDateString("en-US", {
      year: "numeric",
      
    });
    
    useEffect(() => {
      async function getTimeData() {
        try {
          const response = await axios.get(
            `http://worldtimeapi.org/api/timezone/${timez}`
            );
            const { datetime } = response.data;
            const hours = parseInt(datetime.substring(11, 13), 10);
            console.log(hours);
            dispatch(setday(day));
            dispatch(setmonth(month));
            dispatch(setcountryhour(hours));
            dispatch(setdaymonth(dayOfMonth));
            dispatch(setyear(year))
            console.log(day, month);
          } catch (error) {
            console.error(error);
          }
        }
        getTimeData();
      }, [timez, day, month, dispatch, dayOfMonth,year]);
      
      const onChange = (arg) => {
        dispatch(setdate(arg));
      };
      const [newTimeslotArray, setnewTimeslotArray] = useState(null);
      const countryhour = useSelector((state) => state.CalendarSlice.countryhour);
      useEffect(() => {
   const val = calendardate.getDay();
    const month = calendardate.getMonth();
   if (
      dates !== "" &&
      currentDate.getDay() === val &&
      currentDate.getMonth() === month
      ) {
        const newTimeslotArray = twentyFourHrFormat.thirty.filter((item) => {
         
          return parseInt(item) > countryhour + 1;
        });
        setnewTimeslotArray(newTimeslotArray);
      } else {
        setnewTimeslotArray(null);
      }
      console.log(newTimeslotArray);
      
   // eslint-disable-next-line
    }, []);
   
    const [timeToggle, settimeToggle] = useState(false);
    const [timeStamp, setTimestamp] = useState(false);
    const navigate = useNavigate();
    const currentDate = new Date();

  const holiday = ({ date }) => {
    if (date.getDay() === 0) {
      return true;
    }
  };

  const displayright = () => {
    setTimestamp(true);
  };

  const handleinfopage = (item) => {
    console.log(item);
    dispatch(settimebtn(item));
    dispatch(settimecountry(item));
    path === "30minutes" && navigate("/info/30minutes");
    path === "15minutes" && navigate("/info/15minutes");
  };

  const [time, setTime] = useState([]);

  return (
    <div className="containers">
      <div className="b_1">
        <img src={profile} alt="profile" />
        <h2>Anahat Basnet</h2>
        {path === "30minutes" ? "30 Minutes Meeting" : "15 Minutes Meeting"}
        <p>
          <BsFillCameraVideoFill /> Video Call
        </p>
        <p>
          <AiFillClockCircle />
          {path === "30minutes" ? "30 Minutes" : "15 Minutes"}
        </p>
        <p>
          <BiWorld />
          <select name="TimeZone" onChange={timezonehandler}>
            {time.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </p>
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
          minDate={currentDate}
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
              {newTimeslotArray === null &&
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
              {newTimeslotArray !== null &&
                newTimeslotArray.map((items) => (
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
              {newTimeslotArray === null &&
                (!timeToggle ? twelveHrFormat : twentyFourHrFormat).fifteen.map(
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
              {newTimeslotArray !== null &&
                newTimeslotArray.map((items) => (
                  <button
                    onClick={() => {
                      handleinfopage(items);
                    }}
                  >
                    {items}
                  </button>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Calmain;
