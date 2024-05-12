
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

const subTitle = "Don’t Miss the Day";
const title = "The People Says About Us";


const clientList = [
    {
        imgUrl: 'assets/images/clients/client.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        desc: "I recently used Tech IT Center for webdesign and digital marketing services and I'm very pleased with the results. They had great customer service and responded quickly to my questions and queries. The design they created was modern, stylish and exactly what I was looking for. They also had great advice when it came to the digital marketing aspects and the campaigns they put together have been producing great results. Highly recommended!",
        name: 'Md. Moshiur Rahman',
        degi: 'Assistant principal',
    },
    {
        imgUrl: 'assets/images/clients/client.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        desc: "I recently used Tech IT Center for a project to design an ecommerce site. They did an excellent job with both the front end design and backend design. The team was very professional and great to work with. They made sure to communicate with us throughout the entire process and kept us updated on the progress. The final product exceeded our expectations and the site looks great. We highly recommend Tech IT Center for any web design projects.",
        name: 'Anjuman Rahamn',
        degi: 'Buisnessman',
    },
    {
        imgUrl: 'assets/images/clients/client-2.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        desc: "I recently used Tech IT Center for Graphic Design and UI/UX services. They provided me with both exceptional customer service and great designs. They were professional and courteous, and they always made sure to keep me in the loop with any updates. They also took the time to understand my needs and create something that was unique and tailored to my brand. I would highly recommend Tech IT Center for any Graphic Design and UI/UX needs.",
        name: 'Umme Nishat',
        degi: 'IT Manager',
    },
]


const Clients = () => {
    return (
        <div className="clients-section padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="clients-slider overflow-hidden">
                        <div className="swiper-wrapper">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={2}
                                loop={'true'}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                breakpoints={{
                                    0: {
                                        width: 0,
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        width: 768,
                                        slidesPerView: 2,
                                    },
                                    1200: {
                                        width: 1200,
                                        slidesPerView: 2.8,
                                    },
                                }}
                            >
                                {clientList.map((val, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="client-item">
                                            <div className="client-inner">
                                                <div className="client-thumb">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                </div>
                                                <div className="client-content">
                                                    <p>{val.desc}</p>
                                                    <div className="client-info">
                                                        <h6 className="client-name">{val.name}</h6>
                                                        <span className="client-degi">{val.degi}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Clients;