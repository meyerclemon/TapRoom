import React from 'react'
import { Link } from 'react-router-dom'
import tapsRow from '../assets/images/tapsRow.jpg'

function Header() {
  return (
    <div>
      <style jsx>{`
        div {
          background-color: goldenrod;
          text-align: center;
          font-family: sans-serif;
          background-image: linear-gradient(to top, 0.25);
        }
      `}</style>
      <img src={tapsRow} />
      <h1>Le Bartender</h1>
      <Link to="/">Home</Link> | <Link to="/newkeg">New Keg</Link>
      <hr />
    </div>
  )
}

export default Header
