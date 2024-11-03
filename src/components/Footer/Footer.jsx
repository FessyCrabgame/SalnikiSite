import css from './Footer.module.css'

export default function Footer(){
    return(
        <footer className={css.footer}>
            <div className={css.footerMainBigDiv}>
                <div className={css.footerDiv}>
                    <p className={css.footerDivFatP}>Сальник набивной</p>
                    <div className={css.footerDivBigDiv}>
                        <p className={css.footerDivSmallP}>Изготовление</p>
                        <p className={css.footerDivSmallP}>Монтаж</p>
                        <p className={css.footerDivSmallP}>Таблица размеров</p>
                    </div>
                    <p className={css.footerDivSmallP}>Политика конфиденциальности ООО ИнРеС</p>
                </div>
                <div className={css.footerDiv}>
                    <p className={css.footerDivFatP}>Сальник нажимной</p>
                    <div className={css.footerDivBigDiv}>
                        <p className={css.footerDivSmallP}>Изготовление</p>
                        <p className={css.footerDivSmallP}>Монтаж</p>
                        <p className={css.footerDivSmallP}>Таблица размеров</p>
                    </div>
                </div>
                <div className={css.footerDiv}>
                    <p className={css.footerDivFatP}>Адреса складов</p>
                    <div className={css.footerDivBigDiv}>
                        <p className={css.footerDivSmallP}>Москва</p>
                        <p className={css.footerDivSmallP}>Шоссейный проезд, д.14</p>
                    </div>
                    <div className={css.footerDivBigDiv}>
                        <p className={css.footerDivSmallP}>Санкт-Петербург</p>
                        <p className={css.footerDivSmallP}>ул.Домостроительная, 3 лит. Л</p>
                    </div>
                </div>
                <div className={css.footerDiv}>
                    <p className={css.footerDivFatP}>.</p>
                    <div className={css.footerDivBigDiv}>
                        <p className={css.footerDivSmallP}>Ростов-на-Дону</p>
                        <p className={css.footerDivSmallP}>ул. Доватора, 156/2</p>
                    </div>
                    <div className={css.footerDivBigDiv}>
                        <p className={css.footerDivSmallP}>Краснодар х. Октябрьский</p>
                        <p className={css.footerDivSmallP}>ул.Подсолнечная, 44</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}