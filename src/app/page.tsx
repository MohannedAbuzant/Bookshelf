import BrowseCategories from "@/components/browse-categories/browse-categories";
import CategoriesSection from "@/components/categories-section/categories-section";
import Footer from "@/core/components/footer/footer";
import { UI_COLORS } from "@/constants/constants";

export default function Home() {
  return (
    <>
      <main>
        <BrowseCategories></BrowseCategories>
        <CategoriesSection
          title="Nonfiction"
          categoryKey="nonfiction"
          backgroundColor={UI_COLORS.LIGHT_GRAY}
          bookTitleColor="black"
          carouselTitleColor="black"
          byTextColor="black"
        ></CategoriesSection>

        <CategoriesSection
          title="Fiction"
          categoryKey="fiction"
          backgroundColor={UI_COLORS.LIGHT_BLACK}
          bookTitleColor="white"
          carouselTitleColor="white"
          byTextColor="green"
        ></CategoriesSection>

        <CategoriesSection
          title="Children's"
          categoryKey="children"
          backgroundColor={UI_COLORS.LIGHT_GRAY}
          bookTitleColor="black"
          carouselTitleColor="black"
          byTextColor="black"
        ></CategoriesSection>
        <CategoriesSection
          title="Self Improvement"
          categoryKey="self_improvement"
          backgroundColor={UI_COLORS.LIGHT_BLACK}
          bookTitleColor="white"
          carouselTitleColor="white"
          byTextColor="green"
        ></CategoriesSection>
        <Footer></Footer>
      </main>
    </>
  );
}
