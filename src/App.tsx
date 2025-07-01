import Header from "./component/common/header";
import HomeSlider from "./component/content/carousel";
import HomePage from "./page/HomePage";
// import { HomeCarousel } from "./component/content/carousel";

function App() {
  return (
    <>
      <Header />
      <div className="w-full">
        <HomeSlider />
        <HomePage />
      </div>
    </>
  );
}

export default App;
