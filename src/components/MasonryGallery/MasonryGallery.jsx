import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PropTypes from "prop-types";
import Pagination from "../Pagination/Pagination";
import Spinner from "../Spinner/Spinner";

const MasonryGallery = ({
  loading,
  contents,
  totalPages,
  activeTab,
  currentPage,
  setCurrentPage,
}) => {
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
            {contents?.map((content) => (
              <div key={content.id} className="masonry-item">
                {activeTab === 3 ? (
                  <video controls>
                    <source
                      src={content?.video_files[0]?.link}
                      type={content?.video_files[0]?.file_type}
                    />
                  </video>
                ) : (
                  <img
                    className="h-auto w-full object-cover"
                    src={content?.src?.large}
                    alt={content.alt}
                  />
                )}
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}
      {activeTab === 1 && (
        <div className="pagination mx-auto my-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

MasonryGallery.propTypes = {
  loading: PropTypes.bool.isRequired,
  contents: PropTypes.array.isRequired,
  activeTab: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default MasonryGallery;
