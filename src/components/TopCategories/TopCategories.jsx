import TopCategoriesSlider from "./TopCategoriesSlider";

const TopCategories = () => {
  return (
    <section className="topCategories relative mx-4 md:mx-24 -mt-24 py-3 px-8 bg-secondary z-10">
      <h3 className="text-[#333333] font-semibold text-[26px] mb-3">
        Top Categories
      </h3>
      <div className="min-h-[117px]">
        <TopCategoriesSlider />
      </div>
    </section>
  );
};

export default TopCategories;
