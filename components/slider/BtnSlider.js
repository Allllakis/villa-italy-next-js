import React from 'react'
import classes from './Slider.module.css';
import {FaArrowRight, FaArrowLeft } from "react-icons/fa";


const BtnSlider = (direction, moveSlide) => {
    
    const btnClasses = direction === 'next' ? classes['btn-next'] : classes['btn-prev'];

    if(direction === 'next'){
        return (
            <button onClick={moveSlide} className={btnClasses}>
                <FaArrowRight />
            </button>
        )
    } else {
        return (
            <button onClick={moveSlide} className={btnClasses}>
                <FaArrowLeft className={classes["btn-img"]}/>
            </button>
        )
    }
   
}

export default BtnSlider
