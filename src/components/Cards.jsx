import React from "react";
import { Link } from "react-router-dom";
import "../assets/Front.css";
import { AiFillClockCircle } from "react-icons/ai";
import { BsFillArrowRightCircleFill, BsFillPersonFill } from "react-icons/bs";
// import { useSelector } from "react-redux";

const Cards = ({ Minute, Val ,MLink}) => {
  return (
    <>
      <div className="container">
       
            <div className="card">
        
              <Link to={`/${MLink}`} style={{ textDecoration: "none" }}>
                <h2>{Minute}</h2>
                <div className="content">
                  

               <p> <AiFillClockCircle /> {Val}</p>
               
                <div className="meettype">
                  <p>1-</p>
                  <BsFillPersonFill />
                  <p>-1</p>
                </div>
                </div>
                <div className="bttn">

                  Schedule a Meeting 
                </div>
                  <span className="arrow"><BsFillArrowRightCircleFill/></span>
              
              </Link>
            </div>
          </div>
        
    </>
  );
};

export default Cards;
