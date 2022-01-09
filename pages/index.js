import Slider2 from "../components/slider2/Slider2";
import About from "../components/about/about";
import classes from "../styles/Home.module.css";
import DetailsItem from "../components/details/detailsItem";
import AllPhotos from "../components/allPhotos/all-photos";
import Reviews from "../components/reviews/reviews";

export default function HomePage(props) {
  return (
    <div className={classes.main}>
      <Slider2 />
      <About />
      <DetailsItem />
      <AllPhotos />
      <Reviews />
    </div>
  );
}
