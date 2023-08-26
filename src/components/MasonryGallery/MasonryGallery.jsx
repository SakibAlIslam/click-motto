import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Spinner from "../Spinner/Spinner";

const MasonryGallery = ({ loading, contents, activeTab }) => {
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
                    <source src={content?.video_files[0]?.link} type={content?.video_files[0]?.file_type} />
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
      {/* <div className="pagination mx-auto my-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div> */}
    </div>
  );
};

export default MasonryGallery;
