import MainHeader from "../components/layout/main-header";
import Slider2 from "../components/slider2/Slider2";
import classes from "../styles/Home.module.css";

export default function HomePage(props) {
  return (
    <div className={classes.main}>
      <MainHeader />
      <Slider2 />
    </div>
  );
}
