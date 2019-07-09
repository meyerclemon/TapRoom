import React from 'react'
import { Link } from 'react-router-dom'

function Error404(){

  return (
    <div>
      <style jsx>{`
                div {
                  background-color: white;
                  border: solid red;
                  padding: 20px;
                  position: absolute;
                  top: 55%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  text-align: center; 
                }
                h1 {
                  color: red;
                }
              `}</style>
      <h1>ERROR404</h1>
      <h2>The page you are looking for does not seem to exist!</h2>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
    </div>
  )
}

export default Error404