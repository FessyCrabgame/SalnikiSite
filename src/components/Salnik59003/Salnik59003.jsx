import Footer from "../Footer/Footer";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import SwiperPhotos from "../SwiperPhotos/SwiperPhotos";
import Warning from "../Warning/Warning";
import Header from "../Header/Header";
import SalnikNajimnoyMainInfo from "../SalnikNajimnoyMainInfo/SalnikNajimnoyMainInfo";



export default function Salnik59003(){
    return(
        <div>
            <Header />
            <SalnikNajimnoyMainInfo />
            <Warning />
            <SwiperPhotos />
            <RegistrationForm />
            <Footer />
        </div>
    )
}