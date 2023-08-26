import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const SearchPage = () => {
  const location = useLocation();
  console.log("location: ", location);
  const queryParams = new URLSearchParams(location.state);
  const searchQuery = queryParams;
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.pexels.com/v1/search`, {
          headers: {
            Authorization:
              "70s1tgPXz4klLnwEGkTUrKuwOJXGfeJ0d6bye3HWGi3IbCQbfnVqEO6V",
          },
          params: {
            query: searchQuery,
          },
        });

        setResults(response.data.photos);
      } catch (error) {
        console.error("Error fetching data from Pexels API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="mx-auto px-4 md:px-[128px] mb-8 md:mb-24">
        <h2 className="text-center mb-6 text-gray-500">
          Search Results for {searchQuery}
        </h2>
        <div className="results">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2, 900: 3, 1700: 4 }}
          >
            <Masonry gutter="16px">
              {results?.map((content) => (
                <div key={content.id} className="masonry-item">
                  <img
                    className="h-auto w-full object-cover"
                    src={content?.src?.large}
                    alt={content.alt}
                  />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
