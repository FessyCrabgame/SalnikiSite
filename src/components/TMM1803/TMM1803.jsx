import Footer from "../Footer/Footer";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import SwiperPhotos from "../SwiperPhotos/SwiperPhotos";
import Warning from "../Warning/Warning";
import Header from "../Header/Header";
import TMM1803MainInfo from "../TMM1803MainInfo/TMM1803MainInfo";




export default function TMM1803(){
    return(
        <div>
            <Header />
            <TMM1803MainInfo />
            <Warning />
            <SwiperPhotos />
            <RegistrationForm />
            <Footer />
        </div>
    )
}