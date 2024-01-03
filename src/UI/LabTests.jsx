import React from 'react'
import style from '../Styles/LabTest.module.scss'
import { FaRegFilePdf } from "react-icons/fa";
import { labtest } from '../assets/Index';

function LabTests() {
  return (
    <div className={style.labtests}>
        <div className={style.container}>
            <div className={style.left}>
                <div className={style.subLeft}>
                <FaRegFilePdf className={style.icon}/>

                </div>
                <div className={style.subRight}>
                    <p><b>LabTest.pdf</b></p>
                    <a>View</a>
                </div>
            </div>
            <div className={style.right}>
<p className={style.date}>
16/11/2023
</p>
            </div>
        </div>
        <div className={style.container}>
            <div className={style.left}>
                <div className={style.subLeft}>
                <img src={labtest} className={style.img}/>

                </div>
                <div className={style.subRight}>
                    <p><b>LabTest.png</b></p>
                    <a>View</a>
                </div>
            </div>
            <div className={style.right}>
<p className={style.date}>
16/11/2023
</p>
            </div>
        </div>
      
    </div>
  )
}

export default LabTests
