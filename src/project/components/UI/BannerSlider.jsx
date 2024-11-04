import slidePhoto_1 from '/slide_1.webp';
import slidePhoto_2 from '/slide_2.webp';
import slidePhoto_3 from '/slide_3.jpg';
import slidePhoto_4 from '/slide_4.jpg';
// import Swiper core and required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

// Custom styles
import '../../../css/custom-css.css';

const BannerSlider = () => {
    const images = [slidePhoto_1, slidePhoto_2, slidePhoto_3, slidePhoto_4];

    return (
        <section>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
                className='w-full h-full'
            >
                {
                    images?.map((image, i) => (
                        <SwiperSlide key={i} className='relative'>
                            <div className='slide-image-container'>
                                <img src={image} alt={`Slide image ${i}`} />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    );
};

export default BannerSlider;