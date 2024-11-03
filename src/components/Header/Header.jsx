import css from './Header.module.css'





export default function Header(){
    return(
        <header className={css.header}>
            <p className={css.logoDiv}>
                <img src={'../../public/assets/logo_salnik.png'} alt="logo" width="20" height="20"/>
                <p className={css.logoMain}>Главная</p>
            </p>
            <p className={css.mainHeaderText}>5.900-2</p>
            <p className={css.mainHeaderText}>5.900-3</p>
            <p className={css.mainHeaderText}>ТММ 18-03</p>
            <p className={css.mainHeaderText}>3.903 кл.13</p>
            <p className={css.mainHeaderText}>5.905-26.08</p>
            <p className={css.mainHeaderText}>Галерея</p>
            <p className={css.mainHeaderText}>Распродажа сальников</p>
            <p className={css.mainHeaderText}>О нас</p>
            <p className={css.mainHeaderText}>Контакты</p>
            <p className={css.mainHeaderText}>8-863-204-61-46</p>
            <p className={css.mainHeaderText}>Отправить заявку</p>
            <p className={css.mainHeaderText}>zakaz7@salnik24.ru</p>
        </header>
    )
}