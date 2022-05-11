import React from 'react'
import { Link } from 'react-router-dom'
const InsureFamily = () => {
  return (
    <div className='InsureFamily-wrapper'>
        <h2>All hospital expenses, 100% covered</h2>
        <p>✓ Zero waiting period ✓ Zero deductions at claim</p>
        <Link to="/" className="btn btn-green "> Insure Your Family</Link>
        <Link to="/terms-and-conditions">T & C apply*</Link>
    </div>
  )
}

export default InsureFamily