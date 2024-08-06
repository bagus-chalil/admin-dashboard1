import React from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <div>
      This is Product <Link to='/' className='underline'>Go to Dashboard</Link>
    </div>
  )
}
