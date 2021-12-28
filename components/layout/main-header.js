import React from "react";
import Link from "next/link";
import Button from "../ui/button";
import classes from "./main-header.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      {/* <div className={classes['text-wrapper']}> */}
        <div className={classes.logo}>
          <Link href="/">VILLA SIRENUSE</Link>
        </div>
        <nav className={classes.navigation}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/destinations">Destinations</Link>
            </li>
            <li>
              <Link href="/reviews">Reviews</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className={classes.btn}>
          <Button link={"/"}>
            <span>Book now</span>
          </Button>
        {/* </div> */}
      </div>
    </header>
  );
};

export default MainHeader;
