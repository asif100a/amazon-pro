import BannerSlider from "../../components/sections/BannerSlider";
import TopCategories from "../../components/sections/TopCategories";
import TopFavoriteCategories from "../../components/sections/TopFavoriteCategories";

const Home = () => {
    return (
        <main className="bg-gray-100">
            <section className="relative">
                {/* Slide images of the banner */}
                <BannerSlider />
                <div className="absolute -bottom-20 z-10 w-full">
                    {/* The top and favorite categories section */}
                    <TopFavoriteCategories />
                </div>
            </section>
            
            {/* Top categories section */}
            <section className="mt-8">
                <TopCategories />
            </section>

            <div>
                <h1 className="text-5xl font-bold">Another image</h1>
                <img src="https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/65f7e373d61902ef2303ef2d_Toilet-Cleaners.webp" alt="Image" />
            </div>
        </main>
    );
};

export default Home;