import React from 'react'
import classes from '.././LastFriday.module.css'
import oval1 from '../../assets/images/oval1.svg'
import oval2 from '../../assets/images/oval2.svg'
import oval3 from '../../assets/images/oval3.svg'


const LastHour = () => {
  return (
    <>
    <div className={classes.lastfriday1}>
    <img src={oval1} alt='' className={classes.ovals1}/>
        <div>
        <h5 className={classes.mobile}>Searches <span className={classes.five}>+5%</span></h5>
        <h5 className={classes.mobile}>66815 <span className={classes.ystday}>Current</span></h5>
        <h5 className={classes.muted}>27 985 <span className={classes.ystday}>Previous</span></h5>
        </div>

        <div  className={classes.right1}>
        <h5 className={classes.mobile}>Mobile traffic: 100% </h5>
        <h5 className={classes.mobile}>Web traffic: 100%</h5>
        <h5 className={classes.muted}>You get 100% traffic on mobile and desktop devices.</h5>
        <h5 className={classes.help}>Help: <span className={classes.spans}>Searches, Pessimisation</span></h5>
        </div>
    </div>

    <div className={classes.lastfriday2}>
    <img src={oval2} alt='' width={40} className={classes.ovals2}/>
        <div>
        <h5 className={classes.click}>Clicks <span className={classes.btn}>784</span></h5>
        <h5 className={classes.mobile}> 98 <span className={classes.ystday}>Current</span></h5>
        <h5 className={classes.muted}>784 <span className={classes.ystday}>Previous</span></h5>
        </div>

        <div  className={classes.right}>
        <h5 className={classes.click}>CTR: 0.640574721245229</h5>
        <h5 className={classes.muted}>Conversion from searches  to clicks on all devices.</h5>
        <h5 className={classes.help}>Help: <span className={classes.spans}>CTR, Cliks</span></h5>
        </div>
    </div>

    <div className={classes.lastfriday3}>
    <img src={oval3} alt='' width={40} className={classes.ovals3}/>
        <div>
        <h5 className={classes.mobile}>Sales</h5>
        <h5 className={classes.mobile}>24 <span className={classes.ystday}>Current</span></h5>
        <h5 className={classes.muted}>26 <span className={classes.ystday}>Previous</span></h5>
        </div>

        <div className={classes.right2}>
        <h5 className={classes.mobile}>STR: null</h5>
        <h5 className={classes.mobile}>Avg. Check: 8 903₽</h5>
        <h5 className={classes.muted}>Conversion from cliks  to bookings on all devices.</h5>
        <h5 className={classes.help}>Help: <span className={classes.spans}>STR, Bookings, Avg. Check</span></h5>
        </div>
    </div>
    <div className={classes.lastfriday3}>
    <img src={oval3} alt='' width={40} className={classes.ovals3}/>
        <div>
        <h5 className={classes.mobile}>Bookings</h5>
        <h5 className={classes.mobile}>98 <span className={classes.ystday}>Current</span></h5>
        <h5 className={classes.muted}> 320 <span className={classes.ystday}>Previous</span></h5>
        </div>

        <div className={classes.right2}>
        <h5 className={classes.mobile}>STR: null</h5>
        <h5 className={classes.mobile}>Avg. Check: 8 903₽</h5>
        <h5 className={classes.muted}>Conversion from cliks  to bookings on all devices.</h5>
        <h5 className={classes.help}>Help: <span className={classes.spans}>STR, Bookings, Avg. Check</span></h5>
        </div>
    </div>
    </>
  )
}

export default LastHour