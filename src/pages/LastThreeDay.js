import React from 'react'
import ProgressBar from '../components/ProgressBar'
import Tab from '../components/Tab'
import Errors from '../components/threedays/Errors'
import LastThreeDays from '../components/threedays/LastThreeDays'
import Metrics from '../components/threedays/Metrics'
import classes from './Yesterday.module.css'

const LastThreeDay = () => {
  return (
    <div className={classes.container}>
        <Tab/>
        <Metrics/>
        <ProgressBar/>
        <Errors/>
      <LastThreeDays/>  
    </div>
  )
}

export default LastThreeDay