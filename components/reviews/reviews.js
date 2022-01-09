import React from "react";
import classes from "./reviews.module.css";
import { allReviews } from "../ui/dummy-data";
import Button from "../ui/button";

const Reviews = () => {
  return (
    <section className={classes.reviews}>
      <div className={classes.container}>
        <h2>Reviews</h2>
        <div className={classes.underline}></div>
        <div className={classes.reviewitems}>
          {allReviews.map((review, index) => {
            return (
              <ul key={index} className={classes.list}>
                <li className={classes.item}>
                  <q className={classes.content}>{review.content}</q>
                </li>
                <li className={classes.item}>
                  <div className={classes.authorunderline}></div>
                  <p className={classes.content}>{review.author}</p>
                </li>
                <li className={classes.item}>
                  <p className={classes.content}>{review.date}</p>
                </li>
              </ul>
            );
          })}
        </div>
        <Button>
          <span className={classes.btn}>All Reviews</span>
        </Button>
      </div>
    </section>
  );
};

export default Reviews;
