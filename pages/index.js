import Slider from "../components/slider/Slider";
import Slider2 from "../components/slider2/Slider2";
import classes from '../styles/Home.module.css'

export default function HomePage(props) {
  return (
    <div className={classes.main}>
      {/* <Slider /> */}
      <Slider2 />
    </div>
  );
}
