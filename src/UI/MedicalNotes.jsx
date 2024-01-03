import React from 'react'
import style from '../Styles/MedicalNotes.module.scss'
import { MdOutlineSubtitles } from "react-icons/md";
import { CiVial } from "react-icons/ci";
import { CiFileOn } from "react-icons/ci";
import { PdfIcon } from '../assets/Index';



function MedicalNotes() {
  return (
    <div className={style.medicalNotes}>
        <div className={style.container}>
            <div className='df g-2'>
                <div className={style.box}>
<div className='df g-1 al'>
    <MdOutlineSubtitles className={style.icon}/>
    <p><b>Subjective</b></p>
</div>
<p>Lorem ipsum dolor sit amet consectetur. Magna lacus purus nibh sit maecenas elementum. Eu nisl congue pulvinar leo non tincidunt. Pellentesque lectus sapien sit purus faucibus.</p>
                </div>
                <div className={style.box}>
<div className='df g-1 al'>
    <MdOutlineSubtitles className={style.icon1}/>
  
    <p><b>Objective</b></p>
</div>
<p>Lorem ipsum dolor sit amet consectetur. Magna lacus purus nibh sit maecenas elementum. Eu nisl congue pulvinar leo non tincidunt. Pellentesque lectus sapien sit purus faucibus.</p>
                </div>
            </div>
        </div>
        <div className={style.container}>
            <div className='df g-2'>
                <div className={style.box}>
<div className='df g-1 al'>
    <CiVial className={style.icon2}/>
    <p><b>Assesment</b></p>
</div>
<p>Lorem ipsum dolor sit amet consectetur. Magna lacus purus nibh sit maecenas elementum. Eu nisl congue pulvinar leo non tincidunt. Pellentesque lectus sapien sit purus faucibus.</p>
                </div>
                <div className={style.box}>
<div className='df g-1 al'>
    <CiFileOn className={style.icon3}/>
    <p><b>Plan</b></p>
</div>
<p>Lorem ipsum dolor sit amet consectetur. Magna lacus purus nibh sit maecenas elementum. Eu nisl congue pulvinar leo non tincidunt. Pellentesque lectus sapien sit purus faucibus.</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default MedicalNotes
