import React from 'react'
import LastFriday from '../components/LastFriday'
import Errors from '../components/Errors'
import Metrics from '../components/Metrics'
import ProgressBar from '../components/ProgressBar'
import Tab from '../components/Tab'
import classes from './Yesterday.module.css'

const Yesterday = () => {
  return (
    <div className={classes.container}>
        <Tab/>
         <Metrics/>
        <ProgressBar/>
        <Errors/>
        <LastFriday/>
    </div>
  )
}

export default Yesterday