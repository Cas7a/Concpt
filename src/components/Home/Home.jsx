import classes from "./Home.module.css";
import banner from "../../assets/jordan.png";

const Home = () => {
  return (
    <>
      <div>
        <img className={classes.banner} src={banner} alt="banner" />
      </div>
    </>
  );
};

export default Home;
