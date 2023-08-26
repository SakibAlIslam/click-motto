import "./App.css";
import GalleryTabs from "./components/GalleryTabs/GalleryTabs";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Navbar from "./components/Navbar/Navbar";
import TopCategories from "./components/TopCategories/TopCategories";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <HeroBanner />
        <TopCategories />
        <GalleryTabs />
      </div>
    </>
  );
}

export default App;
