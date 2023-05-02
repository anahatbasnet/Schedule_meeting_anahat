import React from 'react'
import{MdOutlineDoneOutline} from "react-icons/md"
import { Link, useParams } from 'react-router-dom'
import "../assets/complete.css";
import { useSelector } from 'react-redux';


const Complete = () => {
    const day = useSelector((state) => state.CalendarSlice.day);
    const month = useSelector((state) => state.CalendarSlice.month);
    const { timebtn } = useSelector((state) => state.timehandler);
    const timename = useSelector ((state)=>state.CalendarSlice.timezone)
  
    const{duration} =useParams();
   const username = useSelector ((state)=>state.userdata.username)
   const email = useSelector ((state)=>state.userdata.email)
   const guestmail = useSelector ((state)=>state.userdata.guestemail)
   const description = useSelector ((state)=>state.userdata.description)
  return (
   <div className="complete-card">
    <div className="done">
        <MdOutlineDoneOutline/>
        <h2>Your event has been scheduled</h2>
        <p>You and any other attendees have been emailed with this information</p>

    </div>
    <div className="contents">
        <h2>What</h2>
       {duration==="15minutes"?"15 Minute Meeting":"30 Minute Meeting"}
        <h2>When</h2>
        <p>11,{day},{month},2023|{timebtn}|{timename}</p>
        <h2>Who</h2>
        <p>Anahat Basnet -Organizer anaha@gmailcom</p>
        Attendies:<p>{username} - {email}</p>
        Guest:{guestmail}
        <h2>Where</h2>
        <p>Video call</p>
        <h2>What</h2>
        <p>{description}</p>


    </div>
    <div className="changes">
        Need to make  a change?<Link to ={`/${duration}`}>Reschedule</Link> <Link to="/Cancel">Cancel</Link> 

    </div>

   </div>
  )
}

export default Complete