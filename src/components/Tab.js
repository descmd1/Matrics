import React, { useState } from 'react'
import classes from './Tab.module.css'
import { Link } from 'react-router-dom'

const Tab = () => {

  return (
    <> 
    <h2>Main metrics</h2>   
    <div className={classes.tabdiv}>
<Link to="/">
<button className={classes.tab}>Last hour</button>
</Link>
<Link to="/yesterday">
<button className={classes.tab}>Yesterday</button>
</Link>
<Link to="/last-three-days">
<button className={classes.tab}>Last 3 days</button>
</Link> 
    </div>
    </>

  )
}

export default Tab