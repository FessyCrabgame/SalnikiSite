import css from './Main.module.css'
import SwiperPhotos from '../SwiperPhotos/SwiperPhotos'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import TopOfManePage from '../TopOfMainPage/TopOfManePage'
import MainInfoMainPage from '../MainInfoManePage/MainInfoMainPage'
import Warning from '../Warning/Warning'




export default function Main(){
    return(
        <div className={css.main}>
            <TopOfManePage />
            <MainInfoMainPage />
            <Warning />
            <SwiperPhotos />
            <RegistrationForm />
        </div>
    )
}