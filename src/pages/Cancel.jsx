import React from 'react'
import { Link } from 'react-router-dom'
import {VscError} from 'react-icons/vsc'
import "../assets/cancel.css"

const Cancel = () => {
  return (
    <>
    <div className="cancel">

    <VscError style={{fontSize:"5rem" ,color:"red"}}/>
    <h2>Your event has been cancelled</h2>
    <p>You can <Link to = "/">schedule your meeting </Link> again. Thank you !</p>
    </div>
    </>
  )
}

export default Cancel