import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { allCollectionsPagination } from "../../api/api";
import Pagination from "../Pagination/Pagination";
import Spinner from "../Spinner/Spinner";

const MasonryGallery = ({loading, images, currentPage, setCurrentPage, totalPages}) => {
  return (
    <div>
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 2, 900: 3, 1700: 4 }}
        >
          <Masonry gutter="16px">
            {images?.map((image) => (
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
      )}
      <div className="pagination mx-auto my-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default MasonryGallery;
