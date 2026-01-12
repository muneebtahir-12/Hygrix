import HealthServices from "./HealthServices"
import Who from "./Who"
import HealthPriority from "./HealthPriority"
import WhyChooseUs from "./WhyChooseUs"
import Success from "./Success"
import Banner from "../components/common/Banner"
import Footer from "../components/common/Footer"
export default function About() {
    return(
        <>
            <HealthServices />
            <Who />
            <HealthPriority />
            <WhyChooseUs />
            <Success />
            <Banner />
            <Footer />
        </>
    )
}