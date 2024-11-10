import Footer from "../Footer/Footer";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import SwiperPhotos from "../SwiperPhotos/SwiperPhotos";
import Warning from "../Warning/Warning";
import Header from "../Header/Header";
import SalnikNabivnoyMainInfo from "../SalnikNabivnoyMainInfo/SalnikNabivnoyMainInfo";



export default function Salnik59002(){
    return(
        <div>
            <Header />
            <SalnikNabivnoyMainInfo />
            <Warning />
            <SwiperPhotos />
            <RegistrationForm />
            <Footer />
        </div>
    )
}