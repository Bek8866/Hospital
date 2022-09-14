import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Testimonial.scss'
import Container from "../../UsableComponents/Container/Container";
import Title from "../../UsableComponents/Title/Title";
import {ReactComponent as Tilda} from '../../../assets/icons/Tilda.svg'

const data = [{
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
    author: 'John Doe'
}, {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
    author: 'John Doe'
}, {
    id: 3,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
    author: 'John Doe'
}, {
    id: 4,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
    author: 'John Doe'
}, {
    id: 5,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
    author: 'John Doe'
},]

function Testimonial() {
    return (<section className='testimonial'>
        <Container>
            <Title children={'Testimonial'} url={null}/>
            <div className='slider'>
                <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      pagination={{
                          clickable: true,
                      }}
                      style={{
                          "--swiper-navigation-color": "#1F2B6C", "--swiper-pagination-color": "#1F2B6C",
                      }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      className="mySwiper"
                >
                    {data.map(item => (<SwiperSlide key={item.id}>
                        <div className='slider__wrapper'>
                            <Tilda/>
                            <p className='title'>{item.title}</p>
                            <hr/>
                            <p className='author'>{item.author}</p>
                        </div>
                    </SwiperSlide>))}
                </Swiper>
            </div>
        </Container>
    </section>)
}

export default Testimonial