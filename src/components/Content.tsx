import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Highlights from "./Highlights";

const Content = () => {
  return (
    <article className="layout mt-8">
      <div className="grid gap-4">
        <CurrentWeather />
        <h2 className="title">Sonraki 5 Gün</h2>
        <Forecast/>
      </div>
      <div>
        <Highlights/>
      </div>
    </article>
  );
};

export default Content;
