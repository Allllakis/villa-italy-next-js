import React from "react";
import Image from "next/image";

import classes from "./detailsItem.module.css";
import { images } from "./DataImageDetails";
import Button from "../ui/button";

const DetailsItem = () => {
  return (
    <section className={classes.details}>
      <div className={classes.container}> 
        <h2>Details</h2>
        <div className={classes.underline}></div>
        <div className={classes.detailitems}>
        {images.map((item, index) => {
          return (
            <div className={classes.wrapper} key={index}>
              <div className={classes.imgcontainer}>
                <Image src={item.image} alt="villa" layout="fill" />
              </div>

              <h3>{item.title}</h3>
              <p className={classes.text}>{item.description}</p>
              <Button>
                <span className={classes.btn}>More</span>
              </Button>
            </div>
          );
        })}
        </div>
        
      </div>
    </section>
  );
};

export default DetailsItem;
