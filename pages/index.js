import Slider from "../components/slider/Slider";
import classes from '../styles/Home.module.css'

export default function HomePage(props) {
  return (
    <div className={classes.main}>
      <Slider />
    </div>
  );
}
