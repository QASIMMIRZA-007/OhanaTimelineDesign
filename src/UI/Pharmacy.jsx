import React from 'react'
import style from '../Styles/Pharmacy.module.scss'
import { PharmacyIcon } from '../assets/Index'
import { MdOutlineLocalPharmacy } from "react-icons/md";
import { GoFileZip } from "react-icons/go";


function Pharmacy() {
  return (
    <div className={style.pharmacy}>
        <div className={style.container}>
            <div className={style.left}>
                {/* <div> </div> */}
                <MdOutlineLocalPharmacy className={style.icon}/>
            </div>
            <div className={style.right}>
                <p><b>Pharmacy name</b></p>
                <p>ABC Chemist center</p>
            </div>
        </div>
        <div className={style.container}>
            <div className={style.left}>
          
                <GoFileZip className={style.icon}/>
            </div>
            <div className={style.right}>
                <p><b>Zip code</b></p>
                <p>87080</p>
            </div>
        </div>
      
    </div>
  )
}

export default Pharmacy
