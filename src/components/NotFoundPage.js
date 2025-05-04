import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div>
        NotFoundPage
       <Link to={"/"}><button>Go Back Home</button></Link>
    </div>
  )
}

export default NotFoundPage