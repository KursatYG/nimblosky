import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";
import Forecast from "./Forecast";
import Highlights from "./Highlights";
import Hours from "./Hours";

const Content = () => {
  return (
    <article className="layout mt-8">
      <div>
        <CurrentWeather />
        <Forecast />
      </div>
      <div>
        <Highlights />
        <Hours />
        <Footer />
      </div>
    </article>
  );
};

export default Content;
