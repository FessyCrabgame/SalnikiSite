import css from './Header.module.css'
import { Link, useLocation } from 'react-router-dom'
import {useEffect} from 'react'




export default function Header(){
    let location = useLocation();
 

    return(
        <header className={css.header}>
            <Link to={"/"} className={css.link}><p className={css.logoDiv}>
                <img src={'../../assets/logo_salnik.png'} alt="logo" width="20" height="20"/>
                <p className={location.pathname=="/"? css.logoMain: css.mainHeaderText}>Главная</p>
            </p></Link>
            <Link to={"/salnik_nabivnoy/"} className={css.link}><p className={location.pathname=="/salnik_nabivnoy/"? css.logoMain: css.mainHeaderText}>5.900-2</p></Link>
            <Link to={"/salnik_najimnoy/"} className={css.link}><p className={location.pathname=="/salnik_najimnoy/"? css.logoMain: css.mainHeaderText}>5.900-3</p></Link>
            <Link to={"/salnik_tmm_18_03/"} className={css.link}><p className={location.pathname=="/salnik_tmm_18_03/"? css.logoMain: css.mainHeaderText}>ТММ 18-03</p></Link>
            <Link to={"/s_3_903_kl13_vip_0_1/"} className={css.link}><p className={location.pathname=="/s_3_903_kl13_vip_0_1/"? css.logoMain: css.mainHeaderText}>3.903 кл.13</p></Link>
            <Link to={"/s-5-905-26-08/"} className={css.link}><p className={location.pathname=="/s-5-905-26-08/"? css.logoMain: css.mainHeaderText}>5.905-26.08</p></Link>
            <p onClick={() => {document.getElementById('gallery').scrollIntoView()}} className={css.mainHeaderText}>Фото</p>
            <Link to={"/распродажа-сальников-со-склада/"} className={css.link}><p className={location.pathname=="/распродажа-сальников-со-склада/"? css.logoMain: css.mainHeaderText}>Скидки</p></Link>
            <Link to={"/about_us/"} className={css.link}> <p className={location.pathname=="/about_us/"? css.logoMain: css.mainHeaderText}>О нас</p></Link>
            <p onClick={() => {document.getElementById('gallery').scrollIntoView()}}  className={css.mainHeaderText}>Доставка</p>
            <p className={css.mainHeaderText}>8-863-204-61-46</p>
            <p onClick={() => {document.getElementById('gallery').scrollIntoView()}} className={css.mainHeaderText}>Отправить заявку</p>
            <p className={css.mainHeaderText}>zakaz7@salnik24.ru</p>
        </header>
    )
}