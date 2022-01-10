import React from "react";
import Image from "next/image";
import Button from "../ui/button";
import {destinationsItems} from '../ui/dummy-data'
import classes from './destinations.module.css'

const Destinations = () => {
  return (
    <section className={classes.section}>
       <div className={classes.container}> 
        <h2>Destinations</h2>
        <div className={classes.underline}></div>
        <div className={classes.detailitems}>
        {destinationsItems.map((item, index) => {
          return (
            <div className={classes.wrapper} key={index}>
              <div className={classes.imgcontainer}>
                <Image src={item.image} alt="villa" layout="fill" />
              </div>

              <h3>{item.title}</h3>
              <p className={classes.text}>{item.description}</p>
              <Button>
                <span className={classes.btn}>Learn More</span>
              </Button>
            </div>
          );
        })}
        </div>
        
      </div>
    </section>
  );
};

export default Destinations;
