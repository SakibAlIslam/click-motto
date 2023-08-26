import "./App.css";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import MasonryGallery from "./components/MasonryGallery/MasonryGallery";
import Navbar from "./components/Navbar/Navbar";
import TopCategories from "./components/TopCategories/TopCategories";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <HeroBanner />
        <TopCategories />
        <MasonryGallery />
      </div>
    </>
  );
}

export default App;
