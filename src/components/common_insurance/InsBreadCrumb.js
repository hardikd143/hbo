import React from 'react'
import { Link } from 'react-router-dom'
const InsBreadCrumb = ({type}) => {
  return (
      <>
      <div className='InsBreadCrumb'>
      <Link to="/">Home</Link> / {type}-Insurance
      </div>
      </>
  )
}

export default InsBreadCrumb