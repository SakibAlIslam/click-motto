import axios from "axios";
const apiKey = "70s1tgPXz4klLnwEGkTUrKuwOJXGfeJ0d6bye3HWGi3IbCQbfnVqEO6V";

export const allCollectionsPagination = async (
  imagesPerPage,
  currentPage,
  setter,
  setLoading
) => {
  setLoading(true);
  try {
    const res = await axios.get(
      `https://api.pexels.com/v1/curated?per_page=${imagesPerPage}&page=${currentPage}`,
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );
    if (res?.status === 200) {
      setTimeout(() => {
        setter(res?.data.photos);
        setLoading(false);
      }, 1000);
    }
  } catch (error) {
    console.warn(error?.response?.data?.message || "Something went wrong");
    setLoading(false);
  }
};

export const getTabWiseContent = async (apiUrl, setter, setLoading, tabId) => {
  setLoading(true);
  try {
    const res = await axios.get(apiUrl, {
      headers: {
        Authorization: apiKey,
      },
    });
    if (res?.status === 200) {
      setTimeout(() => {
        if (tabId === 3) {
          setter(res?.data.videos);
        } else {
          setter(res?.data.photos);
        }
        setLoading(false);
      }, 1000);
    }
  } catch (error) {
    console.warn(error?.response?.data?.message || "Something went wrong");
    setLoading(false);
  }
};
