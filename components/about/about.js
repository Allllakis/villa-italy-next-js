import classes from './about.module.css'
import Button from '../ui/button';

const About = () => {
  return (
    <section className={classes.about}>
      <div className={classes.wrapper}>
        <h2>OUR VIEW</h2>
        <div className={classes.underline}></div>
        <p>
          Villa Sirenuse is a comfortable and relaxing retreat designed to blend
          contemporary style with more than a touch of country-house romance,
          just a stroll away from Colli di Fontanelle
        </p>
        <Button>
            <span>Book Your Stay</span>
        </Button>
      </div>
    </section>
  );
};

export default About;
