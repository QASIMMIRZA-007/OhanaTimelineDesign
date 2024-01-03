import React from 'react'
import style from "../Styles/Precription.module.scss"
import { GiMedicines } from "react-icons/gi";
import { CiPillsBottle1 } from "react-icons/ci";



function Precription() {
  return (
    <div className={style.precription}>
        <div className={style.container}>
            <div className={style.firstRow}>
                <div className={style.left}>
                <CiPillsBottle1 className={style.icon}/></div>
                <div className={style.right}>
                    <p><b>Medicine name</b></p>
                    <p>ABC Medicine </p>
                </div>
            </div>
            <div className={style.secondRow}>
                <p><b>Potency</b></p>
                <p>200mg</p>
            </div>
            <div className={style.thirdRow}>
                <p><b>Instructions</b></p>
                <p>Lorem ipsum dolor sit amet. Consteur.</p>
            </div>
        </div>
        <div className={style.container}>
            <div className={style.firstRow}>
                <div className={style.left}>
                <CiPillsBottle1 className={style.icon}/></div>
                <div className={style.right}>
                    <p><b>Medicine name</b></p>
                    <p>ABC Medicine </p>
                </div>
            </div>
            <div className={style.secondRow}>
                <p><b>Potency</b></p>
                <p>200mg</p>
            </div>
            <div className={style.thirdRow}>
                <p><b>Instructions</b></p>
                <p>Lorem ipsum dolor sit amet. Consteur.</p>
            </div>
        </div>
      
    </div>
  )
}

export default Precription
