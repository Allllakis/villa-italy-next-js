import React from "react";
import Image from "next/image";
import classes from "./detailsItem.module.css";
import {images} from './DataImageDetails'

const DetailsItem = () => {
 
  return (
    <section className={classes.details}>
      
        <div className={classes.wrapper}>
          <Image src={images[0].image} alt='villa' width={350} height={350} />
        </div>;
        <div className={classes.wrapper}>
          <Image src={images[1].image} alt='villa' width={350} height={350} />
        </div>;
        <div className={classes.wrapper}>
          <Image src={images[2].image} alt='villa' width={350} height={350} />
        </div>;
    
    </section>
  );
};

export default DetailsItem;
