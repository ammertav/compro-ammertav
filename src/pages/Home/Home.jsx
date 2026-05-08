import Footer from "../../components/common/Footer/Footer";
import About from "./sections/About/About";
import FAQSection from "./sections/FAQ/FAQSection";
import Hero from "./sections/Hero/Hero";
import "./sections/Hero/Hero.css"
import OurClient from "./sections/OurClient/OurClient";
import OurServices from "./sections/OurService/OurServices";
import OurTechnologies from "./sections/OurTechnologies/OurTechnologies";
import OurProduct from "./sections/Product/OurProduct";
export default function Home(){
    return(
        <>
            <Hero/>
            <About/>
            <OurServices/>
            <OurProduct/>
            <OurTechnologies/>
            <OurClient/>
            <FAQSection/>
            <Footer/>
        </>
    );
};