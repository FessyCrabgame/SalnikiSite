import Footer from "../Footer/Footer";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import SwiperPhotos from "../SwiperPhotos/SwiperPhotos";
import Warning from "../Warning/Warning";
import Header from "../Header/Header";
import S59052608MainInfo from "../S59052608MainInfo/S59052608MainInfo";


export default function S59052608(){
    return(
        <div>
            <Header />
            <S59052608MainInfo />
            <Warning />
            <SwiperPhotos />
            <RegistrationForm />
            <Footer />
        </div>
    )
}