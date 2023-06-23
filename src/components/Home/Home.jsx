import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <img
        className={classes.banner}
        src={"https://wallpapercave.com/wp/wp5858201.png"}
        alt="banner"
      />
    </div>
  );
};

export default Home;
