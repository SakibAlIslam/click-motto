import { galleryTabData } from "../../data/fakedata";
import Button from "../Button/Button";
import MasonryGallery from "../MasonryGallery/MasonryGallery";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useEffect, useState } from "react";
import {allCollectionsPagination, getTabWiseContent} from "../../api/api";

const GalleryTabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [loading, setLoading] = useState(true);
  const [contents, setContent] = useState([]);
  const contentsPerPage = 27; // Number of contents per page

  useEffect(() => {
    allCollectionsPagination(contentsPerPage, setContent, setLoading);
  }, []);

  return (
    <section className="GalleryTabsSection mx-auto px-8 md:px-[128px] mb-24">
      <div className="GalleryTabsContainer">
        <div className="GalleryTabs border-none flex items-center justify-between">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            {galleryTabData.map((tab) => (
              <li className="mr-2" key={tab.id} role="presentation">
                <button
                  className={`inline-block pl-0 p-4 rounded-t-lg ${activeTab === tab.id ? "active-tab-style" : ""}`}
                  id={`${tab.id}-tab`}
                  data-tabs-target={`#${tab.id}`}
                  type="button"
                  role="tab"
                  aria-controls={tab.id}
                  aria-selected={activeTab === tab.id ? "true" : "false"}
                  onClick={() => {
                    getTabWiseContent(tab?.api, setContent, setLoading, tab?.id)
                    setActiveTab(tab.id)
                }}
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
          <div className="recommendation">
            <Button
              variant="neutral"
              id="dropdownDividerButton"
              data-dropdown-toggle="dropdownDivider"
              className="!pr-1"
              type="button"
            >
              <div className="flex gap-2 items-center">
                <span className="text-base text-black">Recommended</span>
                <AiOutlineCaretDown size={"12px"} color={"black"} />
              </div>
            </Button>

            <div
              id="dropdownDivider"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
            >
              <ul
                className="py-2 text-sm text-right text-gray-500"
                aria-labelledby="dropdownDividerButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-black"
                  >
                    Most Recent
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-black"
                  >
                    Most Viewed
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-black"
                  >
                    Most Downloaded
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-black"
                  >
                    Most Appreciated
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <MasonryGallery 
            loading={loading}
            contents={contents}
            activeTab={activeTab}
        />
      </div>
    </section>
  );
};

export default GalleryTabs;
