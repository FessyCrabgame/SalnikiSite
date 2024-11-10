import Footer from "../Footer/Footer";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import SwiperPhotos from "../SwiperPhotos/SwiperPhotos";
import Warning from "../Warning/Warning";
import Header from "../Header/Header";
import KL390MainInfo from "../KL390MainInfo/KL390MainInfo";


export default function KL3903(){
    return(
        <div>
            <Header />
            <KL390MainInfo />
            <Warning />
            <SwiperPhotos />
            <RegistrationForm />
            <Footer />
        </div>
    )
}