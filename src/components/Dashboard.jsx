import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      This is Dashboard <Link className='underline' to="/products">Go to Products</Link>
    </div>
  )
}
