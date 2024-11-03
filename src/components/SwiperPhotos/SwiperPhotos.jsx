import { swiperPhotosData } from "../../../public/data/swiperPhotos";
import css from './SwiperPhotos.module.css'
import { useState } from "react";


export default function SwiperPhotos(){
    const[photoNumber, setphotoNumber] = useState(1000)

    return(
        <div>
            <div className={css.swiper}>
                <img width="340" height="340" src={`${swiperPhotosData[photoNumber%swiperPhotosData.length].src}`} alt="photoSwiper"/>            
                {window.innerWidth>680?<img className={css.swiperImage} width="340" height="340" src={`${swiperPhotosData[(photoNumber+1)%swiperPhotosData.length].src}`} alt="photoSwiper"/>: ''}
                {window.innerWidth>1020?<img className={css.swiperImage} width="340" height="340" src={`${swiperPhotosData[(photoNumber+2)%swiperPhotosData.length].src}`} alt="photoSwiper"/>: ''}
                {window.innerWidth>1360?<img className={css.swiperImage} width="340" height="340" src={`${swiperPhotosData[(photoNumber+3)%swiperPhotosData.length].src}`} alt="photoSwiper"/>: ''}
                {window.innerWidth>1700?<img className={css.swiperImage} width="340" height="340" src={`${swiperPhotosData[(photoNumber+4)%swiperPhotosData.length].src}`} alt="photoSwiper"/>: ''}
            </div>
            <div className={css.pageLeft} onClick={() => setphotoNumber(photoNumber-1)}>▶</div>
            <div className={css.pageRight} onClick={() => setphotoNumber(photoNumber+1)}>▶</div>
        </div>
    )
}