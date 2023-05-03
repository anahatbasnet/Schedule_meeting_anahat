import { BsFillCameraVideoFill, BsFillPersonPlusFill } from "react-icons/bs";
import { AiFillClockCircle, AiOutlineCalendar } from "react-icons/ai";
import "flatpickr/dist/themes/material_blue.css";
import "../assets/calendar.css";
import profile from "../assets/images/profile.jpg";
import "react-calendar/dist/Calendar.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setDesrciption,
  setEmail,
  setUsername,
  setguestEmail,
} from "../redux/slice/dataSlice";

import { useState } from "react";

const Info = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { timebtn } = useSelector((state) => state.timehandler);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/Complete/${detail}`);
    dispatch(setUsername(input.username));
    dispatch(setEmail(input.email));
    dispatch(setguestEmail(input.guestemail));
    dispatch(setDesrciption(input.description));
  };
  const [toggler, setToggler] = useState(false);
  const togglerhandle = () => {
    setToggler(!toggler);
  };
  const [input, setInput] = useState({
    username: "",
    email: "",
    guestemail: "",
    description: "",
  });
  const usernamehandler = (event) => {
    return setInput((prevState) => {
      return { ...prevState, username: event.target.value };
    });
  };

  const emailhandler = (event) => {
    return setInput((prevState) => {
      return { ...prevState, email: event.target.value };
    });
  };
  const guestemailhandler = (event) => {
    return setInput((prevState) => {
      return { ...prevState, guestemail: event.target.value };
    });
  };
  const descriptionhandler = (event) => {
    return setInput((prevState) => {
      return { ...prevState, description: event.target.value };
    });
  };
  const { detail } = useParams();
 

  const day = useSelector((state) => state.CalendarSlice.day);
  const month = useSelector((state) => state.CalendarSlice.month);
  const daymonth = useSelector((state) => state.CalendarSlice.daymonth);
  const year = useSelector((state) => state.CalendarSlice.year);

  return (
    <div className="containers">
      <div className="b_1">
        <img src={profile} alt="profile" />
        <h2>Anahat Basnet</h2>
        {detail === "30minutes" ? "30 Minutes Meeting" : "15 Minutes Meeting"}
        <p>
          <BsFillCameraVideoFill /> Video Call
        </p>
        <p>
          <AiFillClockCircle />
          {detail === "30minutes" ? "30 Minutes" : "15 Minutes"}
        </p>
        <p>
          <AiOutlineCalendar />
          {timebtn}-{daymonth},
          {month},{day},{year}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="b_2">
          Your Name
          <input
            type="text"
            placeholder="John Doe"
            onChange={usernamehandler}
            required
          />
          Email address
          <input
            type="email"
            placeholder="you@example.com"
            onChange={emailhandler}
            required
          />
          {toggler && (
            <div>
              Guest Email
              <input
                type="email"
                placeholder="you@example.com"
                onChange={guestemailhandler}
                required
                style={{ width: "100%" }}
              />
            </div>
          )}
          Additional Note
          <textarea
            rows="4"
            cols="50"
            placeholder="Please share anything that will help prepare for our meeting"
            onChange={descriptionhandler}
            required
          />
          <div className="action">
            <button onClick={togglerhandle}>
              <BsFillPersonPlusFill />
            </button>
            <Link to="/Cancel">
              <button>Cancel</button>
            </Link>

            <button>Schedule</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Info;
