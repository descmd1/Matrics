import React from 'react'
import Errors from '../components/lasthour/Errors'
import LastHour from '../components/lasthour/LastHour'
import Metrics from '../components/lasthour/Metrics'
import ProgressBar from '../components/ProgressBar'
import Tab from '../components/Tab'
import classes from './Yesterday.module.css'

const LastHours = () => {
  return (
    <div className={classes.container}>
      <Tab/>
      <Metrics/>
      <ProgressBar/>
      <Errors/>
        <LastHour/>
    </div>
  )
}

export default LastHours