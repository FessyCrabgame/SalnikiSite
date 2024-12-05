import css from './TopOfManePage.module.css'


export default function TopOfManePage(){
    return(
        <div className={css.superDiv}>
            <div className={css.middleDiv}>
                <p className={css.middleP}>Сальник-24</p>
                <div className={css.middleDivFire}>
                    <p className={css.middleSroki}>Когда сроки горят</p>
                    <img src={'../../assets/logo_faier.png'} className={css.logo2} alt="fireLogo" width="36" height="50"/>
                </div>
            </div>
            <div className={css.emailDiv}>
                <p className={css.middlePhone}>8-863-204-61-46</p>
                <p className={css.email}>zakaz10@salnik24.ru</p>
            </div>
            <div className={css.imageStayDiv} onClick={() => {document.getElementById('gallery').scrollIntoView()}}><p>Оставить заявку</p></div>
            <img src={'../../assets/salnik221.png'} alt="can" width="581" height="384" className={css.can}/>
            <div className={css.leftDiv}>
                <p className={css.rightDivP}>Сальники в наличии</p>
                <p className={css.rightDivP}>Быстрые сроки исполнения</p>
                <p className={css.rightDivP}>Изготовление по вашим чертежам</p>
            </div>
        </div>
    )
}