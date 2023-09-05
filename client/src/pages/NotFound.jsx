import React from 'react'
import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'
const NotFound = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5 '>
            <FaExclamationTriangle className='text-danger' size= "250px"/>
            <p>Sorry, This page is not available</p>
            <Link to="/" className='btn btn-secondary'>GO Back</Link>
    </div>
  )
}

export default NotFound