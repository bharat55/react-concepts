import React from 'react'
import { useParams } from 'react-router-dom'

function Page() {

  const {id} = useParams();
  
  return (
    <div>Pages with id = {id} </div>
  )
}

export default Page