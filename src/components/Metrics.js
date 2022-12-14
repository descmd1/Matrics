import React from 'react'
import dots from '../assets/images/dots.svg'
import classes from './Metrics.module.css'

const Metrics = () => {
  return (
    <>    <div className={classes.metrics}>
        <div className={classes.error}>
        <img src={dots} alt='img' width={20}/>
        <h5>Errors: 0,12% </h5>
        </div>
        <div className={classes.error}>
        <img src={dots} alt='img' width={20} className={classes.zero}/>
        <h5>Zeroes: 5,12% </h5>
        </div>
        <div className={classes.error}>
        <img src={dots} alt='img' width={20} className={classes.zero}/>
        <h5>Timeouts: 0,12%  </h5>
        </div>
    </div>
    <div className={classes.metrix}>
            <h6>Average: 0,11%</h6>
            <h6>Average: 0,11%</h6>
            <h6>Average: 0,11%</h6>
        </div>
    </>

  )
}

export default Metrics