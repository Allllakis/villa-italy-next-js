import Slider2 from "../components/slider2/Slider2";
import About from "../components/about/about";
import classes from "../styles/Home.module.css";
import DetailsItem from "../components/details/detailsItem";

export default function HomePage(props) {
  return (
    <div className={classes.main}>
      <Slider2 />
      <About />
      <DetailsItem />
    </div>
  );
}
