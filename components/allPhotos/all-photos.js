import React from "react";
import Image from "next/image";
import classes from "./all-photos.module.css";
import { allImages } from "../ui/dummy-data";
import Button from "../ui/button";

const AllPhotos = () => {
  return (
    <section className={classes.allphotos}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          {allImages.map((item, index) => {
            return (
              <div key={index} className={classes.imgcontainer}>
                <Image src={item.image} alt="villa" layout="fill" />
              </div>
            );
          })}
        </div>
        <div>
        <Button>
          <span className={classes.btn}>All Photos</span>
        </Button>
        </div>
        
      </div>
    </section>
  );
};

export default AllPhotos;
