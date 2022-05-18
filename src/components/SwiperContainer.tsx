import { Swiper } from 'swiper/react';
import { Pagination, A11y } from 'swiper'
import { ReactNode } from 'react';

interface SwiperSlideProps{
    children: ReactNode;
}

export function SwiperContainer({children}: SwiperSlideProps){
    return(
        <Swiper
        spaceBetween={10}
        slidesPerView={1}
        height={450}
        modules={[Pagination, A11y]}
        pagination={{ clickable: true }}
        navigation
        style={{
          width: "100%",
          maxWidth:"1120px",
          height: "100%",
          minHeight: "500px",
          borderRadius:"0.3rem",
          margin:"2rem 0"
        }}
        >
            {children}
        </Swiper>
    )
}