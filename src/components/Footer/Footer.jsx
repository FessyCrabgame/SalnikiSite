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
                        <p className={css.footerDivSmallP}>Московская область</p>
                        <p className={css.footerDivSmallP}>г.Котельники, ул.Новая д.19</p>
                    </div>
                    <div className={css.footerDivBigDiv}>
                        <p className={css.footerDivSmallP}>Ленинградская область</p>
                        <p className={css.footerDivSmallP}>г.Шушары, Новгородский проспект 26, кор.1, литер А.</p>
                    </div>
                </div>
                <div className={css.footerDiv}>
                    <p className={css.footerDivFatP}>.</p>
                    <div className={css.footerDivBigDiv}>
                        <p className={css.footerDivSmallP}>Ростовская область</p>
                        <p className={css.footerDivSmallP}>г. Ростов-на-Дону Элеваторный переулок,1</p>
                    </div>
                    <div className={css.footerDivBigDiv}>
                        <p className={css.footerDivSmallP}>Краснодарский край</p>
                        <p className={css.footerDivSmallP}>г.Краснодар ул. Тополиная 25</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}