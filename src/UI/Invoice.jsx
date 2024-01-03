import React from 'react'
import style from '../Styles/Invoice.module.scss'
import { BsThermometerSun } from "react-icons/bs";
import { CiStethoscope,CiSun } from "react-icons/ci";
import { Thermametor } from '../assets/Index';



function Invoice() {
  return (
    <div className={style.container}>
        <div className={style.left}>
            <img src={Thermametor} className={style.icon}/>
        </div>
        <div className={style.right}>
            <div className='df g-1'>
            <p><b>Flu (Influenza)</b></p>
            <button>Generate Invoice</button>
            </div>
            <div className='df g-1'>
            <div className="df g-0">
             <span><CiSun  className={style.smallIcon}/> </span>   
                <p>Miscellaneous</p>
            </div>
            <div className='df g-0'>
                <span><CiStethoscope className={style.smallIcon}/> </span>
                <p>Alexis John</p>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Invoice
