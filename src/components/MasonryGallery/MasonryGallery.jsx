import axios from "axios";
import { useEffect, useState } from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

const MasonryGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiKey = "70s1tgPXz4klLnwEGkTUrKuwOJXGfeJ0d6bye3HWGi3IbCQbfnVqEO6V";
    const apiUrl = `https://api.pexels.com/v1/curated?per_page=27`;

    axios
      .get(apiUrl, {
        headers: {
          Authorization: apiKey,
        },
      })
      .then((response) => {
        setImages(response.data.photos);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);
  return (
    <div className="masonryContainer">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 900: 3, 1920: 4 }}>
        <Masonry gutter="16px">
          {images.map((image) => (
            <div key={image.id} className="masonry-item">
              <img
                className="h-auto w-full object-cover"
                src={image.src.large}
                alt={image.alt}
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default MasonryGallery;
