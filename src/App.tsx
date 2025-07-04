import HomeSlider from "./component/content/carousel";
import HomePage from "./page/HomePage";
// import { HomeCarousel } from "./component/content/carousel";

function App() {
  return (
    <>
      <div className="w-full">
        <HomePage />
        <HomeSlider />
      </div>
    </>
  );
}

export default App;
