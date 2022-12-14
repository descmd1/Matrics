import React from 'react'
import bar1 from '../assets/images/bar1.svg';
import bar2 from '../assets/images/bar2.svg';
import bar3 from '../assets/images/bar3.svg';
import bar4 from '../assets/images/bar4.svg';
import classes from './ProgressBar.module.css'


const ProgressBar = () => {
  return (

    <>    
    <div className={classes.progress}>
        <img src={bar1} alt='img' width={280}/>
        <img src={bar2} alt='img' width={180}/>
        <img src={bar3} alt='img' width={150}/>
        <img src={bar4} alt='img' width={110}/>
    </div>
    
    </>

  )
}

export default ProgressBar