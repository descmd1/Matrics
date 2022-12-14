import React from 'react'
import box1 from '../../assets/images/box1.svg';
import box2 from '../../assets/images/box2.svg';
import box from '../../assets/images/box.svg';
import box3 from '../../assets/images/box3.svg';
import classes from '../Errors.module.css'

const Errors = () => {
  return (
    
        <div className={classes.boxes}>
        
        <img src={box1} alt='img' width={10} />
        <h6>Error 500: 1 256</h6>
        
        
        <img src={box2} alt='img' width={10}className={classes.errorbox}/>
        <h6>Error 501: 800</h6>
        
        
        <img src={box} alt='img' width={10} className={classes.errorbox}/>
        <h6>Error 502: 650</h6>
        
        
        <img src={box3} alt='img' width={10} className={classes.errorbox}/>
        <h6>Other: 330</h6>
        
   
    </div>
  )
}

export default Errors