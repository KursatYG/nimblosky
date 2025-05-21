import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";
import Forecast from "./Forecast";
import Highlights from "./Highlights";
import Hours from "./Hours";

const Content = () => {
  return (
    <article className="layout mt-8 sm:overflow-y-hidden h-full">
      <div className="lg:sticky h-fit top-0">
        <CurrentWeather />
        <Forecast />
      </div>
      <div className="lg:overflow-y-auto lg:h-screen">
        <Highlights />
        <Hours />
        <Footer />
      </div>
    </article>
  );
};

export default Content;
