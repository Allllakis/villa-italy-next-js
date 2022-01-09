import classes from "./about.module.css";
import Button from "../ui/button";

const About = () => {
  return (
    <section className={classes.about}>
      <div className={classes.wrapper}>
        <h2>OUR VIEW</h2>
        <div className={classes.underline}></div>
        <p className={classes.description}>
          Villa Sirenuse is a comfortable and relaxing retreat designed to blend
          contemporary style with more than a touch of country-house romance,
          just a stroll away from Colli di Fontanelle
        </p>
        <div className={classes.underline}></div>
        <p className={classes.content}>
          Designed to blend contemporary style with more than a touch of
          country-house romance, the splendid Villa Sirenuse sits amid tiered
          gardens, 300m above the blue of the bay. Tree-shaded lawns, paved
          paths and timber sundecks enjoy terrific views over the pretty Li
          Galli islets and encompass an outdoor barbecue, sundowner tables, a
          rustic gazebo with cushioned seating, a bamboo-shaded al fresco gym,
          three outdoor showers, and a gorgeous infinity pool. Adjoining the
          house, a sunny, sea-view dining terrace is fitted with a retractable
          canopy and leads in to the villa’s breakfast kitchen, which shares
          this upper level with an elegantly informal living/dining room and two
          of the four bedrooms. Two indulgent master suites occupy the lower
          level, both opening out to a furnished terrace complete with a
          five-person hot tub; and the villa has WiFi, smart TV and air
          conditioning throughout. Cook service can be pre-booked to add an
          extra level of leisure here, and Villa Sirenuse is just 700m from a
          bakery, shops and eateries in Colli di Fontanelle, 8km from bustling
          Sorrento, and 10km from the beach at Positano.
        </p>
        <Button>
          <span className={classes.btn}>Book Your Stay</span>
        </Button>
      </div>
    </section>
  );
};

export default About;
