import BannerSlider from "../../components/UI/BannerSlider";
import TopCategories from "../../components/UI/TopCategories";
import TopFavoriteCategories from "../../components/UI/TopFavoriteCategories";

const Home = () => {
    return (
        <main className="">
            <section className="relative">
                <BannerSlider />
                <div className="absolute -bottom-20 z-10 w-full">
                    <TopFavoriteCategories />
                </div>
            </section>
            <section className="mt-8">
                <TopCategories />
            </section>
        </main>
    );
};

export default Home;