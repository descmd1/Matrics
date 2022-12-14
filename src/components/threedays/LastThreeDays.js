import React from 'react'
import classes from '.././LastFriday.module.css'
import oval1 from '../../assets/images/oval1.svg'
import oval2 from '../../assets/images/oval2.svg'
import oval3 from '../../assets/images/oval3.svg'


const LastThreeDays = () => {
  return (
    <>
    <div className={classes.lastfriday1}>
    <img src={oval1} alt='' className={classes.ovals1}/>
        <div>
        <h5 className={classes.mobile}>Searches <span className={classes.five}>+5%</span></h5>
        <h5 className={classes.mobile}>4445192 <span className={classes.ystday}>Current</span></h5>
        <h5 className={classes.muted}> 6118984 <span className={classes.ystday}>Previous</span></h5>
        </div>

        <div  className={classes.right1}>
        <h5 className={classes.mobile}>Mobile traffic: 0.000999999974737875 </h5>
        <h5 className={classes.mobile}>Web traffic: 0.000999999974737875</h5>
        <h5 className={classes.muted}>You get 100% traffic on mobile and desktop devices.</h5>
        <h5 className={classes.help}>Help: <span className={classes.spans}>Searches, Pessimisation</span></h5>
        </div>
    </div>

    <div className={classes.lastfriday2}>
    <img src={oval2} alt='' width={40} className={classes.ovals2}/>
        <div>
        <h5 className={classes.click}>Clicks <span className={classes.btn}>-13%</span></h5>
        <h5 className={classes.mobile}>50207 <span className={classes.ystday}>Current</span></h5>
        <h5 className={classes.muted}>60505 <span className={classes.ystday}>Previous</span></h5>
        </div>

        <div  className={classes.right}>
        <h5 className={classes.click}>CTR: 1.12946752356254</h5>
        <h5 className={classes.muted}>Conversion from searches  to clicks on all devices.</h5>
        <h5 className={classes.help}>Help: <span className={classes.spans}>CTR, Cliks</span></h5>
        </div>
    </div>

    <div className={classes.lastfriday3}>
    <img src={oval3} alt='' width={40} className={classes.ovals3}/>
        <div>
        <h5 className={classes.mobile}>Sales</h5>
        <h5 className={classes.mobile}>2434 <span className={classes.ystday}>Current</span></h5>
        <h5 className={classes.muted}>1234 <span className={classes.ystday}>Previous</span></h5>
        </div>

        <div className={classes.right2}>
        <h5 className={classes.mobile}>STR: 15.0496942657398</h5>
        <h5 className={classes.mobile}>Avg. Check: 10694.8964067661</h5>
        <h5 className={classes.muted}>Conversion from cliks  to bookings on all devices.</h5>
        <h5 className={classes.help}>Help: <span className={classes.spans}>STR, Bookings, Avg. Check</span></h5>
        </div>
    </div>
    <div className={classes.lastfriday3}>
    <img src={oval3} alt='' width={40} className={classes.ovals3}/>
        <div>
        <h5 className={classes.mobile}>Bookings</h5>
        <h5 className={classes.mobile}>7556 <span className={classes.ystday}>Current</span></h5>
        <h5 className={classes.muted}>8647 <span className={classes.ystday}>Previous</span></h5>
        </div>

        <div className={classes.right2}>
        <h5 className={classes.mobile}>STR: 15.0496942657398</h5>
        <h5 className={classes.mobile}>Avg. Check:10694.8964067661</h5>
        <h5 className={classes.muted}>Conversion from cliks  to bookings on all devices.</h5>
        <h5 className={classes.help}>Help: <span className={classes.spans}>STR, Bookings, Avg. Check</span></h5>
        </div>
    </div>
    </>
  )
}

export default LastThreeDays