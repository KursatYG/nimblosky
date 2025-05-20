import "./App.css";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <div className="bgColor textColor">
      <div className="h-full max-w-[1500px] m-auto p-6 sm:p-10">
        <WeatherProvider>
          <Navbar />
          <Content />
        </WeatherProvider>
      </div>
    </div>
  );
}

export default App;
