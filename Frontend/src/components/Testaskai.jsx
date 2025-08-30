import React from 'react'
import { useSelector } from 'react-redux'


const Testaskai = () => {
    const latestdata = useSelector((state)=>state.conceptMap.latest)
    console.log(latestdata)
  return (
    <div>
      <h1>d;sklfnklds</h1>
    </div>
  )
}

export default Testaskai
