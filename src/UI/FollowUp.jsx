import React from 'react'
import style from '../Styles/FollowUp.module.scss'
function FollowUp() {
  return (
    <div className={style.followupContainer}>
    <div className={style.followup}>
      <div className={style.container}>
        <div className={style.left}>
          <p>Follow-up #</p>
          <p>Scheduled</p>
          <p>Status</p>
        </div>
        <div className={style.right}>
        <p>1</p>
        <p>28 Nov at 4:00 PM</p>
        <p>Upcoming</p>
        </div>
       

      </div>
      <div className={style.btnGrp}>
        <button className={style.btnDel}>Delete</button>
        <button className={style.btnReshedule}>Reshedule</button></div>
      
    </div>
    </div>
  )
}

export default FollowUp
