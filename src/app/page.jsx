import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import SidebarCategoryList from "@/components/SidebarcategoryList/SidebarCategoryList";
import Menu from "@/components/Menu/Menu";
import CarouselList from "@/components/carouselList/CarouselList";
import Controls from "@/components/Controls";
import Navbar from "@/components/navbar/Navbar";
export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
                    <Navbar/>

              <SidebarCategoryList/>
              <Controls/>

        <CategoryList/>

        <CarouselList page={page}/>
        
      <div className={styles.content}>
        <CardList page={page}/>
        <Menu />
      </div>
    </div>
  );
}
