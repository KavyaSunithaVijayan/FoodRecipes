import Footer from "./component/common/footer";
import HomeSlider from "./component/content/carousel";
import HomePage from "./page/HomePage";
// import { HomeCarousel } from "./component/content/carousel";

function App() {
  return (
    <>
      <div className="w-full flex flex-col">
        <div className="flex-grow">
          <HomePage />
        </div>
        <Footer />
        {/* <HomeSlider /> */}
      </div>
    </>
  );
}

export default App;
