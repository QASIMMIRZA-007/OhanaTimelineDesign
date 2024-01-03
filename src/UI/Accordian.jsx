import React , {useState}from 'react'
import style from "../Styles/Accordian.module.scss"
import { FaAngleDown } from "react-icons/fa";

function Accordian() {
    const [visibleMap, setVisibleMap] = useState({});
  
    const handleClick = (index) => {
      setVisibleMap(prevVisibleMap => ({
        ...prevVisibleMap,
        [index]: !prevVisibleMap[index]
      }));
    };


    const data = [
        {
            question:"Existing allergies",
            icon:  <FaAngleDown/> , 
            ans:"asthma, rhinitis, allergen, allergen"
        },
        {
            question:"Existing medications",
            icon:  <FaAngleDown/> , 
            ans:" Crowdsourcing computational strategies; Drug development"
        },
        {
            question:"Pregnancy status",
            icon:  <FaAngleDown/> , 
            ans:"Yes"
        },
        {
            question:"Breastfeeding status",
            icon:  <FaAngleDown/> , 
            ans:"Yes"
        },
          {
            question:"Past medical history",
            icon:  <FaAngleDown/> , 
            ans:"No"
        },
    ]
  return (
    <div className={style.accordian}>
    <div className={style.container}>
  {data?.map((item, index) => (
    <React.Fragment key={index}>
      <div className={style.rect} onClick={() => handleClick(index)}>
        <p>{item.question}</p>
        {item.icon}
      </div>
      {visibleMap[index]  && (
        <div className={style.rectAns}>
          <p><b>{item.ans}</b></p>
        </div>
      )}
    </React.Fragment>
  ))}
</div>
           
    

      
    </div>
  )
}

export default Accordian

