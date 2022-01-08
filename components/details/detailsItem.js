import React from "react";
import Image from "next/image";
import classes from "./detailsItem.module.css";
import { images } from "./DataImageDetails";
import Button from "../ui/button";

const DetailsItem = () => {
  return (
    <section className={classes.details}>
      {images.map((item, index) => {
        return (
          <div className={classes.wrapper} key={index}>
            <div className={classes.container}>
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
    </section>
  );
};

export default DetailsItem;
